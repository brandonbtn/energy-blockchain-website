'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Twitter, Github } from 'lucide-react'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamMembers = [
    {
      name: 'Brandon Wilkinson',
      role: 'Founder & CEO',
      bio: 'Visionary entrepreneur passionate about renewable energy and blockchain technology. Building the future of decentralized energy trading.',
      image: '/team/brandon-wilkinson.jpg',
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ]

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="text-gradient">Founder</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the mission to revolutionize renewable energy trading through blockchain technology.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group max-w-md"
            >
              <div className="bg-slate-800/50 rounded-2xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 hover:border-green-500/30">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-3xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-green-400 text-lg font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-base mb-6 leading-relaxed">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-green-400 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-green-400 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-green-400 transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team