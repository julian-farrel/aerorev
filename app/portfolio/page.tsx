"use client"

import { Header } from "@/components/header"
import { ScrollAnimation } from "@/components/scroll-animation"

const PORTFOLIO_ITEMS = [
    {
        id: 1,
        title: "MotoGP",
        category: "Aerorev",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=987&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 2,
        title: "JAPS RIDERS",
        category: "Aerorev",
        image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=2070&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 3,
        title: "CUAN HELMET",
        category: "Aerorev",
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=2028&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 4,
        title: "JAPS RACING",
        category: "Aerorev",
        image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2070&auto=format&fit=crop",
        size: "small"
    },
    // {
    //     id: 5,
    //     title: "Night Circuit",
    //     category: "Aerorev",
    //     image: "https://images.unsplash.com/photo-1622185135505-2d795043906a?q=80&w=2074&auto=format&fit=crop",
    //     size: "large"
    // },
    // {
    //     id: 6,
    //     title: "Apex Predator",
    //     category: "Aerorev",
    //     image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&w=987&auto=format&fit=crop",
    //     size: "small"
    // }
]

export default function Portfolio() {
    return (
        <>
            <Header />
            <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">

                {/* Header Section */}
                <section className="pt-32 pb-16 px-4 text-center">
                    <ScrollAnimation animation="slideDown">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                            Portofolio
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fadeIn" delay={200}>
                        <div className="h-1 w-24 bg-primary mx-auto mb-8" />
                        <p className="text-gray-400 font-mono tracking-widest text-sm uppercase">
                            Collection of Our Best Works
                        </p>
                    </ScrollAnimation>
                </section>

                {/* Portfolio Grid */}
                <section className="max-w-[1600px] mx-auto px-4 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PORTFOLIO_ITEMS.map((item, idx) => (
                            <ScrollAnimation key={item.id} animation="fadeIn" delay={idx * 100}>
                                <div className={`group relative overflow-hidden rounded-xl border border-white/5 bg-zinc-900 shadow-2xl ${item.size === 'large' ? 'md:row-span-2' : ''} aspect-[3/4]`}>
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <div className="w-8 h-[2px] bg-primary" />
                                            <span className="text-primary font-bold text-xs uppercase tracking-widest">{item.category}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </section>

            </main>
        </>
    )
}
