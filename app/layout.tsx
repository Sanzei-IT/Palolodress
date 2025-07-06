import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lora } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Inner Dress by PALOLO - Nyaman Dipakai Sehari-hari",
  description:
    "Inner dress berkualitas tinggi dengan bahan adem, tidak menerawang, dan jahitan rapi. Tersedia ukuran Normal & Jumbo. Single Rp89.000, Bundling 2 pcs Rp159.000. Diskon Rp5.000 untuk transfer BCA!",
  keywords: "inner dress, pakaian dalam wanita, PALOLO, baju dalam nyaman, inner wear, bundling hemat, diskon BCA",
  openGraph: {
    title: "Inner Dress by PALOLO - Nyaman Dipakai Sehari-hari",
    description:
      "Inner dress berkualitas tinggi dengan bahan adem dan jahitan rapi. Paket bundling hemat + diskon BCA tersedia!",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${lora.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
