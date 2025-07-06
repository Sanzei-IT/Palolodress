import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sari Dewi",
      image: "/images/testimonial-1.jpg",
      rating: 5,
      review:
        "Inner dress PALOLO ini beneran nyaman banget! Aku pakai warna coksu dan cocok banget sama outer apapun. Bahannya adem dan gak menerawang, perfect untuk daily outfit! #ootd",
    },
    {
      name: "Maya Putri",
      image: "/images/testimonial-2.jpg",
      rating: 5,
      review:
        "Udah beli yang bundling 2 pcs, worth it banget! Yang hitam ini aku pakai terus karena mudah dipadukan. Jahitannya rapi dan ukurannya pas, recommended deh!",
    },
    {
      name: "Rina Sari",
      image: "/images/testimonial-3.jpg",
      rating: 5,
      review:
        "Inner dress yang paling nyaman yang pernah aku pakai! Warna coksu-nya elegan banget, cocok buat ke kantor atau acara formal. Bahannya breathable, gak gerah seharian.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-serif">Testimoni Pelanggan</h2>
          <p className="text-lg text-stone-600">Lihat bagaimana customer kami memakai Inner Dress PALOLO</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} wearing Inner Dress PALOLO`}
                    width={120}
                    height={160}
                    className="rounded-lg mx-auto mb-3 shadow-md object-cover"
                  />
                  <h3 className="text-lg font-bold text-stone-800 font-serif">{testimonial.name}</h3>
                </div>

                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-stone-600 text-sm leading-relaxed italic">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
