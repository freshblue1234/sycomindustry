"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="announcement-bar bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm">
            Introducing Sybot 2.0 - Now with enhanced Kinyarwanda language support!
          </div>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
        
        {/* Sycom AI chat widget */}
        <div id="sybot-chat-container" className="fixed bottom-5 right-5 z-50">
          {/* Sybot chat implementation goes here */}
        </div>
      </body>
    </html>
  );
}

import { Providers } from "./providers";