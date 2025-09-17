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
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Tesla energy engineer with 15+ years in renewable energy systems',
      image: '/team/sarah-chen.jpg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Ethereum core developer, blockchain architect with 10+ years experience',
      image: '/team/marcus-rodriguez.jpg',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Dr. Yuki Tanaka',
      role: 'Head of Research',
      bio: 'Former MIT researcher specializing in consensus mechanisms and cryptography',
      image: '/team/yuki-tanaka.jpg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Elena Kowalski',
      role: 'VP of Business Development',
      bio: 'Energy industry veteran with partnerships across 50+ countries',
      image: '/team/elena-kowalski.jpg',
      social: { linkedin: '#', twitter: '#' }
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
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class experts in blockchain technology, renewable energy, and sustainable finance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 rounded-2xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-green-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

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