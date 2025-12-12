"use client"

import { ProductCard } from "@/components/product-card"
import { Header } from "@/components/header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SlidersHorizontal } from "lucide-react"

// Mock Data
const PRODUCTS = [
  {
    id: 1,
    name: "AeroRev T-Shirt Michael Dunlop IOM White",
    price: "Rp 75.000",
    category: "Moto GP",
    image: "https://down-id.img.susercontent.com/file/id-11134207-8224q-mgdcbax9t91rdf.webp",
    link: "https://shopee.co.id/AeroRev-T-Shirt-Michael-Dunlop-IOM-White-%E2%80%93-Kaos-Motor-Unisex-S1000RR-Soft-24s-i.298428492.42872233943?extraParams=%7B%22display_model_id%22%3A276808705042%7D"
  },
  {
    id: 2,
    name: "AeroRev T-Shirt Ian Hutchingson IOM Black",
    price: "Rp 90.000",
    category: "Moto GP",
    image: "https://down-id.img.susercontent.com/file/id-11134207-82250-mgdcj4jfn2mh57.webp",
    link: "https://shopee.co.id/AeroRev-T-Shirt-Ian-Hutchingson-IOM-White-%E2%80%93-Kaos-Motor-Unisex-S1000RR-Soft-24s-i.298428492.29592406112?extraParams=%7B%22display_model_id%22%3A291808803216%7D"
  },
  {
    id: 3,
    name: "AeroRev T-Shirt Peter Hickman IOM White",
    price: "Rp 75.000",
    category: "MotoGP",
    image: "https://down-id.img.susercontent.com/file/id-11134207-8224r-mgdcodkf5kwb23.webp",
    link: "https://shopee.co.id/AeroRev-T-Shirt-Peter-Hickman-IOM-White-%E2%80%93-Kaos-Motor-Unisex-S1000RR-Soft-24s-i.298428492.41122238692?extraParams=%7B%22display_model_id%22%3A119574202839%7D"
  },
  {
    id: 4,
    name: "AeroRev T-Shirt Michael Dunlop IOM Black",
    price: "Rp 75.000",
    category: "MotoGP",
    image: "https://down-id.img.susercontent.com/file/id-11134207-8224v-mgdclm2v0vt737.webp",
    link: "https://shopee.co.id/AeroRev-T-Shirt-Michael-Dunlop-IOM-White-%E2%80%93-Kaos-Motor-Unisex-S1000RR-Soft-24s-i.298428492.42822246493?extraParams=%7B%22display_model_id%22%3A218733741043%7D"
  },
  // {
  //   id: 5,
  //   name: "VR46 Doctor Legacy Cap",
  //   price: "Rp 350.000",
  //   category: "Accesories",
  //   image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89d?q=80&w=2080&auto=format&fit=crop",
  //   link: "https://tokopedia.com"
  // },
  // {
  //   id: 6,
  //   name: "McLaren Gulf Special Edition Polo",
  //   price: "Rp 950.000",
  //   category: "F1 Series",
  //   image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2015&auto=format&fit=crop",
  //   link: "https://shopee.co.id"
  // },
  // {
  //   id: 7,
  //   name: "Ducati Lenovo Team Track Pants",
  //   price: "Rp 750.000",
  //   category: "MotoGP",
  //   image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
  //   link: "https://shopee.co.id"
  // },
  // {
  //   id: 8,
  //   name: "AlphaTauri Minimalist Tee",
  //   price: "Rp 550.000",
  //   category: "F1 Series",
  //   image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
  //   link: "https://tokopedia.com"
  // },
]

export default function Shop() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen text-foreground">

        {/* Shop Header */}
        <section className="bg-zinc-100 dark:bg-zinc-900 border-b border-border py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
            <ScrollAnimation animation="slideDown">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-primary">
                Race Ready Gear
              </h1>
            </ScrollAnimation>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Official Aerorev merchandise and curated racing apparel.
            </p>
          </div>
        </section>

        {/* Filters & Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Filters (Hidden on mobile for simplicity in V1, normally use Vaul drawer) */}
            <aside className="hidden lg:block w-64 space-y-8 h-fit sticky top-24">
              <div className="space-y-4">
                <h3 className="font-bold uppercase text-sm tracking-wider border-b pb-2">Collections</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="text-primary font-bold cursor-pointer">All Products</li>
                  <li className="hover:text-foreground cursor-pointer transition-colors">F1 Series</li>
                  <li className="hover:text-foreground cursor-pointer transition-colors">MotoGP</li>
                  <li className="hover:text-foreground cursor-pointer transition-colors">Streetwear</li>
                  <li className="hover:text-foreground cursor-pointer transition-colors">Accessories</li>
                </ul>
              </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex justify-between items-center border-b border-border pb-4">
              <span className="font-bold">{PRODUCTS.length} Products</span>
              <button className="flex items-center gap-2 text-sm font-bold uppercase border border-border px-4 py-2 rounded">
                <SlidersHorizontal size={16} /> Filters
              </button>
            </div>

            {/* Product Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {PRODUCTS.map((product, idx) => (
                <ScrollAnimation key={product.id} animation="fadeIn" delay={idx * 50}>
                  <ProductCard product={product} />
                </ScrollAnimation>
              ))}
            </div>

          </div>
        </div>

      </main>
    </>
  )
}
