import type { Metadata } from "next";
import Navbar from "@/components/Navbar"
import "./globals.scss";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "EGSE7",
  description: "Erick Gonzalez Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"font-jura bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100"}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-col my-auto">
            {children}
          </div>
          <Footer />
        </div>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}

function Footer() {
  return (<div className="border-b-8 border-b-slate-300 dark:border-b-slate-600 bg-slate-200 dark:bg-slate-700"></div>)
}
