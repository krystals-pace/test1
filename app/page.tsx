import { createClient } from "./lib/supabase/server";
import { AuthForm } from "./auth-form";
import { LogoutButton } from "./logout-button";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <header className="hero">
        <h1>RISE Center Room Reservations</h1>
        <p className="tagline">Book one of the Center&apos;s 5 rooms</p>
      </header>

      <main>
        {user ? (
          <section aria-labelledby="account-heading">
            <h2 id="account-heading">Your account</h2>
            <p>Signed in as {user.email}</p>
            <LogoutButton />
          </section>
        ) : (
          <section aria-labelledby="auth-heading">
            <h2 id="auth-heading">Log in or sign up</h2>
            <AuthForm />
          </section>
        )}
      </main>
    </>
  );
}
