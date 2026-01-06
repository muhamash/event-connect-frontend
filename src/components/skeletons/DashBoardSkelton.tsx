"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 space-y-8 animate-pulse">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="h-8 w-64 bg-muted rounded-md"></div>
            <div className="h-4 w-48 bg-muted rounded-md"></div>
          </div>
          <div className="h-10 w-40 bg-muted rounded-md md:ml-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Card key={idx} className="bg-card border-border h-28">
              <CardContent className="p-6 space-y-2">
                <div className="h-4 w-12 bg-muted rounded-md"></div>
                <div className="h-6 w-20 bg-muted rounded-md"></div>
                <div className="h-3 w-16 bg-muted rounded-md"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Skeleton */}
        <Tabs defaultValue="events" className="w-full space-y-4">
          <TabsList className="bg-muted mb-6">
            <TabsTrigger value="events" className="h-10 w-32 bg-muted rounded-md"></TabsTrigger>
            <TabsTrigger value="participants" className="h-10 w-32 bg-muted rounded-md"></TabsTrigger>
            <TabsTrigger value="revenue" className="h-10 w-32 bg-muted rounded-md"></TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Card key={idx} className="bg-card border-border h-24">
                <CardContent className="flex gap-4 items-center">
                  <div className="h-16 w-24 bg-muted rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 bg-muted rounded-md"></div>
                    <div className="h-3 w-1/2 bg-muted rounded-md"></div>
                  </div>
                  <div className="h-6 w-12 bg-muted rounded-md"></div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="participants" className="space-y-4">
            <Card className="bg-card border-border h-60">
              <CardContent className="space-y-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-muted"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-3 w-1/3 bg-muted rounded-md"></div>
                      <div className="h-2 w-1/2 bg-muted rounded-md"></div>
                    </div>
                    <div className="h-3 w-12 bg-muted rounded-md"></div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-4">
            <Card className="bg-card border-border h-60">
              <CardContent className="space-y-2">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="h-10 w-full bg-muted rounded-md"></div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardSkeleton;