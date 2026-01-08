"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CheckoutSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Skeleton className="h-10 w-24 mb-6" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT: Payment Form */}
            <div>
              {/* Title */}
              <Skeleton className="h-10 w-2/3 mb-6" />

              {/* Payment Card */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />

                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </CardContent>
              </Card>

              {/* Secure text */}
              <Skeleton className="h-4 w-3/4 mt-4" />

              {/* Pay Button */}
              <Button disabled className="w-full h-12 mt-6">
                <Skeleton className="h-5 w-40" />
              </Button>
            </div>

            {/* RIGHT: Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <Skeleton className="h-6 w-40" />
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Event preview */}
                  <div className="flex gap-4">
                    <Skeleton className="h-24 w-32 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>

                  {/* Price rows */}
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />

                  {/* Total */}
                  <Skeleton className="h-6 w-1/2" />

                  {/* Spots remaining */}
                  <Skeleton className="h-12 w-full rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSkeleton;
