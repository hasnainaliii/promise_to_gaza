import type { Metadata } from "next";
import { SiteFooter } from "@/components/site_footer";
import { SiteHeader } from "@/components/site_header";
import { SITE_NAME } from "@/content/site";
import { fontVariables } from "@/theme/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Support & Welfare`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Promise to Gaza is a welfare effort supporting families in Gaza. Learn what we do, follow our updates, and find ways to help.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="flex min-h-dvh flex-col bg-paper">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-olive-deep focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
