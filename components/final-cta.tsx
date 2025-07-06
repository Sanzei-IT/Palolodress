"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, TrendingUp } from "lucide-react"

export default function FinalCTA() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Saya tertarik dengan Inner Dress by PALOLO. Mohon info lebih lanjut.")
    window.open(`https://wa.me/6282141820799?text=${message}`, "_blank")
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-stone-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Clock className="h-6 w-6 text-amber-200" />
            <TrendingUp className="h-6 w-6 text-amber-200" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Stok Terbatas!</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Yuk Pesan Sekarang!</h3>
          <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
            Jangan sampai kehabisan Inner Dress PALOLO yang nyaman dan berkualitas ini!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-left text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Bahan adem & menyerap keringat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Jahitan rapi & tidak menerawang</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>🔥 Bundling hemat Rp19.000!</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>+ Diskon BCA Rp5.000</span>
            </div>
          </div>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          Yuk Pesan Sekarang!
        </Button>

        <p className="mt-4 text-amber-200 text-sm">
          ⚡ Respon cepat dalam 5 menit • 🚚 Pengiriman ke seluruh Indonesia
        </p>
      </div>
    </section>
  )
}
