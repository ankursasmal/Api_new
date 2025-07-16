'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with AI-powered recommendations and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Cross-platform mobile app for fitness tracking with social features and AI workout recommendations.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Dart'],
      category: 'Mobile Development',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing for automated customer support.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      technologies: ['OpenAI', 'Langchain', 'Python', 'FastAPI'],
      category: 'AI Integration',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with virtual tours and advanced search capabilities.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Food Delivery App',
      description: 'Full-stack food delivery application with real-time tracking and payment integration.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Express.js', 'MongoDB', 'Socket.io'],
      category: 'Mobile Development',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with real-time data visualization and reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Redis'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Blockchain Wallet',
      description: 'Secure cryptocurrency wallet with multi-chain support and DeFi integration.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      technologies: ['Solidity', 'Web3.js', 'React', 'MetaMask'],
      category: 'Blockchain',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'IoT Dashboard',
      description: 'Real-time monitoring dashboard for IoT devices with data visualization.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      technologies: ['React', 'MQTT', 'InfluxDB', 'Grafana'],
      category: 'IoT',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AR Shopping App',
      description: 'Augmented reality shopping experience with virtual try-on features.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      technologies: ['Unity', 'ARCore', 'C#', 'Firebase'],
      category: 'AR/VR',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI Integration','Api Integration']
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAllProjects, setShowAllProjects] = useState(false)

  const filteredProjects = activeCategory === 'All' 
    ? projects.filter(project => !['Blockchain', 'IoT', 'AR/VR'].includes(project.category))
    : projects.filter(project => project.category === activeCategory)

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6)

  const handleViewAllProjects = () => {
    setShowAllProjects(true)
    setActiveCategory('All')
  }

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our latest projects and see how we transform ideas into digital solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-primary-500 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-primary-500 font-semibold cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={handleViewAllProjects}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
