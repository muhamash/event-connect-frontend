import Profile from "@/components/modules/profile/ProfileContainer";
import ProfileSkeleton from "@/components/skeletons/ProfilePageSkeleton";
import { authOptions } from "@/lib/services/auth/auth.option";
import { getUserInfoById } from "@/lib/services/user/user.service";
import { RouteSearchParams } from "@/types/pages.type";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

interface ProfilePageProps {
  searchParams: RouteSearchParams;
}

export default async function ProfilePage({
  searchParams,
}: ProfilePageProps )
{
  let userId = ( await searchParams )?.userId;
  if ( Array.isArray( userId ) ) userId = userId[ 0 ];

  const session = await getServerSession(authOptions);
  const sessionUser = session?.user?.id;

  if (!userId) userId = sessionUser;

  if (!userId) {
    return <div>User not found or not logged in</div>;
  }


  const userPromise = getUserInfoById(userId);

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <Profile sessionUser={sessionUser} userPromise={userPromise} />
    </Suspense>
  );
}