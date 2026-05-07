import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const seasonSans = localFont({
  src: "../fonts/SeasonSans-Regular.otf",
  variable: "--font-season-sans",
  display: "swap",
});

const seasonMix = localFont({
  src: "../fonts/SeasonMix-Regular.ttf",
  variable: "--font-season-mix",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prompt Optimizer | Linkup",
  description: "Optimize your prompts for Linkup's agentic search API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0S2R7CQX6V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0S2R7CQX6V');
          `}
        </Script>
      </head>
      <body className={`${seasonSans.variable} ${seasonMix.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
