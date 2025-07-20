'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Bot, 
  Palette, 
  Server, 
  Cloud,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60',
      glowColor: 'shadow-blue-500/20 hover:shadow-blue-500/40'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android using Flutter and React Native.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30 hover:border-purple-500/60',
      glowColor: 'shadow-purple-500/20 hover:shadow-purple-500/40'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI ChatBot Integration',
      description: 'Intelligent chatbots powered by AI to enhance customer engagement and automate support.',
      features: ['Natural Language', 'Multi-Platform', '24/7 Support', 'Custom Training'],
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30 hover:border-green-500/60',
      glowColor: 'shadow-green-500/20 hover:shadow-green-500/40'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences across all devices.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30 hover:border-orange-500/60',
      glowColor: 'shadow-orange-500/20 hover:shadow-orange-500/40'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Robust, scalable backend solutions using Node.js, Python, and modern database technologies.',
      features: ['API Development', 'Database Design', 'Authentication', 'Real-time Features'],
      color: 'from-indigo-500 to-purple-500',
      borderColor: 'border-indigo-500/30 hover:border-indigo-500/60',
      glowColor: 'shadow-indigo-500/20 hover:shadow-indigo-500/40'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions using AWS, Google Cloud, and Azure.',
      features: ['Auto Scaling', 'Load Balancing', 'Monitoring', 'Security'],
      color: 'from-teal-500 to-blue-500',
      borderColor: 'border-teal-500/30 hover:border-teal-500/60',
      glowColor: 'shadow-teal-500/20 hover:shadow-teal-500/40'
    }
  ]

  return (
    <section id="services" className="py-5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`
                relative group cursor-pointer
                bg-white/90 dark:bg-gray-900/90 backdrop-blur-md
                border-2 ${service.borderColor}
                rounded-2xl p-8 overflow-hidden
                shadow-xl ${service.glowColor}
                transition-all duration-500 ease-out
                hover:shadow-2xl
              `}
            >
              {/* Animated border gradient */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                bg-gradient-to-r ${service.color} p-[2px]
                transition-opacity duration-500
              `}>
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with animated background */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`
                    inline-flex p-4 rounded-xl mb-6
                    bg-gradient-to-r ${service.color}
                    shadow-lg group-hover:shadow-xl
                    transition-shadow duration-300
                  `}
                >
                  {service.icon}
                </motion.div>
                
                {/* Title with hover effect */}
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                >
                  {service.title}
                </motion.h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features list with animations */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.5 }}
                        className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${service.color}`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                {/* CTA with arrow animation */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`
                    flex items-center font-semibold cursor-pointer
                    text-transparent bg-gradient-to-r ${service.color} bg-clip-text
                    group-hover:text-white group-hover:bg-none
                    transition-all duration-300
                  `}
                >
                  <span>Learn More</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary relative overflow-hidden group"
          >
            <span className="relative z-10">Explore All Services</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
