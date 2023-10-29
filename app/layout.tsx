import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Param Hansa Philanthropies',
  description: 'Helping Our New Future, Today... Giving... focused on research at the intersection of computing and life sciences, on ideas that harness the power of natural sciences to create better versions of our society...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        {children}

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  )
}
