import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RISE Center Room Reservations",
  description: "Book a room at the Walter Dods, Jr. RISE Center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
