import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "./SignOutButton";

// Middleware already blocks unauthenticated users, but we double-check here
// so the page is safe even if accessed directly.
export default async function AdminPage() {
  const supabase = await createClient();
  const
  {data: { user },} = await supabase.auth.getUser();

  // If somehow no session exists, send them back to login
  if (!user) {
    redirect("/Components_Login");
  }
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 gap-6">
      <h1 className="text-white text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-white/50 text-sm">Signed in as {user.email}</p>
      <SignOutButton />
    </main>
  );
}
