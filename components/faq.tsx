import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Apakah bisa mix ukuran dalam paket bundling?",
      answer:
        "Ya, tentu saja! Dalam paket bundling 2 pcs, Anda bebas memilih kombinasi ukuran yang berbeda. Misalnya 1 Normal dan 1 Jumbo, atau sesuai kebutuhan Anda.",
    },
    {
      question: "Apakah bahan inner dress ini tembus pandang?",
      answer:
        "Tidak, bahan inner dress PALOLO tidak tembus pandang. Kami menggunakan bahan berkualitas tinggi yang cukup tebal namun tetap breathable dan nyaman dipakai.",
    },
    {
      question: "Berapa lama pengiriman?",
      answer:
        "Estimasi pengiriman: J&T Express (2-4 hari), JNE (2-5 hari), Ninja Xpress (2-4 hari). Waktu pengiriman dapat bervariasi tergantung lokasi dan kondisi cuaca.",
    },
    {
      question: "Apakah bisa bayar dengan COD?",
      answer:
        "Ya, kami melayani COD (Cash on Delivery) untuk seluruh Indonesia. Anda bisa memilih metode pembayaran COD saat mengisi form pemesanan. Bayar langsung saat barang tiba di tempat Anda.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-serif">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-stone-600">Temukan jawaban untuk pertanyaan umum tentang Inner Dress PALOLO</p>
        </div>

        <div className="bg-gradient-to-b from-amber-50 to-stone-50 rounded-2xl p-6 shadow-lg">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-4 py-3 text-left font-semibold text-stone-800 hover:text-amber-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-stone-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
