"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Header } from "@/components/header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SlidersHorizontal, X, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"


const PRODUCTS = [
  {
    id: 1,
    name: "AeroRev T-Shirt Michael Dunlop IOM White",
    price: "Rp 75.000",
    category: "MotoGP",
    image: "https://down-id.img.susercontent.com/file/id-11134207-8224q-mgdcbax9t91rdf.webp",
    link: "https://shopee.co.id/AeroRev-T-Shirt-Michael-Dunlop-IOM-White-%E2%80%93-Kaos-Motor-Unisex-S1000RR-Soft-24s-i.298428492.42872233943?extraParams=%7B%22display_model_id%22%3A276808705042%7D"
  },
  {
    id: 2,
    name: "AeroRev T-Shirt Ian Hutchingson IOM Black",
    price: "Rp 90.000",
    category: "MotoGP",
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
  //   category: "Accessories",
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
  const [activeCategory, setActiveCategory] = useState("All Products")

  const filteredProducts = activeCategory === "All Products"
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory)

  const categories = ["All Products", "MotoGP", "F1 Series"]

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen text-foreground">

        {/* Shop Header */}
        <section className="relative bg-zinc-950 border-b border-border py-24 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1753563819450-ad2b89f02ccd?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shop Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
            <ScrollAnimation animation="slideDown">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-2xl">
                Choose your Apparel
              </h1>
            </ScrollAnimation>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg drop-shadow-md font-medium">
              Official Aerorev merchandise and apparel.
            </p>
          </div>
        </section>

        {/* Filters & Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Filters */}
            <aside className="hidden lg:block w-64 space-y-8 h-fit sticky top-24">
              <div className="space-y-4">
                <h3 className="font-bold uppercase text-sm tracking-wider border-b pb-2">Collections</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {categories.map((category) => (
                    <li
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`cursor-pointer transition-colors ${activeCategory === category
                        ? "text-primary font-bold"
                        : "hover:text-foreground"
                        }`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex justify-between items-center border-b border-border pb-4">
              <span className="font-bold">{filteredProducts.length} Products</span>
              <button className="flex items-center gap-2 text-sm font-bold uppercase border border-border px-4 py-2 rounded">
                <SlidersHorizontal size={16} /> Filters
              </button>
            </div>

            {/* Product Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filteredProducts.map((product) => (
                <Dialog key={product.id}>
                  <DialogTrigger asChild>
                    <div className="h-full">
                      <ProductCard product={product} />
                    </div>
                  </DialogTrigger>
                  <DialogContent showCloseButton={false} className="max-w-[95vw] w-[95vw] h-[90vh] md:max-w-[85vw] md:h-[85vh] p-0 overflow-hidden bg-card border-white/10">
                    <DialogClose className="absolute right-6 top-6 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                      <X size={24} />
                    </DialogClose>
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      <div className="relative w-full h-1/2 md:h-full bg-white/5 p-8 flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain max-h-[70vh]" />
                      </div>
                      <div className="relative p-8 md:p-12 space-y-8 flex flex-col justify-center h-full overflow-y-auto">
                        <DialogHeader>
                          <span className="text-primary font-bold text-sm uppercase tracking-wider text-left">{product.category}</span>
                          <DialogTitle className="text-4xl md:text-5xl font-black text-white mt-2 leading-tight text-left">{product.name}</DialogTitle>
                          <DialogDescription className="text-2xl text-muted-foreground font-mono mt-4 text-left">{product.price}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-8">
                          <p className="text-gray-400 text-lg leading-relaxed">
                            Official Aerorev merchandise. Crafted for performance and style. <br />
                            High-quality materials designed for racing enthusiasts who demand the best.
                            Limited stock available.
                          </p>
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-6 bg-primary text-black font-black uppercase tracking-widest text-xl text-center hover:bg-white transition-colors rounded-lg flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] transform duration-200"
                          >
                            Buy Now <ExternalLink size={24} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full text-center py-20 text-muted-foreground">
                  No products found in this category.
                </div>
              )}
            </div>

          </div>
        </div>

      </main>
    </>
  )
}
