import { createBrowserClient } from "@supabase/ssr";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookieOptions: {
        maxAge: ONE_YEAR_IN_SECONDS,
      },
    },
  );
}
