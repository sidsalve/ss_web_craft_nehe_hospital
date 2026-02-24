import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalakruti Flex And Radium - Flex Printing and Radium Art Services in Rahuri",
  description:
    "Kalakruti Flex provides professional flex designing and printing, banner printing, and signage services in Rahuri.",
  keywords: [
    "flex printing Rahuri",
    "banner printing Rahuri",
    "Kalakruti Flex",
    "Kalakruti Radium",
    "flex printing near me",
  ],
  openGraph: {
    title: "Kalakruti Flex And Radium - Flex Printing and Radium Art Services in Rahuri",
    description:
      "Professional flex printing and radium art services in Rahuri.",
    url: "https://kalakruti-flex.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
