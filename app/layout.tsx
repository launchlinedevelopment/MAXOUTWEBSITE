import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxoutshop.com"),
  title: { default: "MAXOUT — BLACKOUT", template: "%s | MAXOUT" },
  description: "MAXOUT is independent streetwear built around going all in. Shop the BLACKOUT drop.",
  openGraph: { title: "MAXOUT — BLACKOUT", description: "The BLACKOUT drop. Limited release by MAXOUT.", url: "https://maxoutshop.com", siteName: "MAXOUT", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}