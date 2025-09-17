'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Leaf, Users, Globe } from 'lucide-react'

const Ecosystem = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="ecosystem" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Global Energy <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive platform connecting energy producers, traders, and consumers
            in a decentralized marketplace powered by blockchain technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            { icon: TrendingUp, title: 'Energy Trading', desc: 'Real-time energy marketplace' },
            { icon: Leaf, title: 'Carbon Credits', desc: 'Verified offset trading' },
            { icon: Users, title: 'Validator Network', desc: 'Renewable energy validators' },
            { icon: Globe, title: 'Global Reach', desc: '50+ countries supported' }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/70 transition-all duration-300"
              >
                <Icon className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem