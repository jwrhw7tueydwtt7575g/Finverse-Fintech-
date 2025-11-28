import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { AppHeader } from "@/components/layout/app-header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Arealis Magnus · Client Portal",
  description: "Client-side portal for Arealis Magnus data ingestion workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} body-root`}>
        <div className="app-shell">
          <AppHeader />
          <main className="content-area">{children}</main>
        </div>
      </body>
    </html>
  );
}
