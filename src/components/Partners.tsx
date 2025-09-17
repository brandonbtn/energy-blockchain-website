'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const partners = [
    { name: 'Tesla Energy', category: 'Technology Partner' },
    { name: 'SolarCity', category: 'Energy Producer' },
    { name: 'Ethereum Foundation', category: 'Blockchain Partner' },
    { name: 'Goldman Sachs', category: 'Financial Partner' },
    { name: 'United Nations', category: 'Sustainability Partner' },
    { name: 'MIT Energy Initiative', category: 'Research Partner' }
  ]

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-slate-800" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with leading organizations to build the future of sustainable energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-700/70 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">
                  {partner.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
              <p className="text-green-400 text-sm">{partner.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners