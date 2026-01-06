import CreateEvent from "@/components/modules/dashboard/CreateEventContainer";
import { authOptions } from "@/lib/services/auth/auth.option";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Create event | EventConnect',
  description: 'Create a event ...',
}

export default async function CreateEventPage ()
{
  const session = await getServerSession( authOptions );
  if ( !session )
  {
    redirect("/login")
  }

  return (
    <CreateEvent hostId={ session?.user?.id } />
  )
}