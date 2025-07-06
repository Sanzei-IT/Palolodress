"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Saya tertarik dengan Inner Dress by PALOLO. Mohon info lebih lanjut.")
    window.open(`https://wa.me/6282141820799?text=${message}`, "_blank")
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {/* Product Image - Full width, proper aspect ratio for mobile */}
        <div className="relative w-full h-[40vh] bg-white rounded-b-3xl overflow-hidden">
          <Image
            src="/images/hero-background.png"
            alt="Inner Dress by PALOLO collection in various colors"
            fill
            className="object-contain object-center p-4"
            priority
          />
        </div>

        {/* Content below image */}
        <div className="px-6 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4 font-serif tracking-tight text-stone-800">
            Inner Dress by
            <span className="block text-amber-600 mt-1">PALOLO</span>
          </h1>
          <p className="text-base mb-6 text-stone-600 leading-relaxed">Nyaman dipakai, cocok untuk sehari-hari</p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-base font-semibold rounded-full shadow-lg"
          >
            Pesan Sekarang
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side - Image */}
        <div className="w-1/2 relative">
          <Image
            src="/images/hero-background.png"
            alt="Inner Dress by PALOLO collection in various colors"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="w-1/2 flex items-center justify-center px-8">
          <div className="text-center max-w-lg">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif tracking-tight text-stone-800">
              Inner Dress by
              <span className="block text-amber-600 mt-2">PALOLO</span>
            </h1>
            <p className="text-xl mb-8 text-stone-600 leading-relaxed">Nyaman dipakai, cocok untuk sehari-hari</p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
