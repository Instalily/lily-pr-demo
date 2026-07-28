import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lily PR Demo",
  description: "A demo app for showing Lily open real pull requests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
