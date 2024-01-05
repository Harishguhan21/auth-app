"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session, "data from user");
  if (!session) {
    router.push("/Login");
  }
  return (
    <main className="h-screen">
      <h1>Dashboard Screen</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </main>
  );
}
