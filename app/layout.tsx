import type { Metadata } from 'next'
import { Cormorant_Garamond, Lora, Quicksand } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-cormorant',
})

const lora = Lora({ 
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-lora',
})

const quicksand = Quicksand({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: 'Toàn & Diệp - Thiệp Cưới Thanh Diệp Xanh',
  description: 'Trân trọng kính mời quý khách tham dự đám cưới của chúng tôi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${cormorant.variable} ${lora.variable} ${quicksand.variable}`}>
        {children}
      </body>
    </html>
  )
}
