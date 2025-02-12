import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import Footer from "@/components/shared/footer";
import Header, { LocalNav } from "@/components/shared/header";

const mainFont = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEEE NSBM",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} antialiased flex flex-col min-h-screen font-poppins w-full h-full relative`}
      >
        <Header />
        <LocalNav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
