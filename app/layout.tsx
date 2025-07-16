import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechSolutions - Modern Web & Mobile Development',
  description: 'Professional web development, mobile apps, and AI integration services. Transform your ideas into digital reality with cutting-edge technology.',
  keywords: 'web development, mobile apps, AI integration, React, Next.js, Flutter, full-stack development',
  authors: [{ name: 'TechSolutions Team' }],
  openGraph: {
    title: 'TechSolutions - Modern Web & Mobile Development',
    description: 'Professional web development, mobile apps, and AI integration services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechSolutions - Modern Web & Mobile Development',
    description: 'Professional web development, mobile apps, and AI integration services.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}