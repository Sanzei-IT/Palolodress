import HeroSection from "@/components/hero-section"
import ProductFeatures from "@/components/product-features"
import ProductOptions from "@/components/product-options"
import OrderForm from "@/components/order-form"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <HeroSection />
      <ProductFeatures />
      <ProductOptions />
      <OrderForm />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
