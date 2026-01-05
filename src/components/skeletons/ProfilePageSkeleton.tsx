"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 space-y-8 animate-pulse">
        {/* Profile Header */}
        <Card className="bg-card border-border overflow-hidden">
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-t-md" />
          <CardContent className="p-6 -mt-16">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
              <div className="h-32 w-32 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-background shadow-glow" />

              <div className="flex-1 space-y-4">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 w-1/3 rounded" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/2 rounded" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded" />
                  <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
                </div>
              </div>

              <div className="flex gap-2 mt-4 md:mt-0">
                <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="p-6 text-center space-y-2">
                <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto" />
                <div className="h-6 bg-gray-300 dark:bg-gray-600 w-1/2 mx-auto rounded" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/3 mx-auto rounded" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="hosted" className="w-full">
          <TabsList className="bg-muted mb-6">
            {["Hosted Events", "Attended Events", "Reviews"].map((tab, i) => (
              <TabsTrigger key={i} value={tab.toLowerCase().replace(" ", "")}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="hosted">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="bg-card border-border h-60">
                  <div className="h-40 w-full bg-gray-200 dark:bg-gray-700" />
                  <CardContent className="p-4 space-y-2">
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 w-3/4 rounded" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/2 rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="attended">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="bg-card border-border h-60">
                  <div className="h-40 w-full bg-gray-200 dark:bg-gray-700" />
                  <CardContent className="p-4 space-y-2">
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 w-3/4 rounded" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/2 rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-300 dark:bg-gray-600 w-1/3 rounded" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 w-1/2 rounded" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 w-full rounded" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileSkeleton;