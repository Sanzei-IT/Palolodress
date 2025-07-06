"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, CreditCard, Truck, Package } from "lucide-react"
import { useState } from "react"

export default function OrderForm() {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    orderType: "single",
    singleColor: "",
    singleSize: "",
    bundlingColor1: "",
    bundlingSize1: "",
    bundlingColor2: "",
    bundlingSize2: "",
    paymentMethod: "",
    courier: "",
  })

  const colors = [
    { value: "hitam", label: "Hitam" },
    { value: "abu-abu", label: "Abu-abu" },
    { value: "coksu", label: "Coksu" },
  ]

  const sizes = [
    { value: "normal", label: "Normal" },
    { value: "jumbo", label: "Jumbo" },
  ]

  const couriers = [
    { value: "jnt", label: "J&T Express", icon: <Package className="h-4 w-4" /> },
    { value: "jne", label: "JNE", icon: <Package className="h-4 w-4" /> },
    { value: "ninja", label: "Ninja Xpress", icon: <Package className="h-4 w-4" /> },
  ]

  const basePrice = formData.orderType === "single" ? 89000 : 159000
  const bcaDiscount = formData.paymentMethod === "bca" ? 5000 : 0
  const finalPrice = basePrice - bcaDiscount

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleWhatsAppOrder = () => {
    let productDetails = ""

    if (formData.orderType === "single") {
      productDetails = `Paket: Single (1 pcs)
Warna: ${formData.singleColor}
Ukuran: ${formData.singleSize}`
    } else {
      productDetails = `Paket: Bundling (2 pcs)
Dress 1: ${formData.bundlingColor1} - ${formData.bundlingSize1}
Dress 2: ${formData.bundlingColor2} - ${formData.bundlingSize2}`
    }

    const courierName = couriers.find((c) => c.value === formData.courier)?.label || ""
    const paymentMethodText = formData.paymentMethod === "bca" ? "Transfer BCA" : "COD"

    const orderDetails = `
🛍️ *PESANAN INNER DRESS BY PALOLO*

👤 *Data Pelanggan:*
Nama: ${formData.nama}
Alamat: ${formData.alamat}

📦 *Detail Produk:*
${productDetails}

💰 *Pembayaran & Pengiriman:*
Metode Pembayaran: ${paymentMethodText}
${formData.paymentMethod === "bca" ? "💳 Diskon BCA: -Rp5.000" : ""}
Jasa Kirim: ${courierName}
Total: Rp${finalPrice.toLocaleString("id-ID")}

📋 *Catatan:*
${
  formData.paymentMethod === "bca"
    ? "Nomor rekening akan dikirim oleh admin via WhatsApp setelah konfirmasi."
    : "Pembayaran COD - bayar di tempat saat barang tiba."
}

Mohon konfirmasi pesanan saya. Terima kasih! 🙏
    `.trim()

    const message = encodeURIComponent(orderDetails)
    window.open(`https://wa.me/6282141820799?text=${message}`, "_blank")
  }

  const isFormValid =
    formData.nama &&
    formData.alamat &&
    formData.paymentMethod &&
    formData.courier &&
    (formData.orderType === "single"
      ? formData.singleColor && formData.singleSize
      : formData.bundlingColor1 && formData.bundlingSize1 && formData.bundlingColor2 && formData.bundlingSize2)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-serif">Form Pemesanan</h2>
          <p className="text-lg text-stone-600">Lengkapi data untuk melanjutkan pemesanan</p>
        </div>

        <Card className="shadow-xl border-0 bg-gradient-to-b from-white to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-stone-800 text-center">Data Pemesanan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nama" className="text-stone-700 font-medium">
                  Nama Lengkap *
                </Label>
                <Input
                  id="nama"
                  placeholder="Masukkan nama lengkap"
                  value={formData.nama}
                  onChange={(e) => handleInputChange("nama", e.target.value)}
                  className="border-stone-300 focus:border-amber-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alamat" className="text-stone-700 font-medium">
                  Alamat Lengkap *
                </Label>
                <Textarea
                  id="alamat"
                  placeholder="Masukkan alamat lengkap untuk pengiriman"
                  value={formData.alamat}
                  onChange={(e) => handleInputChange("alamat", e.target.value)}
                  className="border-stone-300 focus:border-amber-500 min-h-[80px]"
                />
              </div>
            </div>

            {/* Order Type Selection */}
            <div className="space-y-4">
              <Label className="text-stone-700 font-medium text-lg">Pilih Jenis Pesanan *</Label>
              <RadioGroup
                value={formData.orderType}
                onValueChange={(value) => handleInputChange("orderType", value)}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2 p-3 border-2 border-stone-200 rounded-lg">
                  <RadioGroupItem value="single" id="single" />
                  <Label htmlFor="single" className="font-medium cursor-pointer">
                    Single (Rp89.000)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border-2 border-stone-200 rounded-lg">
                  <RadioGroupItem value="bundling" id="bundling" />
                  <div className="flex-1">
                    <Label htmlFor="bundling" className="font-medium cursor-pointer">
                      Bundling (Rp159.000)
                    </Label>
                    <div className="text-xs text-red-600 font-semibold">🔥 HEMAT Rp19.000 dari harga normal!</div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Product Selection */}
            {formData.orderType === "single" ? (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-stone-700 font-medium">Pilih Warna *</Label>
                  <Select
                    value={formData.singleColor}
                    onValueChange={(value) => handleInputChange("singleColor", value)}
                  >
                    <SelectTrigger>
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
                <div className="space-y-2">
                  <Label className="text-stone-700 font-medium">Pilih Ukuran *</Label>
                  <Select value={formData.singleSize} onValueChange={(value) => handleInputChange("singleSize", value)}>
                    <SelectTrigger>
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
                  <div className="space-y-4 p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-stone-800">Dress Pertama</h4>
                    <div className="space-y-2">
                      <Label className="text-stone-700 font-medium">Warna 1 *</Label>
                      <Select
                        value={formData.bundlingColor1}
                        onValueChange={(value) => handleInputChange("bundlingColor1", value)}
                      >
                        <SelectTrigger>
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
                    <div className="space-y-2">
                      <Label className="text-stone-700 font-medium">Ukuran 1 *</Label>
                      <Select
                        value={formData.bundlingSize1}
                        onValueChange={(value) => handleInputChange("bundlingSize1", value)}
                      >
                        <SelectTrigger>
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

                  <div className="space-y-4 p-4 bg-stone-50 rounded-lg">
                    <h4 className="font-semibold text-stone-800">Dress Kedua</h4>
                    <div className="space-y-2">
                      <Label className="text-stone-700 font-medium">Warna 2 *</Label>
                      <Select
                        value={formData.bundlingColor2}
                        onValueChange={(value) => handleInputChange("bundlingColor2", value)}
                      >
                        <SelectTrigger>
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
                    <div className="space-y-2">
                      <Label className="text-stone-700 font-medium">Ukuran 2 *</Label>
                      <Select
                        value={formData.bundlingSize2}
                        onValueChange={(value) => handleInputChange("bundlingSize2", value)}
                      >
                        <SelectTrigger>
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

            {/* Payment Method */}
            <div className="space-y-4">
              <Label className="text-stone-700 font-medium text-lg">Metode Pembayaran *</Label>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => handleInputChange("paymentMethod", value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 p-4 border-2 border-stone-200 rounded-lg hover:border-amber-300 transition-colors">
                  <RadioGroupItem value="bca" id="bca" />
                  <div className="flex items-center space-x-3 flex-1">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <div className="flex-1">
                      <Label htmlFor="bca" className="font-medium text-stone-800 cursor-pointer">
                        Transfer via BCA
                      </Label>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Diskon Rp5.000!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 border-2 border-stone-200 rounded-lg hover:border-amber-300 transition-colors">
                  <RadioGroupItem value="cod" id="cod" />
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-green-600" />
                    <div>
                      <Label htmlFor="cod" className="font-medium text-stone-800 cursor-pointer">
                        Cash on Delivery (COD)
                      </Label>
                      <p className="text-sm text-stone-600">Bayar di tempat saat barang tiba</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>

              {formData.paymentMethod === "bca" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">🎉 Diskon Rp5.000 khusus pembayaran via BCA!</p>
                  <p className="text-green-700 text-sm mt-1">Nomor rekening akan dikirim oleh admin via WhatsApp.</p>
                </div>
              )}
            </div>

            {/* Courier Selection */}
            <div className="space-y-2">
              <Label className="text-stone-700 font-medium">Jasa Pengiriman *</Label>
              <Select value={formData.courier} onValueChange={(value) => handleInputChange("courier", value)}>
                <SelectTrigger className="w-full border-stone-300 focus:border-amber-500">
                  <SelectValue placeholder="Pilih jasa pengiriman" />
                </SelectTrigger>
                <SelectContent>
                  {couriers.map((courier) => (
                    <SelectItem key={courier.value} value={courier.value}>
                      <div className="flex items-center gap-2">
                        {courier.icon}
                        {courier.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Ringkasan Harga</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-600">Harga Produk:</span>
                  <span className="font-medium">Rp{basePrice.toLocaleString("id-ID")}</span>
                </div>
                {formData.orderType === "bundling" && (
                  <div className="flex justify-between text-red-600 font-semibold">
                    <span>🔥 Diskon Bundling:</span>
                    <span>-Rp19.000</span>
                  </div>
                )}
                {bcaDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Diskon BCA:</span>
                    <span className="font-medium">-Rp{bcaDiscount.toLocaleString("id-ID")}</span>
                  </div>
                )}
                <div className="border-t pt-2 flex justify-between text-xl font-bold text-amber-600">
                  <span>Total:</span>
                  <span>Rp{finalPrice.toLocaleString("id-ID")}</span>
                </div>
                {formData.orderType === "bundling" && (
                  <div className="text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                      💰 Udah hemat Rp19.000 nih!
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Order Button */}
            <div className="pt-6">
              <Button
                onClick={handleWhatsAppOrder}
                disabled={!isFormValid}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Pesan Sekarang
              </Button>
              {!isFormValid && (
                <p className="text-sm text-red-500 text-center mt-2">Mohon lengkapi semua field yang wajib diisi (*)</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
