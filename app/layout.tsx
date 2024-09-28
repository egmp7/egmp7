import type { Metadata } from "next";
import Navbar from "./components/Navbar"
import "./globals.css";

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
        className={"antialiased font-jura max-w-7xl mx-auto bg-slate-300 dark:bg-slate-900"}
      >
        <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-800">
        <Navbar />
        {children}
        <div className="border-b-8 border-b-slate-600"></div>

        </div>
      </body>
    </html>
  );
}
