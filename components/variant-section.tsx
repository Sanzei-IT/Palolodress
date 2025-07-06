"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Star } from "lucide-react"
import { useState } from "react"

export default function VariantSection() {
  const [selectedColor, setSelectedColor] = useState("Black")
  const [selectedSize, setSelectedSize] = useState("Normal")
  const [selectedPackage, setSelectedPackage] = useState("single")

  const colors = [
    { name: "Black", value: "#000000", label: "Hitam" },
    { name: "Grey", value: "#6B7280", label: "Abu-abu" },
    { name: "Coksu", value: "#8B4513", label: "Coklat Susu" },
  ]

  const handleWhatsAppOrder = () => {
    const packageText = selectedPackage === "single" ? "Single (Rp89.000)" : "Bundling 2 pcs (Rp159.000)"
    const message = encodeURIComponent(
      `Halo, saya ingin memesan Inner Dress by PALOLO:
      
Warna: ${selectedColor}
Ukuran: ${selectedSize}
Paket: ${packageText}

Mohon info lebih lanjut. Terima kasih!`,
    )
    window.open(`https://wa.me/6282141820799?text=${message}`, "_blank")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">Pilih Varian Favorit Anda</h2>
          <p className="text-xl text-stone-600">Tersedia dalam berbagai pilihan warna dan ukuran</p>
        </div>

        <div className="space-y-8">
          {/* Color Selection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 font-serif">Pilih Warna</h3>
            <div className="flex flex-wrap gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === color.name
                      ? "border-amber-600 bg-amber-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full border-2 border-stone-300"
                    style={{ backgroundColor: color.value }}
                  />
                  <span className="font-medium text-stone-700">{color.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 font-serif">Pilih Ukuran</h3>
            <div className="flex gap-4">
              {["Normal", "Jumbo"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-8 py-4 rounded-full border-2 font-medium transition-all duration-300 ${
                    selectedSize === size
                      ? "border-amber-600 bg-amber-50 text-amber-800"
                      : "border-stone-200 text-stone-700 hover:border-stone-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Package Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className={`cursor-pointer transition-all duration-300 ${
                selectedPackage === "single" ? "ring-2 ring-amber-600 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedPackage("single")}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-stone-800">Single Purchase</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">Rp89.000</div>
                <p className="text-stone-600 mb-4">1 piece Inner Dress</p>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                  Pilihan Ekonomis
                </Badge>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all duration-300 relative ${
                selectedPackage === "bundling" ? "ring-2 ring-amber-600 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedPackage("bundling")}
            >
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-red-500 text-white px-3 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  HEMAT
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-stone-800">Bundling 2 pcs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">Rp159.000</div>
                <div className="text-sm text-stone-500 line-through mb-1">Rp178.000</div>
                <p className="text-stone-600 mb-4">2 pieces Inner Dress</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Hemat Rp19.000
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 font-serif">Ringkasan Pesanan</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-stone-600">Warna:</span>
                <span className="font-medium text-stone-800">{selectedColor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Ukuran:</span>
                <span className="font-medium text-stone-800">{selectedSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Paket:</span>
                <span className="font-medium text-stone-800">
                  {selectedPackage === "single" ? "Single (1 pcs)" : "Bundling (2 pcs)"}
                </span>
              </div>
              <div className="flex justify-between text-xl font-bold text-amber-600 pt-3 border-t">
                <span>Total:</span>
                <span>{selectedPackage === "single" ? "Rp89.000" : "Rp159.000"}</span>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Pesan Sekarang via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
