import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Verify session before rendering page
export async function createClient() {
  // Get the current request's cookie jar so Supabase can read the session token
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // 1- Supabase reads the session token from the incoming request
        getAll() {
          return cookieStore.getAll();
        },
        // 2-  Supabase writes a refreshed session token back as a cookie
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Middleware handles the actual cookie write in that case.
          }
        },
      },
    }
  );
}
