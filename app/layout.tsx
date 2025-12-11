import type { Metadata } from "next"
import { Michroma, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// 1. Primary Font: Michroma (Wide, Bold, Futuristic)
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

// 2. Secondary Font: Orbitron (Futuristic, Geometric)
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron", // Renamed variable
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
      <body className={`${michroma.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}