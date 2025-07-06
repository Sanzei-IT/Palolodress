"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, CreditCard, Truck } from "lucide-react"
import { useState } from "react"

export default function OrderFormSection() {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    kodePos: "",
    paymentMethod: "transfer",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleWhatsAppOrder = () => {
    // Get selected variants from localStorage or context (simplified for demo)
    const orderDetails = `
🛍️ *PESANAN INNER DRESS BY PALOLO*

👤 *Data Pelanggan:*
Nama: ${formData.nama}
Alamat: ${formData.alamat}
Kode Pos: ${formData.kodePos || "Tidak diisi"}

💳 *Metode Pembayaran:*
${formData.paymentMethod === "transfer" ? "Transfer BCA" : "COD (Cash on Delivery)"}

📦 *Detail Produk:*
[Akan diisi berdasarkan pilihan varian di atas]

${
  formData.paymentMethod === "transfer"
    ? "📋 *Catatan:* Nomor rekening akan dikirim oleh admin via WhatsApp"
    : "📋 *Catatan:* Barang akan dikirim, bayar di tempat"
}

Mohon konfirmasi pesanan saya. Terima kasih! 🙏
    `.trim()

    const message = encodeURIComponent(orderDetails)
    window.open(`https://wa.me/6282141820799?text=${message}`, "_blank")
  }

  const isFormValid = formData.nama && formData.alamat && formData.paymentMethod

  return (
    <section id="order-section" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">Form Pemesanan</h2>
          <p className="text-xl text-stone-600">Lengkapi data Anda untuk melanjutkan pemesanan</p>
        </div>

        <Card className="shadow-xl border-0 bg-gradient-to-b from-white to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-stone-800 text-center">Data Pelanggan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Customer Information */}
            <div className="grid md:grid-cols-2 gap-6">
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
                <Label htmlFor="kodePos" className="text-stone-700 font-medium">
                  Kode Pos (Opsional)
                </Label>
                <Input
                  id="kodePos"
                  placeholder="Contoh: 12345"
                  value={formData.kodePos}
                  onChange={(e) => handleInputChange("kodePos", e.target.value)}
                  className="border-stone-300 focus:border-amber-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="alamat" className="text-stone-700 font-medium">
                Alamat Pengiriman *
              </Label>
              <Textarea
                id="alamat"
                placeholder="Masukkan alamat lengkap untuk pengiriman"
                value={formData.alamat}
                onChange={(e) => handleInputChange("alamat", e.target.value)}
                className="border-stone-300 focus:border-amber-500 min-h-[100px]"
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <Label className="text-stone-700 font-medium text-lg">Metode Pembayaran *</Label>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => handleInputChange("paymentMethod", value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 p-4 border-2 border-stone-200 rounded-lg hover:border-amber-300 transition-colors">
                  <RadioGroupItem value="transfer" id="transfer" />
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <div>
                      <Label htmlFor="transfer" className="font-medium text-stone-800 cursor-pointer">
                        Transfer BCA
                      </Label>
                      <p className="text-sm text-stone-600">Nomor rekening akan dikirim oleh admin via WhatsApp</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 border-2 border-stone-200 rounded-lg hover:border-amber-300 transition-colors">
                  <RadioGroupItem value="cod" id="cod" />
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-green-600" />
                    <div>
                      <Label htmlFor="cod" className="font-medium text-stone-800 cursor-pointer">
                        COD (Cash on Delivery)
                      </Label>
                      <p className="text-sm text-stone-600">Barang akan dikirim, bayar di tempat</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Order Button */}
            <div className="pt-6">
              <Button
                onClick={handleWhatsAppOrder}
                disabled={!isFormValid}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Order Now via WhatsApp
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
