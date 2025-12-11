"use client"

import { Header } from "@/components/header"
import { ScrollAnimation } from "@/components/scroll-animation"
// 1. Import the Montserrat font
import { Montserrat } from "next/font/google"

// 2. Configure the font (loading the ExtraBold weight '800')
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: "800" 
})

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center space-y-6">
              {/* 3. Applied Montserrat ExtraBold (800) */}
              <h1 className={`${montserrat.className} text-5xl md:text-6xl font-extrabold text-balance leading-tight`}>
                Your Custom Apparel, Crafted with Care
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Premium custom apparel design and manufacturing for individuals and businesses
              </p>
            </div>
          </ScrollAnimation>
        </section>

        {/* About Us Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight" delay={0}>
              <div>
                {/* Updated to Montserrat ExtraBold */}
                <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold mb-6`}>About Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We are a passionate team dedicated to bringing your apparel vision to life. With over a decade of
                  experience in custom design and manufacturing, we take pride in creating premium quality garments that
                  tell your story.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every piece we create is a reflection of your unique style and personality. From concept to final
                  product, we ensure meticulous attention to detail at every step.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft" delay={100}>
              <div className="bg-card rounded-lg aspect-square flex items-center justify-center border border-border">
                <img
                  src="/custom-apparel-studio-showcase.jpg"
                  alt="Custom apparel showcase"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Service Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-12">
              {/* Updated to Montserrat ExtraBold */}
              <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold mb-4`}>Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Custom design, printing, embroidery, and more
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Design",
                description: "Work with our designers to create unique apparel designs tailored to your vision",
              },
              {
                title: "Screen Printing",
                description: "High-quality screen printing with vibrant colors and durability",
              },
              { title: "Embroidery", description: "Professional embroidery services for logos and detailed designs" },
            ].map((service, idx) => (
              <ScrollAnimation key={idx} animation="slideUp" delay={idx * 100}>
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Apparel Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-12">
              {/* Updated to Montserrat ExtraBold */}
              <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold mb-4`}>Our Apparel</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of premium quality garments
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <ScrollAnimation key={item} animation="slideUp" delay={item * 75}>
                <div className="space-y-4">
                  <div className="bg-card rounded-lg aspect-square flex items-center justify-center border border-border overflow-hidden">
                    <img
                      src={`/custom-tshirt-design-.jpg?height=300&width=300&query=custom+tshirt+design+${item}`}
                      alt={`Apparel item ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Premium T-Shirt {item}</h3>
                    <p className="text-muted-foreground text-sm">$29.99</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation animation="slideLeft" delay={0}>
              <div>
                {/* Updated to Montserrat ExtraBold */}
                <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold mb-6`}>Visit Us</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Design Street
                      <br />
                      Creative City, CC 12345
                      <br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Monday - Friday: 10:00 AM - 6:00 PM
                      <br />
                      Saturday: 11:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Phone: (555) 123-4567
                      <br />
                      Email: info@customapparel.com
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideRight" delay={100}>
              <div className="bg-card rounded-lg aspect-square flex items-center justify-center border border-border">
                <img
                  src="/studio-location-map.jpg"
                  alt="Studio location map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border text-center">
          <ScrollAnimation animation="slideUp">
            {/* Updated to Montserrat ExtraBold */}
            <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold mb-6`}>Ready to Create Something Amazing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start your custom apparel journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-foreground text-background px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="border border-foreground text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors">
                Learn More
              </button>
            </div>
          </ScrollAnimation>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 aerorev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}