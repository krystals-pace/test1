"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "./lib/supabase/client";

type Mode = "login" | "signup";

export function AuthForm() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const supabase = createClient();
    const { error: authError } =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    setSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    router.refresh();
  }

  return (
    <div className="auth-form">
      <div className="auth-tabs">
        <button
          type="button"
          className={mode === "login" ? "auth-tab active" : "auth-tab"}
          onClick={() => {
            setMode("login");
            setError(null);
          }}
        >
          Log in
        </button>
        <button
          type="button"
          className={mode === "signup" ? "auth-tab active" : "auth-tab"}
          onClick={() => {
            setMode("signup");
            setError(null);
          }}
        >
          Sign up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          autoComplete={
            mode === "login" ? "current-password" : "new-password"
          }
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error && (
          <p className="auth-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={submitting}>
          {submitting
            ? "Please wait…"
            : mode === "login"
              ? "Log in"
              : "Sign up"}
        </button>
      </form>
    </div>
  );
}
