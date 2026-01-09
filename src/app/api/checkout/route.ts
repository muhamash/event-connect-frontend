import prisma from "@/lib/config/db/prisma.db";
import { stripe } from "@/lib/config/stripe/stripe.config";
import { authOptions } from "@/lib/services/auth/auth.option";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const sessionAuth = await getServerSession(authOptions);
  if (!sessionAuth?.user?.id)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { sessionId } = await req.json();
  if (!sessionId)
    return NextResponse.json({ message: "Session ID required" }, { status: 400 });

  // Fetch Stripe session
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

  if (checkoutSession.payment_status !== "paid")
    return NextResponse.json({ message: "Payment not completed" }, { status: 400 });

  const metadata = checkoutSession.metadata || {};
  const eventId = metadata.eventId;
  const userId = metadata.userId;

  if (!eventId || !userId)
    return NextResponse.json({ message: "Invalid metadata" }, { status: 400 });


  if (userId !== sessionAuth.user.id)
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });

  const existingPayment = await prisma.payment.findUnique({
    where: { txnId: checkoutSession.id },
  });

  if (existingPayment) {
    return NextResponse.json({ message: "Already processed" });
  }

  await prisma.$transaction(async (tx) => {
    await tx.payment.create({
      data: {
        eventId,
        userId,
        amount: checkoutSession.amount_total ?? 0,
        provider: "STRIPE",
        status: "SUCCESS",
        txnId: checkoutSession.id,
      },
    });

    await tx.participant.create({
      data: { eventId, userId },
    });

    await tx.user.update({
      where: { id: userId },
      data: { eventsAttended: { increment: 1 } },
    });
  });

  return NextResponse.json({ success: true });
}