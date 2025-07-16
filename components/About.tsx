'use client'

import { motion } from 'framer-motion'
import { Users, Award, Clock, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '50+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8" />, number: '30+', label: 'Happy Clients' },
    { icon: <Clock className="w-8 h-8" />, number: '5+', label: 'Years Experience' },
    { icon: <Target className="w-8 h-8" />, number: '99%', label: 'Success Rate' }
  ]

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      skills: ['React', 'Node.js', 'AWS']
    },
    {
      name: 'Sarah Chen',
      role: 'Mobile Developer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      skills: ['Flutter', 'React Native', 'iOS']
    },
    {
      name: 'Mike Rodriguez',
      role: 'AI/ML Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      skills: ['Python', 'TensorFlow', 'OpenAI']
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      skills: ['Figma', 'Adobe XD', 'Prototyping']
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">TechSolutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and innovators dedicated to creating 
            exceptional digital experiences that drive business growth.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-primary-500 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2019, TechSolutions began as a small team of passionate developers 
              who believed in the power of technology to transform businesses. Today, we've 
              grown into a full-service digital agency that helps companies of all sizes 
              achieve their digital goals.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our mission is to bridge the gap between innovative technology and practical 
              business solutions. We don't just build software; we create digital experiences 
              that engage users and drive results.
            </p>
            <div className="space-y-4">
              {[
                'Client-focused approach',
                'Cutting-edge technology',
                'Agile development process',
                'Continuous support & maintenance'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
              <p className="text-gray-300 leading-relaxed">
                We combine technical expertise with creative thinking to deliver solutions 
                that not only meet your requirements but exceed your expectations. Our 
                collaborative approach ensures you're involved every step of the way.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-6">Meet Our Team</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience in various 
            technologies and industries to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 text-center group"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <p className="text-primary-500 mb-4">{member.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About