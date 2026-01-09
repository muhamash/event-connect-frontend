import { stripe } from "@/lib/config/stripe/stripe.config";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("sessionId");

  if (!sessionId)
    return NextResponse.json({ message: "Session ID missing" }, { status: 400 });

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (!session.payment_status || session.payment_status !== "paid") {
    return NextResponse.json({ message: "Payment not completed" }, { status: 400 });
  }

  return NextResponse.json({
    eventId: session.metadata?.eventId,
    userId: session.metadata?.userId,
    amount: session.amount_total ?? 0,
    txnId: session.id,
  });
}
