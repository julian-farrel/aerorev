"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
// 1. Import Montserrat
import { Montserrat } from "next/font/google"

// 2. Configure for ExtraBold (weight 800)
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: "800" 
})

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Image 
              src="/aerorev.jpg" 
              alt="Aerorev Logo" 
              width={32} 
              height={32} 
              className="rounded-md object-cover"
            />
            {/* 3. Apply ExtraBold font class */}
            <span className={montserrat.className}>aerorev</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/service" className="text-sm font-medium hover:text-accent transition-colors">
              Service
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors block py-2">
              Home
            </Link>
            <Link href="/service" className="text-sm font-medium hover:text-accent transition-colors block py-2">
              Service
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-accent transition-colors block py-2">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors block py-2">
              About Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}