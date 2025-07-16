'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'AI Integration', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: <MessageCircle className="w-5 h-5" />, href: 'https://wa.me/919097429446', label: 'WhatsApp' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/nxeqube/?viewAsMember=true', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/nxeqube', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/nxeqube/', label: 'Instagram' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@nxeqube.com', label: 'Email' }
  ]

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">NXEQUBE</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-start text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-primary-500 mt-1 flex-shrink-0" />
                <span>+91 9097429446</span>
              </div>
              <div className="flex items-start text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-primary-500 mt-1 flex-shrink-0" />
                <span>contact@nxeqube.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-primary-500 mt-1 flex-shrink-0" />
                <span>Arena Housing Society, Street Number 110, BA Block(Newtown), Action Area I, Newtown, New Town, West Bengal 700156</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 rounded-lg hover:bg-primary-500/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            © 2024 NXEQUBE. All rights reserved.
          </motion.p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-primary-500/20 rounded-lg hover:bg-primary-500/30 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
