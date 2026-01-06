import Dashboard from "@/components/modules/dashboard/DashboardContainer";
import { authOptions } from "@/lib/services/auth/auth.option";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: 'Dashboard | EventConnect',
  description: 'Enjoy  dashboard ...',
}

export default async function DashboardPage ()
{
  const sessionUser = await getServerSession( authOptions );
  // console.log(sessionUser?.user)
  return (
    <Dashboard fullname={sessionUser?.user?.fullname} role={sessionUser?.user?.role} userId={ sessionUser?.user?.id } />
  )
}
