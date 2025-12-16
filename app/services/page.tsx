"use client"

import { Header } from "@/components/header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Services() {
    return (
        <>
            <Header />
            <main className="bg-black text-white min-h-screen selection:bg-red-900 selection:text-white overflow-x-hidden">

                {/* Hero / Header Section */}
                <section className="relative pt-40 pb-20 px-4 border-b border-white/10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <ScrollAnimation animation="slideDown">
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
                                Aero<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">Rev</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl border-l-4 border-red-700 pl-6">
                                Premium Clothing Production House. <br />
                                We bring your designs to life with precision and passion.
                            </p>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Service 1: Manual Screen Printing (Jasa Sablon) */}
                <section className="py-24 px-4 border-b border-white/10 bg-zinc-950">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image Side */}
                        <ScrollAnimation animation="slideRight">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-red-900/20 rounded-xl blur-xl transition-all group-hover:bg-red-900/40" />
                                <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop"
                                        alt="Manual Screen Printing"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">High Durability</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Content Side */}
                        <ScrollAnimation animation="slideLeft">
                            <div className="space-y-8">
                                <h2 className="text-5xl md:text-6xl font-black uppercase leading-none">
                                    Jasa <br /> <span className="text-red-700">Sablon</span> Kaos
                                </h2>
                                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                    Teknik sablon manual standar internasional dengan detail presisi dan ketahanan cuci yang luar biasa. Pilihan utama untuk brand clothing yang mengutamakan kualitas.
                                </p>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Available Inks</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Rubber", "Superwhite", "Discharge", "Plastisol", "Plascharge", "Foam", "Glow in the Dark", "Reflective"].map((ink, i) => (
                                            <span key={i} className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium hover:border-red-700 hover:text-red-500 transition-colors cursor-default">
                                                {ink}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>
                </section>

                {/* Service 2: Digital Printing (Kaos Sablon Digital) */}
                <section className="py-24 px-4 border-b border-white/10 bg-black">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Content Side (Order swapped on Desktop) */}
                        <ScrollAnimation animation="slideRight">
                            <div className="space-y-8 order-2 lg:order-1">
                                <h2 className="text-5xl md:text-6xl font-black uppercase leading-none">
                                    Jasa <br /> Sablon <span className="text-blue-500">Polo</span>
                                </h2>
                                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                    Solusi cetak cepat tanpa minimal order dengan teknologi DTF (Direct to Film). Warna tak terbatas, gradasi halus, dan pengerjaan kilat untuk kebutuhan mendesak Anda.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "No Minimum Order",
                                        "Full Color & Gradient Capable",
                                        "Fast Production Time",
                                        "High Detail Accuracy"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>

                        {/* Image Side */}
                        <ScrollAnimation animation="slideLeft">
                            <div className="relative group order-1 lg:order-2">
                                <div className="absolute -inset-4 bg-blue-900/20 rounded-xl blur-xl transition-all group-hover:bg-blue-900/40" />
                                <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop"
                                        alt="Digital Printing Result"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-6 right-6">
                                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Fast Turnaround</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Service 3: Custom Polo (Jasa Polo) */}
                <section className="py-24 px-4 border-b border-white/10 bg-zinc-950">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image Side */}
                        <ScrollAnimation animation="slideRight">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-red-900/20 rounded-xl blur-xl transition-all group-hover:bg-red-900/40" />
                                <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1626019535798-844c80287ddf?q=80&w=2072&auto=format&fit=crop"
                                        alt="Manual Screen Printing"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">High Durability</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Content Side */}
                        <ScrollAnimation animation="slideLeft">
                            <div className="space-y-8">
                                <h2 className="text-5xl md:text-6xl font-black uppercase leading-none">
                                    Jasa <br /> <span className="text-red-700">Sablon</span>
                                </h2>
                                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                    Teknik sablon manual standar internasional dengan detail presisi dan ketahanan cuci yang luar biasa. Pilihan utama untuk brand clothing yang mengutamakan kualitas.
                                </p>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Available Inks</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Rubber", "Superwhite", "Discharge", "Plastisol", "Plascharge", "Foam", "Glow in the Dark", "Reflective"].map((ink, i) => (
                                            <span key={i} className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium hover:border-red-700 hover:text-red-500 transition-colors cursor-default">
                                                {ink}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="group flex items-center gap-4 text-lg font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors">
                                        Lihat Produk <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <ScrollAnimation animation="slideUp">
                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
                                Bikin Kaos Custom <br /> Sesuai Keinginanmu.
                            </h2>
                            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                                Konsultasikan desain Anda bersama tim ahli kami. Kami siap membantu dari pemilihan bahan hingga finishing.
                            </p>
                        </ScrollAnimation>
                    </div>
                </section>

            </main>
        </>
    )
}
