import type { Metadata } from "next";
import { manrope } from "./fonts";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Abasto booking site",
  description: "Abasto Site",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${manrope.className} antialiased`}>
        {children}
        <Script
          src="https://abasto.resos.com/embed/booking/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
