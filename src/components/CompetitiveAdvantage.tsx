'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Zap,
  Trophy,
  Rocket,
  Target,
  BarChart3,
  Users,
  Globe,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react'

const CompetitiveAdvantage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const comparisons = [
    {
      feature: 'Transaction Speed',
      energy: '65,000+ TPS',
      bitcoin: '7 TPS',
      ethereum: '15 TPS',
      solana: '50,000 TPS'
    },
    {
      feature: 'Energy Efficiency',
      energy: '99.9% less',
      bitcoin: 'Baseline',
      ethereum: '99% less',
      solana: '99.5% less'
    },
    {
      feature: 'Transaction Cost',
      energy: '$0.0001',
      bitcoin: '$20+',
      ethereum: '$5-50',
      solana: '$0.00025'
    },
    {
      feature: 'Carbon Neutral',
      energy: '✅ Required',
      bitcoin: '❌ No',
      ethereum: '❌ No',
      solana: '❌ No'
    },
    {
      feature: 'Energy Trading',
      energy: '✅ Native',
      bitcoin: '❌ No',
      ethereum: '⚠️ Limited',
      solana: '⚠️ Limited'
    },
    {
      feature: 'Consensus',
      energy: 'PoE + PoH + BFT',
      bitcoin: 'PoW',
      ethereum: 'PoS',
      solana: 'PoH + PoS'
    }
  ]

  const advantages = [
    {
      icon: Zap,
      title: '65,000+ TPS',
      description: 'Fastest blockchain for energy trading',
      color: 'yellow'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: '50+ countries connected',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Triple Consensus',
      description: 'PoE + PoH + BFT security',
      color: 'purple'
    },
    {
      icon: Users,
      title: '500+ Validators',
      description: 'All renewable energy producers',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Sub-Second Finality',
      description: 'Instant transaction confirmation',
      color: 'orange'
    },
    {
      icon: DollarSign,
      title: 'Lowest Fees',
      description: '$0.0001 per transaction',
      color: 'emerald'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <Trophy className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Industry Leader</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-gradient">ENERGY Blockchain</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The only blockchain built specifically for renewable energy trading,
            outperforming traditional blockchains in every metric that matters.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto mb-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 min-w-[700px]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-green-400" />
              Blockchain Comparison
            </h3>

            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-3 px-4">
                    <span className="text-green-400 font-bold">ENERGY</span>
                  </th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Bitcoin</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Ethereum</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Solana</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                  >
                    <td className="py-3 px-4 text-white font-medium">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-green-400 font-semibold bg-green-500/10 px-3 py-1 rounded-lg inline-block">
                        {row.energy}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4 text-gray-400">{row.bitcoin}</td>
                    <td className="text-center py-3 px-4 text-gray-400">{row.ethereum}</td>
                    <td className="text-center py-3 px-4 text-gray-400">{row.solana}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${advantage.color}-500/20 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 text-${advantage.color}-400`} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{advantage.title}</h4>
                <p className="text-gray-400 text-sm">{advantage.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-12 border border-green-500/20"
        >
          <Rocket className="h-12 w-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Join the Energy Revolution
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Be part of the world's fastest-growing renewable energy blockchain.
            Start trading, earning, and contributing to a sustainable future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Start Building
            </button>
            <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-full font-semibold transition-all duration-300">
              View Benchmarks
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompetitiveAdvantage