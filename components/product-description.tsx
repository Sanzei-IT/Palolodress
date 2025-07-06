import { Check, Palette, Scissors, Shirt } from "lucide-react"

export default function ProductDescription() {
  const features = [
    {
      icon: <Shirt className="h-8 w-8 text-amber-600" />,
      title: "Bahan Breathable",
      description: "Kain yang mudah menyerap keringat dan nyaman dipakai seharian",
    },
    {
      icon: <Palette className="h-8 w-8 text-amber-600" />,
      title: "Warna Elegan",
      description: "Tersedia dalam 3 pilihan warna basic: Black, Grey, dan Coksu",
    },
    {
      icon: <Scissors className="h-8 w-8 text-amber-600" />,
      title: "Jahitan Rapi",
      description: "Dikerjakan dengan teliti untuk hasil yang berkualitas dan tahan lama",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">
            Mengapa Memilih Inner Dress PALOLO?
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Dirancang khusus untuk kenyamanan maksimal dalam aktivitas sehari-hari dengan kualitas premium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-amber-50 to-stone-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-100 to-stone-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center font-serif">Spesifikasi Produk</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-stone-700">Tersedia ukuran Normal & Jumbo</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-stone-700">Bahan berkualitas tinggi</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-stone-700">Cocok untuk daily wear</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-stone-700">Mudah dirawat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
