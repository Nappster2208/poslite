import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter, nuntio } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Poslite Dashboard",
    default: "Poslite Dashboard",
  },
  description: "Point of Sales application for your need.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
