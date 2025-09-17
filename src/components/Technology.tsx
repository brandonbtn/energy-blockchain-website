'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Clock, Shield, Layers } from 'lucide-react'

const Technology = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="technology" className="py-24 relative">
      <div className="absolute inset-0 bg-slate-800" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our tri-consensus system combines Proof of Energy, Proof of History,
            and Byzantine Fault Tolerance for unmatched performance and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { icon: Zap, title: 'Proof of Energy', desc: 'Renewable energy validation' },
            { icon: Clock, title: 'Proof of History', desc: '65,000+ TPS throughput' },
            { icon: Shield, title: 'Byzantine Fault Tolerance', desc: 'Enterprise security' },
            { icon: Layers, title: 'Modular Architecture', desc: 'Scalable design' }
          ].map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 rounded-2xl p-6 text-center"
              >
                <Icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Technology