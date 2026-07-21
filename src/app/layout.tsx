import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { MotionConfig } from "framer-motion";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Required for CSP nonces: Next can only stamp nonces onto scripts during SSR.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.himiley.com"),
  title: "Miley | Explore Hormone-Free Contraception – Act Now",
  description:
    "Discover FDA-approved, hormone-free birth control options with discreet home delivery. Easy online consultation and fast prescription service tailored for women's health.",
  openGraph: {
    title: "Miley | Explore Hormone-Free Contraception – Act Now",
    description:
      "Discover FDA-approved, hormone-free birth control options with discreet home delivery. Easy online consultation and fast prescription service tailored for women's health.",
    url: "https://www.himiley.com",
    images: ["/images/og-image.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Opt into request-time rendering so middleware CSP nonce is applied to
  // Next.js inline hydration scripts (static HTML cannot carry a per-request nonce).
  await headers();

  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <MotionConfig reducedMotion="user">
          <Header />
          <main>{children}</main>
        </MotionConfig>
      </body>
    </html>
  );
}
