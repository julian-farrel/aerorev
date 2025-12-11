"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  animation?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight"
}

export function ScrollAnimation({ children, delay = 0, animation = "fadeIn" }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animationClasses = {
    fadeIn: "fade-in",
    slideUp: "slide-up",
    slideDown: "slide-down",
    slideLeft: "slide-left",
    slideRight: "slide-right",
  }

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${isInView ? "animate" : ""}`}
      style={{
        animationDelay: isInView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
