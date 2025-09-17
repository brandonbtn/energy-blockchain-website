'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Zap,
  Users,
  Shield,
  TrendingUp,
  Activity,
  Building2,
  Coins,
  ArrowUpRight,
  Sparkles,
  Wallet,
  BarChart3
} from 'lucide-react'

const TokenEcosystem = () => {
  const ecosystemComponents = [
    {
      title: 'Soltolaria Platform',
      description: 'Decentralized energy marketplace powered by ENERGY tokens',
      icon: Zap,
      link: 'https://soltolaria.com',
      stats: {
        users: '250,000+',
        transactions: '1M+',
        volume: '$500M'
      },
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'DeFi Integration',
      description: 'Yield farming, liquidity pools, and lending protocols',
      icon: Coins,
      link: '#',
      stats: {
        tvl: '$125M',
        apy: '15-25%',
        pools: '12'
      },
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'DAO Governance',
      description: 'Community-driven decision making and treasury management',
      icon: Users,
      link: '#',
      stats: {
        proposals: '150+',
        voters: '10,000+',
        treasury: '$50M'
      },
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Enterprise Partners',
      description: 'Major energy companies integrating ENERGY tokens',
      icon: Building2,
      link: '#',
      stats: {
        partners: '25+',
        countries: '15',
        capacity: '500 MW'
      },
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  const useCases = [
    {
      category: 'Energy Trading',
      items: [
        'P2P renewable energy trading',
        'Grid balancing rewards',
        'Carbon credit marketplace',
        'Energy futures contracts'
      ]
    },
    {
      category: 'Financial Services',
      items: [
        'Staking for passive income',
        'Collateral for loans',
        'Cross-border payments',
        'Insurance products'
      ]
    },
    {
      category: 'Platform Features',
      items: [
        'Premium analytics access',
        'Advanced trading tools',
        'API rate limit increases',
        'Custom smart contracts'
      ]
    },
    {
      category: 'Community Benefits',
      items: [
        'Governance voting',
        'Proposal submissions',
        'Revenue sharing',
        'Exclusive events'
      ]
    }
  ]

  const roadmap = [
    {
      phase: 'Q1 2025',
      title: 'Platform Launch',
      items: ['Token generation event', 'Soltolaria mainnet', 'Initial DEX listings'],
      status: 'completed'
    },
    {
      phase: 'Q2 2025',
      title: 'DeFi Expansion',
      items: ['Yield farming launch', 'Major CEX listings', 'Mobile wallet app'],
      status: 'in-progress'
    },
    {
      phase: 'Q3 2025',
      title: 'Enterprise Integration',
      items: ['B2B energy trading', 'IoT device integration', 'Cross-chain bridges'],
      status: 'upcoming'
    },
    {
      phase: 'Q4 2025',
      title: 'Global Scaling',
      items: ['International expansion', 'Regulatory compliance', '1M+ users target'],
      status: 'upcoming'
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/5 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Globe className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Token Ecosystem</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The ENERGY <span className="text-gradient">Ecosystem</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive network of platforms, partners, and protocols powered by ENERGY tokens
          </p>
        </motion.div>

        {/* Ecosystem Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {ecosystemComponents.map((component, index) => {
            const Icon = component.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={component.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${component.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{component.title}</h3>
                    <p className="text-gray-400 mb-6">{component.description}</p>

                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(component.stats).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-2xl font-bold text-green-400">{value}</p>
                          <p className="text-gray-500 text-xs capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Use Cases Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Real-World <span className="text-gradient">Use Cases</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-xl p-6"
              >
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Activity className="h-5 w-5 text-green-400 mr-2" />
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 text-sm flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Development <span className="text-gradient">Roadmap</span>
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 to-emerald-600" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {roadmap.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2">
                      <div className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-green-400 font-bold">{phase.phase}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            phase.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {phase.status}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3">{phase.title}</h4>
                        <ul className="space-y-1">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-400 text-sm">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12">
            <Wallet className="h-12 w-12 text-purple-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Available on Major Platforms
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Trade ENERGY tokens on leading exchanges and DeFi protocols
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Binance', 'Coinbase', 'Raydium', 'Serum', 'Jupiter'].map((exchange) => (
                <div key={exchange} className="px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl">
                  <span className="text-white font-semibold">{exchange}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
              View All Exchanges
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TokenEcosystem