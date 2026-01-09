import { stripe } from "@/lib/config/stripe/stripe.config";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig)
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  const rawBody = await req.text();
  if (!rawBody)
    return NextResponse.json({ error: "Empty body" }, { status: 400 });

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook verification failed:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    console.log("Stripe payment completed:", event.data.object.id);
  }

  return NextResponse.json({ received: true });
}