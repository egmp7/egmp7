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
        className={"antialiased font-jura max-w-7xl mx-auto flex flex-col h-screen"}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        
        <div className="border-b-8 border-b-slate-600"></div>
      </body>
    </html>
  );
}
