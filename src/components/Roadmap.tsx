'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Clock, Target } from 'lucide-react'

const Roadmap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const roadmapItems = [
    {
      phase: 'Q1 2024',
      title: 'Testnet Launch',
      status: 'completed',
      items: ['Proof of Energy consensus', 'Energy DEX deployment', 'Validator recruitment']
    },
    {
      phase: 'Q2 2024',
      title: 'Mainnet Beta',
      status: 'in-progress',
      items: ['Carbon marketplace', 'Cross-chain bridges', 'Mobile SDK']
    },
    {
      phase: 'Q3 2024',
      title: 'Global Expansion',
      status: 'upcoming',
      items: ['50+ country support', 'Enterprise partnerships', 'Governance token']
    },
    {
      phase: 'Q4 2024',
      title: 'DeFi Integration',
      status: 'upcoming',
      items: ['Liquid staking', 'Energy derivatives', 'Lending protocols']
    }
  ]

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="absolute inset-0 bg-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Development <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey to building the world's most advanced renewable energy blockchain platform.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 mr-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'in-progress' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`}>
                  {item.status === 'completed' ? <CheckCircle className="h-6 w-6 text-white" /> :
                   item.status === 'in-progress' ? <Clock className="h-6 w-6 text-white" /> :
                   <Target className="h-6 w-6 text-white" />}
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <div className="text-sm text-green-400 font-medium mb-2">{item.phase}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((listItem, itemIndex) => (
                      <li key={itemIndex} className="text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap