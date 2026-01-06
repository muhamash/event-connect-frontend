"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const EventCardSkeleton = () => {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-4 space-y-4">
        <Skeleton className="h-40 w-full rounded-lg" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-20 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
};

const FilterSkeleton = () => {
  return (
    <Card className="bg-card border-border mt-10">
      <CardContent className="p-6 space-y-4">
        <Skeleton className="h-10 w-full md:w-2/3" />
        <div className="hidden lg:flex gap-3">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-40" />
        </div>
      </CardContent>
    </Card>
  );
};

const PaginationSkeleton = () => {
  return (
    <div className="flex justify-center gap-2 mt-20">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-10 rounded-md" />
      ))}
    </div>
  );
};

const MyEventsSkeleton = () => {
  return (
    <div className="min-h-screen bg-background py-10">
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 space-y-4"
          >
            <Skeleton className="h-12 w-2/3" />
            <Skeleton className="h-6 w-1/2" />
          </motion.div>

          {/* Filters */}
          <FilterSkeleton />

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {Array.from({ length: 6 }).map((_, i) => (
              <EventCardSkeleton key={i} />
            ))}
          </div>

          {/* Pagination */}
          <PaginationSkeleton />
        </div>
      </div>
    </div>
  );
};

export default MyEventsSkeleton;