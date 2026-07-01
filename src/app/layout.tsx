import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://brainpal.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BrainPal — The AI bank young people grow up with",
    template: "%s · BrainPal",
  },
  description:
    "BrainPal is the first AI bank for young people — where money, learning and safety live in one trusted family of AI companions: the PALs.",
  keywords: [
    "BrainPal",
    "AI bank for kids",
    "kids money app",
    "family finance",
    "financial literacy",
    "AI companion",
    "safe social for kids",
  ],
  openGraph: {
    title: "BrainPal — The AI bank young people grow up with",
    description:
      "Money, learning and safety in one trusted family of AI companions. Join 2,400+ Australian families on the early-access list.",
    url: siteUrl,
    siteName: "BrainPal",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainPal — The AI bank young people grow up with",
    description: "Money, learning and safety in one trusted family of AI companions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="h-full antialiased">
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
