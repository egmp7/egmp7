import type { Metadata } from "next";
import Navbar from "@/components/Navbar"
import "./globals.scss";

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
        className={"font-jura"}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-col my-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  return (<div className="border-b-8 border-b-slate-600"></div>)
}
