'use client'

import { motion } from 'framer-motion'

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 }
      ]
    },
    {
      title: 'Mobile',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'Flutter', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Dart', level: 88 },
        { name: 'Swift', level: 75 },
        { name: 'Kotlin', level: 80 }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 88 },
        { name: 'Django', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'FastAPI', level: 82 }
      ]
    },
    {
      title: 'Database',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Firebase', level: 88 },
        { name: 'MySQL', level: 82 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'AWS', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Vercel', level: 92 }
      ]
    },
    {
      title: 'AI & ML',
      color: 'from-teal-500 to-blue-500',
      technologies: [
        { name: 'OpenAI API', level: 90 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Langchain', level: 85 },
        { name: 'Hugging Face', level: 80 },
        { name: 'Pinecone', level: 82 }
      ]
    }
  ]

  return (
    <section id="tech" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We use cutting-edge technologies to build robust, scalable, and modern solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}>
                {category.title}
              </div>
              
              <div className="space-y-4">
                {category.technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className="text-sm text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (index * 0.1) + (idx * 0.05) }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack