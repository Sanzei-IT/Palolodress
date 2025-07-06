"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from "lucide-react"
import { useState } from "react"

export default function VariantPricingSection() {
  const [mode, setMode] = useState<"single" | "bundling">("single")
  const [singleColor, setSingleColor] = useState("")
  const [singleSize, setSingleSize] = useState("")
  const [bundlingColor1, setBundlingColor1] = useState("")
  const [bundlingColor2, setBundlingColor2] = useState("")
  const [bundlingSize1, setBundlingSize1] = useState("")
  const [bundlingSize2, setBundlingSize2] = useState("")

  const colors = [
    { value: "black", label: "Black (Hitam)" },
    { value: "grey", label: "Grey (Abu-abu)" },
    { value: "coksu", label: "Coksu (Coklat Susu)" },
  ]

  const sizes = [
    { value: "normal", label: "Normal" },
    { value: "jumbo", label: "Jumbo" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">Pilih Paket & Varian</h2>
          <p className="text-xl text-stone-600">Tersedia dalam paket single atau bundling hemat</p>
        </div>

        {/* Mode Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card
            className={`cursor-pointer transition-all duration-300 ${
              mode === "single" ? "ring-2 ring-amber-600 shadow-lg" : "hover:shadow-md"
            }`}
            onClick={() => setMode("single")}
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
              mode === "bundling" ? "ring-2 ring-amber-600 shadow-lg" : "hover:shadow-md"
            }`}
            onClick={() => setMode("bundling")}
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

        {/* Variant Selection */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 font-serif">
            {mode === "single" ? "Pilih Varian" : "Pilih Varian (Bebas pilih 2 warna)"}
          </h3>

          {mode === "single" ? (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Pilih Warna</label>
                <Select value={singleColor} onValueChange={setSingleColor}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih warna" />
                  </SelectTrigger>
                  <SelectContent>
                    {colors.map((color) => (
                      <SelectItem key={color.value} value={color.value}>
                        {color.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Pilih Ukuran</label>
                <Select value={singleSize} onValueChange={setSingleSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih ukuran" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-stone-800">Dress Pertama</h4>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Warna</label>
                    <Select value={bundlingColor1} onValueChange={setBundlingColor1}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih warna" />
                      </SelectTrigger>
                      <SelectContent>
                        {colors.map((color) => (
                          <SelectItem key={color.value} value={color.value}>
                            {color.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Ukuran</label>
                    <Select value={bundlingSize1} onValueChange={setBundlingSize1}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih ukuran" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-stone-800">Dress Kedua</h4>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Warna</label>
                    <Select value={bundlingColor2} onValueChange={setBundlingColor2}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih warna" />
                      </SelectTrigger>
                      <SelectContent>
                        {colors.map((color) => (
                          <SelectItem key={color.value} value={color.value}>
                            {color.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Ukuran</label>
                    <Select value={bundlingSize2} onValueChange={setBundlingSize2}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih ukuran" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Price Summary */}
          <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-stone-800">Total Harga:</span>
              <span className="text-3xl font-bold text-amber-600">{mode === "single" ? "Rp89.000" : "Rp159.000"}</span>
            </div>
            {mode === "bundling" && (
              <p className="text-sm text-green-600 mt-2">💰 Hemat Rp19.000 dengan paket bundling!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
