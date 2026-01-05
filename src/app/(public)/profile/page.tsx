import Profile from "@/components/modules/profile/ProfileContainer";
import ProfileSkeleton from "@/components/skeletons/ProfilePageSkeleton";
import { authOptions } from "@/lib/services/auth/auth.option";
import { getUserInfoById } from "@/lib/services/user/user.service";
import { RouteSearchParams } from "@/types/pages.type";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

interface ProfilePageProps {
  searchParams: RouteSearchParams;
}


export async function generateMetadata({
  searchParams,
}: ProfilePageProps): Promise<Metadata> {
  let userId = searchParams.userId;
  if (Array.isArray(userId)) userId = userId[0];

  if (!userId) {
    const session = await getServerSession(authOptions);
    userId = session?.user?.id;
  }

  if (!userId) return { title: "Profile" };

  const user = (await getUserInfoById(userId))?.data;

  return {
    title: `${user.fullname} | MyApp`,
    description: `View the profile of ${user.fullname} on MyApp.`,
    openGraph: {
      title: `${user.fullname} | MyApp`,
      description: `View the profile of ${user.fullname} on MyApp.`,
      images: user.image
        ? [
            {
              url: user.image,
              width: 800,
              height: 800,
              alt: `${user.fullname}'s profile picture`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${user.fullname} | MyApp`,
      description: `View the profile of ${user.fullname} on MyApp.`,
      images: user.image ? [user.image] : [],
    },
  };
}


export default async function ProfilePage({
  searchParams,
}: ProfilePageProps) {
  const params = await searchParams; 
  let userId = params.userId;
  if (Array.isArray(userId)) userId = userId[0];

  if (!userId) {
    const session = await getServerSession(authOptions);
    userId = session?.user?.id;
  }

  const userPromise = getUserInfoById(userId!);

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <Profile userPromise={userPromise} />
    </Suspense>
  );
}