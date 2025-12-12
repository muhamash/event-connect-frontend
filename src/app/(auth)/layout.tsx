
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - Event connect",
  description: "Login or Register to your Event connect account",
};


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  )
}
