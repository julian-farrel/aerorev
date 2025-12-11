import type React from "react"
import type { Metadata } from "next"
import { Bodoni_Moda as BOLD_HORIZON } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const boldHorizon = BOLD_HORIZON({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aerorev",
  description: "Wear Your Passion, Ride With Style!",
  generator: "v0.app",
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
      <body className={`${boldHorizon.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
