import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krystal — Program Manager at PACE",
  description: "Krystal, program manager at PACE.",
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
