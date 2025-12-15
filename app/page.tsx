"use client"

import { Header } from "@/components/header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, Printer, Palette, ShieldCheck, Car } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-screen selection:bg-blue-600 selection:text-white">

        {/* Full Screen Hero Section */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
            <img
              src="https://images.unsplash.com/photo-1683455426019-0eb3f4236368?q=80&w=1170&auto=format&fit=crop"
              alt="Racing Background"
              className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
            />
          </div>

          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-8">
            <ScrollAnimation animation="slideDown">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white drop-shadow-2xl">
                AERO<span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent italic pr-4">REV</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={200}>
              <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto">
                WEAR YOUR PASSION. RIDE WITH STYLE. <br />
                <span className="text-white font-bold">PREMIUM CUSTOM CLOTHING & APPAREL</span>
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Link href="#services" className="group relative px-8 py-4 bg-primary text-black font-bold text-lg uppercase tracking-wider overflow-hidden hover:bg-gray-200 transition-all clip-path-slant">
                  <span className="relative z-10 flex items-center gap-2">
                    Our Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/shop" className="group px-8 py-4 border-2 border-white/20 hover:border-primary text-white font-bold text-lg uppercase tracking-wider hover:bg-white/5 transition-all clip-path-slant">
                  Shop Apparel
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-10 z-20 hidden md:block">
            <div className="flex gap-4">
              <div className="h-1 w-12 bg-primary"></div>
              <div className="h-1 w-4 bg-white/50"></div>
              <div className="h-1 w-2 bg-white/30"></div>
            </div>
            <p className="text-xs text-white/40 mt-2 font-mono">EST. 2025 // JAKARTA, ID</p>
          </div>
        </section>

        {/* Brand Running Text (Marquee) */}
        <div className="bg-white/5 border-y border-white/10 py-4 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap text-white/40 font-black text-4xl uppercase items-center">
            <span>MOTOGP</span> • <span>APPAREL</span> • <span>CUSTOM</span> • <span>CLOTHING</span> • <span>RIDING</span> •
            <span>MOTOGP</span> • <span>APPAREL</span> • <span>CUSTOM</span> • <span>CLOTHING</span> • <span>RIDING</span> •
            <span>MOTOGP</span> • <span>APPAREL</span> • <span>CUSTOM</span> • <span>CLOTHING</span> • <span>RIDING</span>
          </div>
        </div>

        {/* Our Partners Section */}
        <section className="py-20 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-[0.2rem] mb-12">Our Clients</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
              {/* Placeholders for Partners - Using Text for V1 to ensure visual consistency without external assets */}
              <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors cursor-default">JAPS RIDER</span>
              <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors cursor-default">CUAN HELMET</span>
              <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors cursor-default">JAPS RACING</span>
              {/* <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors cursor-default">DUCATI CORSE</span>
              <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors cursor-default">KTM FACTORY</span>
              <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors cursor-default">APRILIA</span> */}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollAnimation animation="slideUp">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-primary text-lg font-bold tracking-widest uppercase mb-2">What We Do</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase">High Performance <br /> Printing Solutions.</h3>
              </div>
              <p className="text-gray-400 max-w-md text-right md:text-left">
                "Kami memadukan teknologi cetak terdepan dengan keahlian artisan untuk menghadirkan pakaian custom yang tangguh dan detail."
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Printer className="w-10 h-10" />}
              title="Clothing Brand"
              desc="Sablon Plastisol dan Rubber kualitas premium dengan warna tajam yang dirancang tahan lama. Solusi terbaik untuk meningkatkan nilai jual brand fashion Anda, awet dipakai berkali-kali tanpa pecah."
              delay={0}
            />
            <ServiceCard
              icon={<Palette className="w-10 h-10" />}
              title="Baju Panitia atau Acara"
              desc="Eksplorasi warna tanpa batas dan pola rumit yang menyatu langsung dengan kain berkualitas. Material yang nyaman menjaga tim Anda tetap sejuk dan nyaman saat bekerja seharian di lapangan."
              delay={100}
            />
            <ServiceCard
              icon={<ShieldCheck className="w-10 h-10" />}
              title="Baju Komunitas"
              desc="Material pilihan dengan durabilitas tinggi. Pilihan tepat untuk seragam komunitas yang mengutamakan kenyamanan, kekompakan, dan ketahanan."
              delay={200}
            />
          </div>
        </section>

        {/* About / Context Section */}
        <section className="relative py-32 bg-zinc-950 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideRight">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-3xl opacity-50" />
                <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2070&auto=format&fit=crop"
                    alt="Workshop Interior"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-xl">THE WORKSHOP</p>
                    <p className="text-primary font-mono text-sm">SINCE 2025</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-3xl opacity-50" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                  Crafting Identity <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">For Champions.</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  At Aerorev, we understand that a jersey isn't just clothing; it's your team's flag, your sponsor's billboard, and your personal armor.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Specializing in automotive and racing apparel, we bring the precision of the pit lane to our printing press. Whether you need a single custom piece or bulk team orders, we deliver podium-finish quality.
                </p>
                <Link href="/shop" className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase hover:text-white transition-colors mt-4">
                  Explore Our Shop <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-black text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 Mix-blend-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 text-black">Start Your Engine</h2>
            <p className="text-xl md:text-2xl text-black/80 mb-10 font-light">
              Siap menikmati kualitas tertinggi dengan harga terjangkau?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-black text-white px-10 py-4 font-black uppercase text-lg hover:bg-zinc-800 transition-colors shadow-lg clip-path-slant">
                Start Custom Order
              </button>
              <Link href="/shop" className="bg-white/90 text-black border-2 border-black px-10 py-4 font-black uppercase text-lg hover:bg-black hover:text-white transition-colors shadow-lg clip-path-slant">
                Visit Shop
              </Link>
            </div>
          </div>
        </section>

      </main >
    </>
  )
}

function ServiceCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <ScrollAnimation animation="slideUp" delay={delay}>
      <div className="bg-card border border-white/5 p-8 h-full hover:border-primary/50 transition-colors group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Car className="w-24 h-24 text-white" />
        </div>
        <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white uppercase mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </ScrollAnimation>
  )
}