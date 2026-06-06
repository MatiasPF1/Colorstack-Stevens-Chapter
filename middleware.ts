import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // This gets replaced below if Supabase needs to write updated session cookies.
  let supabaseResponse = NextResponse.next({ request });

  // Create a Supabase client wired to the edge request/response cookies.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Read the session token from the incoming request cookies
        getAll() {
          return request.cookies.getAll();
        },
        // Write any refreshed session tokens to both the request and the response
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Validate the session JWT with Supabase's servers on every request.
  // getUser()  it verifies the token
  // server-side rather than just trusting the local cookie.
  const {
    data: { user },
  } = await supabase.auth.getUser();


//1- Checking if the user is not logged in and is trying to access the protected admin area, if so we redirect them to the login page.

  // If the user is not logged in and is trying to reach /components_Admin,
  //    --> redirect them to /Components_Login instead of letting the request through.
  if (!user && request.nextUrl.pathname.startsWith("/components_Admin")) {
    const url = request.nextUrl.clone();
    url.pathname = "/Components_Login";
    return NextResponse.redirect(url);
  }
  // Return the response
  return supabaseResponse;
}

// Only run middleware on /components_Admin routes
export const config = {
  matcher: ["/components_Admin/:path*"],
};
