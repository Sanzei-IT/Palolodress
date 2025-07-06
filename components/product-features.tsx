import { Droplets, Ruler, Palette, Shield } from "lucide-react"

export default function ProductFeatures() {
  const features = [
    {
      icon: <Droplets className="h-8 w-8 text-amber-600" />,
      title: "Bahan Adem dan Menyerap Keringat",
      description: "Material berkualitas yang breathable dan nyaman sepanjang hari",
    },
    {
      icon: <Ruler className="h-8 w-8 text-amber-600" />,
      title: "Ukuran Tersedia: Normal & Jumbo",
      description: "Pilihan ukuran yang pas untuk berbagai bentuk tubuh",
    },
    {
      icon: <Palette className="h-8 w-8 text-amber-600" />,
      title: "Warna Elegan: Hitam, Abu-abu, Coksu",
      description: "Pilihan warna basic yang mudah dipadukan",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Jahitan Rapi, Tidak Menerawang",
      description: "Kualitas jahitan premium dan bahan yang tidak tembus pandang",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-serif">
            Keunggulan Inner Dress PALOLO
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Dirancang khusus untuk memberikan kenyamanan maksimal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-amber-50 to-stone-50 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-stone-800 mb-3 font-serif">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
