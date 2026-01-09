"use client";

import { processPayment } from "@/lib/services/checkout/checkout.service";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      router.replace("/payment/cancel");
      return;
    }

    async function finalizePayment() {
      try {

        const res = await fetch(`/api/stripe-session?sessionId=${sessionId}`);
        const sessionData = await res.json();

        if (!res.ok) throw new Error(sessionData.message);

        const { eventId, userId, amount, txnId } = sessionData;

        await processPayment({
          eventId,
          userId,
          txnId,
          amount,
          provider: "STRIPE",
        });


        router.replace(`/events/${eventId}`);
      } catch (err) {
        console.error(err);
        router.replace("/payment/failed");
      } finally {
        setLoading(false);
      }
    }

    finalizePayment();
  }, [sessionId, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#141414] to-black px-4">
      <div className="max-w-md w-full rounded-2xl border border-yellow-500/20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] shadow-[0_0_60px_rgba(255,180,0,0.15)] p-8 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-300 shadow-[0_0_30px_rgba(255,180,0,0.6)]">
          <CheckCircle className="h-10 w-10 text-black" />
        </div>


        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-200 bg-clip-text text-transparent">
          Payment Successful
        </h1>


        <p className="mt-4 text-sm text-yellow-100/80">
          You have successfully joined the event.  
          We’ve reserved your spot and sent confirmation details.
        </p>


        <div className="my-6 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />


        <Link
          href="/my-events"
          className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-black shadow-lg transition-all hover:scale-[1.02] hover:shadow-yellow-500/40"
        >
          Go to The Event
        </Link>

        <p className="mt-4 text-xs text-yellow-100/50">
          You can view event details anytime from your dashboard
        </p>
      </div>
    </div>
  );
}