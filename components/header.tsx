"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight">
            <div className="w-8 h-8 bg-foreground rounded"></div>
            <span>Aerorev</span>
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
