import Index from "@/components/modules/Index";
import prisma from "@/lib/db/prisma.db";

export default async function Home ()
{
  const users = await prisma.user.findMany();
  console.log(  users );

  return (
    <Index/>
  );
}
