"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/20 group-hover:border-primary transition-colors">
              <Image
                src="/aerorev.jpg"
                alt="Aerorev Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter uppercase font-heading group-hover:text-primary transition-colors">
              AERO<span className="italic text-primary">REV</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              Shop
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white hover:text-primary transition-colors" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-white/10 pt-4 bg-black">
            <Link href="/" className="text-base font-bold uppercase text-gray-300 hover:text-white block py-3 px-4 hover:bg-white/5 rounded-md">
              Home
            </Link>
            <Link href="/shop" className="text-base font-bold uppercase text-gray-300 hover:text-white block py-3 px-4 hover:bg-white/5 rounded-md">
              Shop
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}