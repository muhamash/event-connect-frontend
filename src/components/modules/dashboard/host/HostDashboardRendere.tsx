"use client"

import OngoingTabSkeleton from "@/components/skeletons/OngoingTabSkeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import HostStats from "./HostStats";
import OngoingTab from "./OngoingTab";
import Participants from "./Participants";
import Revenue from "./Revenue";

interface HostDashboardProps {
  hostedEvents: any[];
  stats: {
    totalRevenue: number;
    totalAttendees: number;
    activeEvents: number;
    avgRating: number;
  };
  mockUsers: any[];
  eventsPromise: Promise<any>;
  getParticipantPromise: Promise<any>;
  getRevenueForHostPromise: Promise<any>;
  getHostStatsPromise: Promise<any>;
}

const HostDashboardRendere = ({ hostedEvents, stats, mockUsers, eventsPromise, getParticipantPromise, getRevenueForHostPromise, getHostStatsPromise }: HostDashboardProps) => {

  const [ activeTab, setActiveTab ] = useState( "events" );
  const router = useRouter();

  useEffect( () =>
  {
    const params = new URLSearchParams( window.location.search );
    params.set( "page", "1" );
    router.replace( `?${ params.toString() }` );
  }, [ activeTab, router ] );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Stats Grid */}
      <Suspense fallback={
        <p>loading...</p>
      }>
        <HostStats getHostStatsPromise={ getHostStatsPromise }/>
      </Suspense>

      <Tabs value={activeTab}
        onValueChange={(value) => setActiveTab(value)} defaultValue="events" className="w-full">
        <TabsList className="bg-muted mb-6">
          <TabsTrigger value="events">On going</TabsTrigger>
          <TabsTrigger value="participants">Participants</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <Suspense fallback={
          <OngoingTabSkeleton/>
        }>
          {activeTab === "events" && <OngoingTab eventsPromise={eventsPromise} />}
        </Suspense>

        <Suspense fallback={<OngoingTabSkeleton/>}>
            {activeTab === "participants" && <Participants getParticipantPromise={getParticipantPromise} />}
        </Suspense>

        <Suspense>
          {activeTab === "revenue" && <Revenue getRevenueForHostPromise={getRevenueForHostPromise} />}
        </Suspense>
      </Tabs>
    </>
  );
};

export default HostDashboardRendere;