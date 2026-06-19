import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { QueryProvider } from "@/components/query-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realtyfocus.com"),
  title: {
    default: "RealtyFocus | Luxury Real Estate Platform",
    template: "%s | RealtyFocus",
  },
  description:
    "Discover premium homes, villas, apartments, and investment opportunities with RealtyFocus.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RealtyFocus | Luxury Real Estate Platform",
    description:
      "Discover premium homes, villas, apartments, and investment opportunities with RealtyFocus.",
    type: "website",
    url: "https://realtyfocus.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f7f3ec] text-slate-900">
        <QueryProvider>
          <div className="relative overflow-x-hidden">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
