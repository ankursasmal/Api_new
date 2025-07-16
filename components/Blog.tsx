'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react'
import { useState } from 'react'

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: 'Increase Conversions by 50%: How Our Web Development Services Deliver ROI',
      excerpt: 'Discover proven strategies and techniques that help businesses boost their conversion rates through optimized web development.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'Web Development',
      author: 'Sarah Johnson',
      date: 'MAR 16, 2024',
      readTime: '5 min read',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 2,
      title: '5 Website Design Mistakes That Cost You Conversions (and How to Fix Them)',
      excerpt: 'Learn about common design pitfalls that hurt your conversion rates and discover actionable solutions to improve user experience.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop',
      category: 'UI/UX Design',
      author: 'Mike Chen',
      date: 'FEB 11, 2024',
      readTime: '7 min read',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      id: 3,
      title: 'The Future of AI in Mobile App Development: Trends for 2024',
      excerpt: 'Explore how artificial intelligence is revolutionizing mobile app development and what trends to watch this year.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
      category: 'AI Integration',
      author: 'Alex Rivera',
      date: 'JAN 28, 2024',
      readTime: '6 min read',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 4,
      title: 'Building Scalable React Applications: Best Practices and Architecture',
      excerpt: 'Master the art of creating maintainable and scalable React applications with proven architectural patterns.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      category: 'React Development',
      author: 'Emma Davis',
      date: 'JAN 15, 2024',
      readTime: '8 min read',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    }
  ]

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
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
            <span className="text-3xl">📝</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-500 font-semibold mb-4 tracking-wider uppercase"
          >
            Our Latest Blog
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            News from around the world <br />
            <span className="gradient-text">selected by us.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in web development, 
            mobile apps, and technology innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onHoverStart={() => setHoveredPost(index)}
              onHoverEnd={() => setHoveredPost(null)}
              className={`
                relative group cursor-pointer
                bg-white/90 dark:bg-gray-900/90 backdrop-blur-md
                border-2 border-gray-200/30 dark:border-gray-700/30
                hover:border-primary-500/30
                rounded-2xl overflow-hidden
                shadow-xl hover:shadow-2xl
                transition-all duration-500 ease-out
                ${post.bgColor}
              `}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={hoveredPost === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Image section */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-semibold shadow-lg`}
                >
                  <Tag className="w-3 h-3 inline mr-2" />
                  {post.category}
                </motion.div>
              </div>

              {/* Content section */}
              <div className="p-8 relative z-10">
                {/* Meta information */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  {post.title}
                </motion.h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{post.author}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Author</p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`
                      flex items-center font-semibold cursor-pointer
                      text-transparent bg-gradient-to-r ${post.gradient} bg-clip-text
                      group-hover:text-white group-hover:bg-none
                      transition-all duration-300
                    `}
                  >
                    <span>Read More</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Corner decoration */}
              <motion.div
                className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${post.gradient} rounded-full opacity-20 group-hover:opacity-40`}
                animate={hoveredPost === index ? { 
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary relative overflow-hidden group px-8 py-4 text-lg font-bold"
          >
            <span className="relative z-10">View All Articles</span>
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

export default Blog