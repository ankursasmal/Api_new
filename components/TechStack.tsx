'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const TechStack = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const techCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      glowColor: 'shadow-blue-500/20',
      technologies: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 97, icon: '🔺' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Vue.js', level: 85, icon: '💚' }
      ]
    },
    {
      title: 'Mobile',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/20',
      technologies: [
        { name: 'Flutter', level: 99, icon: '🦋' },
        { name: 'React Native', level: 93, icon: '📱' },
        { name: 'Dart', level: 94, icon: '🎯' },
        { name: 'Swift', level: 75, icon: '🍎' },
        { name: 'Kotlin', level: 80, icon: '🤖' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      glowColor: 'shadow-green-500/20',
      technologies: [
        { name: 'Node.js', level: 98, icon: '🟢' },
        { name: 'Python', level: 94, icon: '🐍' },
        { name: 'Django', level: 95, icon: '🎸' },
        { name: 'Express.js', level: 98, icon: '🚀' },
        { name: 'FastAPI', level: 85, icon: '⚡' }
      ]
    },
    {
      title: 'Database',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      glowColor: 'shadow-orange-500/20',
      technologies: [
        { name: 'MongoDB', level: 98, icon: '🍃' },
        { name: 'PostgreSQL', level: 93, icon: '🐘' },
        { name: 'Redis', level: 80, icon: '🔴' },
        { name: 'Firebase', level: 92, icon: '🔥' },
        { name: 'MySQL', level: 95, icon: '🐬' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      glowColor: 'shadow-indigo-500/20',
      technologies: [
        { name: 'AWS', level: 85, icon: '☁️' },
        { name: 'Google Cloud', level: 80, icon: '🌤️' },
        { name: 'Docker', level: 88, icon: '🐳' },
        { name: 'Kubernetes', level: 75, icon: '⚙️' },
        { name: 'Vercel', level: 92, icon: '▲' }
      ]
    },
    {
      title: 'AI & ML',
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      glowColor: 'shadow-teal-500/20',
      technologies: [
        { name: 'OpenAI API', level: 90, icon: '🤖' },
        { name: 'TensorFlow', level: 75, icon: '🧠' },
        { name: 'Langchain', level: 85, icon: '🔗' },
        { name: 'Hugging Face', level: 80, icon: '🤗' },
        { name: 'Pinecone', level: 82, icon: '🌲' }
      ]
    }
  ]

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg"
          >
            <span className="text-3xl">⚡</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We use cutting-edge technologies to build robust, scalable, and modern solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
              className={`
                relative group cursor-pointer
                bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
                border-2 ${category.borderColor} hover:border-opacity-60
                rounded-2xl p-8 overflow-hidden
                shadow-xl hover:${category.glowColor} hover:shadow-2xl
                transition-all duration-500 ease-out
                ${category.bgColor}
              `}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={hoveredCategory === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-60`}
                    animate={hoveredCategory === index ? {
                      x: [0, 100, 0],
                      y: [0, -50, 0],
                      scale: [0, 1, 0]
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`
                    }}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Category header */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white font-bold mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <motion.span
                    animate={hoveredCategory === index ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {category.title}
                  </motion.span>
                </motion.div>
                
                {/* Technologies list */}
                <div className="space-y-5">
                  {category.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (index * 0.1) + (idx * 0.05),
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="group/tech"
                    >
                      {/* Tech name and percentage */}
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-3">
                          <motion.span 
                            className="text-2xl"
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {tech.icon}
                          </motion.span>
                          <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover/tech:text-gray-900 dark:group-hover/tech:text-white transition-colors">
                            {tech.name}
                          </span>
                        </div>
                        <motion.span 
                          className={`text-sm font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}
                          animate={hoveredCategory === index ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          whileHover={{ scale: 1.15 }}
                        >
                          {tech.level}%
                        </motion.span>
                      </div>

                      {/* Progress bar */}
                      {/* <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0, x: -100 }}
                            whileInView={{ width: `${tech.level}%`, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.5, 
                              delay: (index * 0.1) + (idx * 0.1),
                              ease: "easeOut"
                            }}
                            whileHover={{ 
                              boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`,
                              transition: { duration: 0.3 }
                            }}
                            className={`h-0 rounded-full relative overflow-hidden bg-gradient-to-r ${category.color}`}
                          > */}
                            {/* Shimmer effect */}
                            {/* <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={hoveredCategory === index ? { x: [-100, 200] } : {}}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                delay: idx * 0.2
                              }}
                            /> */}
                            
                            {/* Percentage text inside progress bar */}
                            {/* <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-white drop-shadow-sm">
                                {tech.level}%
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      </div> */}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner decoration */}
              <motion.div
                className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${category.color} rounded-full opacity-20 group-hover:opacity-40`}
                animate={hoveredCategory === index ? { 
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary relative overflow-hidden group px-8 py-4 text-lg font-bold"
          >
            <span className="relative z-10">Explore Our Capabilities</span>
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

export default TechStack
