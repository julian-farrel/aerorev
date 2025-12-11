import type { Metadata } from "next"
import localFont from "next/font/local"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// 1. Load the local font file you just added
const bbhBartle = localFont({
  src: "./fonts/BBHSansBartle-Regular.ttf", // ⚠️ Make sure this filename matches exactly!
  variable: "--font-heading",
  weight: "700",
  display: "swap",
})

// 2. Secondary font (Geist)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aerorev",
  description: "Wear Your Passion, Ride With Style!",
  icons: {
    icon: "aerorev.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the variables to the body */}
      <body className={`${bbhBartle.variable} ${geistSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}