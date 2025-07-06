"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useState } from "react"

export default function ProductOptions() {
  const [selectedOption, setSelectedOption] = useState<"single" | "bundling">("single")

  const colors = [
    { name: "Hitam", value: "black", color: "#000000" },
    { name: "Abu-abu", value: "grey", color: "#6B7280" },
    { name: "Coksu", value: "coksu", color: "#8B4513" },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-serif">Pilihan Paket & Harga</h2>
          <p className="text-lg text-stone-600">Pilih paket yang sesuai kebutuhan Anda</p>
        </div>

        {/* Package Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card
            className={`cursor-pointer transition-all duration-300 ${
              selectedOption === "single" ? "ring-2 ring-amber-600 shadow-lg" : "hover:shadow-md"
            }`}
            onClick={() => setSelectedOption("single")}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-stone-800">Single Purchase</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">Rp89.000</div>
              <p className="text-stone-600 mb-4">1 piece Inner Dress</p>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                Pilihan Praktis
              </Badge>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all duration-300 relative ${
              selectedOption === "bundling" ? "ring-2 ring-amber-600 shadow-lg" : "hover:shadow-md"
            }`}
            onClick={() => setSelectedOption("bundling")}
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
              <div className="text-lg text-stone-500 line-through mb-2">Rp178.000</div>
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                🔥 HEMAT Rp19.000! 🔥
              </div>
              <p className="text-stone-600 mb-4">2 pieces Inner Dress - Bebas pilih warna & ukuran</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Diskon Gede Banget!
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Color Swatches */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-stone-800 mb-4 font-serif text-center">Pilihan Warna</h3>
          <div className="flex justify-center gap-4">
            {colors.map((color) => (
              <div key={color.value} className="text-center">
                <div
                  className="w-12 h-12 rounded-full border-2 border-stone-300 shadow-sm mx-auto mb-2"
                  style={{ backgroundColor: color.color }}
                />
                <span className="text-sm font-medium text-stone-700">{color.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-stone-600">
              Ukuran tersedia: <strong>Normal</strong> & <strong>Jumbo</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
