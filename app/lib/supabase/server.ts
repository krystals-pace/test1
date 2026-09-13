import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookieOptions: {
        maxAge: ONE_YEAR_IN_SECONDS,
      },
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Called from a Server Component render, where cookies can't be
            // set. Safe to ignore here because the browser client already
            // set the session cookie on sign-in/sign-up.
          }
        },
      },
    },
  );
}
