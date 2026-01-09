"use server";

import prisma from "@/lib/config/db/prisma.db";
import { authOptions } from "@/lib/services/auth/auth.option";
import { endOfMonth, isAfter, isBefore, startOfMonth, subMonths } from "date-fns";
import { getServerSession } from "next-auth";

export async function getParticipantsForHost() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "HOST") {
      return {
        success: false,
        message: "Unauthorized",
        data: [],
      };
    }

    const hostId = session.user.id;

    const participants = await prisma.participant.findMany({
      where: {
        event: {
          hostId,
        },
      },
      orderBy: {
        joinedAt: "desc",
      },
      select: {
        id: true,
        joinedAt: true,
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            image: true,
          },
        },
        event: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    return {
      success: true,
      data: participants,
    };
  } catch (error: any) {
    console.error("getParticipantsForHost error:", error);

    return {
      success: false,
      message: "Failed to fetch participants",
      data: [],
    };
  }
};



export async function getRevenueForHost() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "HOST") {
      return {
        success: false,
        message: "Unauthorized",
        data: [],
      };
    }

  const hostId = session.user.id;
  
  if (!hostId) {
    throw new Error("Host ID is required.");
  }

  // Check if the host exists
  const hostExists = await prisma.user.findUnique({
    where: { id: hostId },
    select: { id: true },
  });

  if (!hostExists) {
    throw new Error("Host not found.");
  }

  const now = new Date();
  const startThisMonth = startOfMonth(now);
  const endThisMonth = endOfMonth(now);

  const startLastMonth = startOfMonth(subMonths(now, 1));
  const endLastMonth = endOfMonth(subMonths(now, 1));

  // Fetch all hosted events for the host
  const events = await prisma.event.findMany({
    where: { hostId },
    include: { participants: true },
  });

  if (!events || events.length === 0) {
    return {
      data: {
        totalRevenue: 0,
        thisMonth: 0,
        lastMonth: 0,
        events: [],
      },
    };
  }

  const eventRevenueData = events.map((event) => {
    const totalAttendees = event.participants.length;

    // Filter participants by month for proper monthly revenue
    const participantsThisMonth = event.participants.filter(
      (p) => isAfter(p.joinedAt, startThisMonth) && isBefore(p.joinedAt, endThisMonth)
    ).length;

    const participantsLastMonth = event.participants.filter(
      (p) => isAfter(p.joinedAt, startLastMonth) && isBefore(p.joinedAt, endLastMonth)
    ).length;

    return {
      id: event.id,
      title: event.title,
      joiningFee: event.joiningFee,
      attendees: totalAttendees,
      participantsThisMonth,
      participantsLastMonth,
    };
  });

  // Compute revenues
  const totalRevenue = eventRevenueData.reduce(
    (acc, e) => acc + e.joiningFee * e.attendees,
    0
  );

  const thisMonthRevenue = eventRevenueData.reduce(
    (acc, e) => acc + e.joiningFee * e.participantsThisMonth,
    0
  );

  const lastMonthRevenue = eventRevenueData.reduce(
    (acc, e) => acc + e.joiningFee * e.participantsLastMonth,
    0
  );

  // Prepare final events array for UI
  const eventsForUI = eventRevenueData.map((e) => ({
    id: e.id,
    title: e.title,
    joiningFee: e.joiningFee,
    attendees: e.attendees,
  }));

    return {
      success: false,
      data: {
        totalRevenue,
        thisMonth: thisMonthRevenue,
        lastMonth: lastMonthRevenue,
        events: eventsForUI,
      },
    }
  }
  catch ( error: any )
  {
    console.error("getRevenueForHost error:", error);

    return {
      success: false,
      message: "Failed to fetch revenue for host",
      data: null,
    };
  }
};


export async function getHostStats() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "HOST") {
      return {
        success: false,
        message: "Unauthorized",
        data: null,
      };
    }

    const hostId = session.user.id;

    if (!hostId || typeof hostId !== "string") {
      throw new Error("Host ID is required and must be a string.");
    }

    const now = new Date();
    const firstDayThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Fetch all events hosted by this host, including participant count and reviews
    const events = await prisma.event.findMany({
      where: { hostId },
      select: {
        joiningFee: true,
        date: true,
        participants: { select: { id: true } },
        reviews: { select: { rating: true } },
      },
    });

    let totalRevenue = 0;
    let totalAttendees = 0;
    let activeEvents = 0;
    let ratingSum = 0;
    let ratedCount = 0;
    let thisMonthRevenue = 0;
    let lastMonthRevenue = 0;

    for (const event of events) {
      const attendees = event.participants.length;
      const revenue = (event.joiningFee ?? 0) * attendees;

      totalRevenue += revenue;
      totalAttendees += attendees;

      if (event.date && event.date <= now) activeEvents++;

      // Compute average rating for this event
      if (event.reviews.length > 0) {
        for (const review of event.reviews) {
          ratingSum += review.rating;
          ratedCount++;
        }
      }

      if (event.date >= firstDayThisMonth) thisMonthRevenue += revenue;
      if (event.date >= firstDayLastMonth && event.date <= lastDayLastMonth)
        lastMonthRevenue += revenue;
    }

    const avgRating = ratedCount > 0 ? +(ratingSum / ratedCount).toFixed(2) : 0;

    return {
      success: true,
      data: {
        totalRevenue,
        totalAttendees,
        activeEvents,
        avgRating,
        thisMonthRevenue,
        lastMonthRevenue,
      },
    };
  } catch (error: any) {
    console.error("get host stats error:", error);
    return {
      success: false,
      message: "Failed to fetch host stats",
      data: null,
    };
  }
}