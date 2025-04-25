import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BrandPulse AI",
  description: "AI-powered competitor analysis for your business",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
        </head>
        <body className={inter.className}>
          {children}
          <Toaster />
          <Script src="/sw-register.js" strategy="afterInteractive" />
        </body>
      </html>
    </ClerkProvider>
  );
}
