"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "./lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  async function handleClick() {
    setSigningOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <button type="button" onClick={handleClick} disabled={signingOut}>
      {signingOut ? "Logging out…" : "Log out"}
    </button>
  );
}
