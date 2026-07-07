import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playpen | School of Excellence",
  description: "Playpen School — nurturing young minds with excellence in education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
