'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, Globe } from 'lucide-react'

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show popup after scrolling 50% of viewport height and only once
      if (scrollPosition > windowHeight * 0.5 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasShown])

  const handleContactClick = () => {
    setIsVisible(false)
    // Smooth scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-8 max-w-md w-full glass-card"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Offer Badge */}
              <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-bold mb-6">
                50% OFF
              </div>

              <h2 className="text-2xl font-bold gradient-text mb-4">
                Special Offer!
              </h2>
              
              <p className="text-gray-300 mb-6">
                Get 50% off on your first project with TechSolutions
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-primary-500" />
                  <span>+91 9097429446</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-primary-500" />
                  <span>contact@nxeqube.com</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Globe className="w-4 h-4 mr-2 text-primary-500" />
                  <span>www.techsolutions.com</span>
                </div>
              </div>

              {/* Services List */}
              <div className="text-left mb-6">
                <h3 className="text-lg font-semibold mb-3 text-center">Our Services:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    Web Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    Mobile Apps
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    AI Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    Cloud Solutions
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Contact Us!
              </motion.button>

              <p className="text-xs text-gray-400 mt-4">
                Limited time offer. Contact us now!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollPopup
