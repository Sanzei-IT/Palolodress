"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useState } from "react"

export default function VariantPriceSection() {
  const [purchaseType, setPurchaseType] = useState<"single" | "bundling">("single")
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  const colors = [
    { name: "Hitam", value: "black", color: "#000000" },
    { name: "Abu-Abu", value: "grey", color: "#6B7280" },
    { name: "Coksu", value: "coksu", color: "#8B4513" },
  ]

  const sizes = ["Normal", "Jumbo"]

  const handleColorSelect = (colorValue: string) => {
    if (purchaseType === "single") {
      setSelectedColors([colorValue])
    } else {
      if (selectedColors.includes(colorValue)) {
        setSelectedColors(selectedColors.filter((c) => c !== colorValue))
      } else if (selectedColors.length < 2) {
        setSelectedColors([...selectedColors, colorValue])
      }
    }
  }

  const handleSizeSelect = (size: string) => {
    if (purchaseType === "single") {
      setSelectedSizes([size])
    } else {
      if (selectedSizes.includes(size)) {
        setSelectedSizes(selectedSizes.filter((s) => s !== size))
      } else if (selectedSizes.length < 2) {
        setSelectedSizes([...selectedSizes, size])
      }
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">Pilih Paket & Varian</h2>
          <p className="text-xl text-stone-600">Tersedia paket single atau bundling dengan pilihan bebas</p>
        </div>

        {/* Purchase Type Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card
            className={`cursor-pointer transition-all duration-300 ${
              purchaseType === "single" ? "ring-2 ring-amber-600 shadow-lg" : "hover:shadow-md"
            }`}
            onClick={() => {
              setPurchaseType("single")
              setSelectedColors([])
              setSelectedSizes([])
            }}
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
              purchaseType === "bundling" ? "ring-2 ring-amber-600 shadow-lg" : "hover:shadow-md"
            }`}
            onClick={() => {
              setPurchaseType("bundling")
              setSelectedColors([])
              setSelectedSizes([])
            }}
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
              <p className="text-stone-600 mb-4">2 pieces - Bebas pilih warna & ukuran</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Hemat Rp19.000
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Color Selection */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 font-serif">
            Pilih Warna {purchaseType === "bundling" && `(${selectedColors.length}/2)`}
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => handleColorSelect(color.value)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedColors.includes(color.value)
                    ? "border-amber-600 bg-amber-50 shadow-md"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                <div
                  className="w-12 h-12 rounded-full border-2 border-stone-300 shadow-sm"
                  style={{ backgroundColor: color.color }}
                />
                <span className="font-medium text-stone-700">{color.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 font-serif">
            Pilih Ukuran {purchaseType === "bundling" && `(${selectedSizes.length}/2)`}
          </h3>
          <div className="flex gap-4 justify-center">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`px-8 py-4 rounded-full border-2 font-medium transition-all duration-300 ${
                  selectedSizes.includes(size)
                    ? "border-amber-600 bg-amber-50 text-amber-800 shadow-md"
                    : "border-stone-200 text-stone-700 hover:border-stone-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
