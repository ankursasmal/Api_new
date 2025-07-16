'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function ClientNavbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded animate-pulse" />
              <div className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="w-20 h-4 bg-gray-300 rounded animate-pulse" />
              <div className="w-20 h-4 bg-gray-300 rounded animate-pulse" />
              <div className="w-20 h-4 bg-gray-300 rounded animate-pulse" />
              <div className="w-9 h-9 bg-gray-300 rounded animate-pulse" />
              <div className="w-24 h-10 bg-gray-300 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return <Navbar />
}