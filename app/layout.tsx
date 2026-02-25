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
  title: "Nehe Children’s Hospital and Critical Care Center | Pediatric Hospital in Rahuri",
  description:
    "Nehe Children’s Hospital provides expert pediatric care, ICU, emergency services, and advanced treatment for children in Rahuri, Ahmednagar, Maharashtra.",
  keywords: [
    "children hospital Rahuri",
    "pediatric hospital Rahuri",
    "child specialist",
    "pediatric ICU",
    "neonatal care",
    "emergency care for children",
    "vaccination Rahuri",
  ],
  openGraph: {
    title: "Nehe Children’s Hospital and Critical Care Center | Pediatric Hospital in Rahuri",
    description:
      "Trusted pediatric hospital in Rahuri with 24/7 emergency care, pediatric ICU, and experienced child specialists.",
    url: "https://nehe-hospital.example.com", // Replace with your actual hospital domain
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
