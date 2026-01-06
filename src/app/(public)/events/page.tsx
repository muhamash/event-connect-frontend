import Events from "@/components/modules/events/EventsContainer";
import MyEventsSkeleton from "@/components/skeletons/EventsSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Explore events | EventConnect',
  description: 'Explore, participate and enjoy!!',
}

export default async function EventsPage() {
  return (
    <Suspense fallback={<MyEventsSkeleton/>}>
      <Events/>
    </Suspense>
  )
}