"use client"

import { ExternalLink, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProductProps {
    id: number
    name: string
    price: string
    category: string
    image: string
    link: string
}

export function ProductCard({ product }: { product: ProductProps }) {
    return (
        <div className="group relative flex flex-col gap-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-900 border border-transparent hover:border-primary/20 transition-all">
                {/* Product Image */}
                <div className="relative w-full h-full p-6 flex items-center justify-center bg-gray-50 dark:bg-zinc-900/50">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                    />
                </div>

                {/* Action Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <Link
                        href={product.link}
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                    >
                        Buy Now <ExternalLink size={16} />
                    </Link>
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-black uppercase px-2 py-1 rounded">
                    {product.category}
                </div>
            </div>

            <div className="space-y-1">
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-muted-foreground font-mono text-sm">{product.price}</p>
            </div>
        </div>
    )
}
