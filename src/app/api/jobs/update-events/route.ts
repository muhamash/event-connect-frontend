import prisma from "@/lib/config/db/prisma.db";
import { EventStatus } from "@/lib/constants/enum.constant";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Check authorization
    if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();

    // Find events that are still OPEN or FULL
    const events = await prisma.event.findMany({
      where: { status: { in: [EventStatus.OPEN, EventStatus.FULL] } },
    });

    let updatedCount = 0;

    for (const event of events) {
      // Combine event date and time into a Date object
      const eventDateTime = new Date(event.date);
      const [hours, minutes] = event.time.split(":").map(Number);
      eventDateTime.setHours(hours, minutes, 0, 0);

      if (eventDateTime <= now) {
        await prisma.event.update({
          where: { id: event.id },
          data: { status: EventStatus.COMPLETED },
        });
        updatedCount++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Event status update completed. ${updatedCount} events marked as COMPLETED.`,
    });
  } catch (error: any) {
    console.error("Error updating event status:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update events" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}