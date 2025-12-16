"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Car } from "lucide-react"

interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    desc: string
    delay: number
}

export function ServiceCard({ icon, title, desc, delay }: ServiceCardProps) {
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
