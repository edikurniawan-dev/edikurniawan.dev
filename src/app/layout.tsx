import "./globals.css";

import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { IconPlus } from "@irsyadadl/paranoid";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Edi Kurniawan",
    default: "Edi Kurniawan",
  },
  description:
    "I'm Edi Kurniawan a Web Developer with work experience in web application development. I have skills in developing web applications using several technologies like ReactJS with NextJS as react framework in frontend and Laravel or NodeJS in backend.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans3.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto flex min-h-dvh max-w-6xl flex-col text-base">
            <Header />
            <div className="relative mx-5 block h-5 border-x border-dashed md:mx-14 md:hidden md:px-10">
              <IconPlus className="absolute -left-[11px] top-2.5 size-5" />
              <IconPlus className="absolute -right-[11px] top-2.5 size-5" />
            </div>
            <div className="flex h-full grow flex-col overflow-hidden border-t border-dashed pb-[62px] md:border-none md:pb-0">
              <div className="mx-5 h-full grow border-x border-dashed px-5 py-5 md:mx-14 md:px-10">{children}</div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
