import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientNavbar from '@/components/ClientNavbar'
import Footer from '@/components/Footer'
import ScrollPopup from '@/components/ScrollPopup'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NXEQUBE - Modern Web & Mobile Development',
  description: 'Professional web development, mobile apps, and AI integration services. Transform your ideas into digital reality with cutting-edge technology.',
  keywords: 'web development, mobile apps, AI integration, React, Next.js, Flutter, full-stack development',
  authors: [{ name: 'NXEQUBE Team' }],
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'NXEQUBE - Modern Web & Mobile Development',
    description: 'Professional web development, mobile apps, and AI integration services.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-all duration-500 ease-in-out`}>
        <ThemeProvider>
          <div className="min-h-screen transition-all duration-500 ease-in-out bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none opacity-5" />
            <ClientNavbar />
            {children}
            <Footer />
            <ScrollPopup />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
