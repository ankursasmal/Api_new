'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Bot, 
  Palette, 
  Server, 
  Cloud,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android using Flutter and React Native.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI ChatBot Integration',
      description: 'Intelligent chatbots powered by AI to enhance customer engagement and automate support.',
      features: ['Natural Language', 'Multi-Platform', '24/7 Support', 'Custom Training'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences across all devices.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Robust, scalable backend solutions using Node.js, Python, and modern database technologies.',
      features: ['API Development', 'Database Design', 'Authentication', 'Real-time Features'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions using AWS, Google Cloud, and Azure.',
      features: ['Auto Scaling', 'Load Balancing', 'Monitoring', 'Security'],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-primary-500 font-semibold group-hover:text-secondary-500 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services