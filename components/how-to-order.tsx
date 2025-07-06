import { Palette, FileText, MessageCircle } from "lucide-react"

export default function HowToOrder() {
  const steps = [
    {
      icon: <Palette className="h-12 w-12 text-amber-600" />,
      title: "Pilih Varian & Paket",
      description: "Tentukan paket (Single/Bundling), warna, dan ukuran sesuai kebutuhan Anda",
    },
    {
      icon: <FileText className="h-12 w-12 text-amber-600" />,
      title: "Isi Form Pemesanan",
      description: "Lengkapi data diri dan alamat pengiriman, pilih metode pembayaran",
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-amber-600" />,
      title: "Chat Admin WhatsApp",
      description: "Klik Order Now untuk diarahkan ke WhatsApp admin dan konfirmasi pesanan",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">Cara Memesan</h2>
          <p className="text-xl text-stone-600">Proses pemesanan yang mudah dan cepat dalam 3 langkah sederhana</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="bg-gradient-to-b from-amber-50 to-stone-50 rounded-full p-6 shadow-lg mx-auto w-fit border-2 border-amber-100">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
