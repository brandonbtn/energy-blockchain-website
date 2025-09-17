'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  Target,
  TrendingUp,
  Globe,
  Building2,
  Users,
  Zap,
  Shield,
  Award,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react'

const TokenRoadmap = () => {
  const milestones = [
    {
      quarter: 'Q4 2024',
      title: 'Foundation',
      status: 'completed',
      icon: Rocket,
      color: 'green',
      achievements: [
        'ENERGY token smart contract deployment',
        'Security audit by CertiK',
        'Soltolaria platform integration',
        'Initial community building'
      ],
      metrics: {
        holders: '5,000+',
        mcap: '$10M',
        transactions: '50K+'
      }
    },
    {
      quarter: 'Q1 2025',
      title: 'Platform Launch',
      status: 'completed',
      icon: Zap,
      color: 'green',
      achievements: [
        'Soltolaria mainnet launch',
        'Token staking program live',
        'First DEX listings (Raydium, Orca)',
        'Mobile wallet release'
      ],
      metrics: {
        holders: '25,000+',
        mcap: '$50M',
        transactions: '500K+'
      }
    },
    {
      quarter: 'Q2 2025',
      title: 'DeFi Expansion',
      status: 'in-progress',
      icon: TrendingUp,
      color: 'yellow',
      achievements: [
        'Major CEX listings (Binance, Coinbase)',
        'Yield farming pools launch',
        'Cross-chain bridge to Ethereum',
        'Governance DAO activation'
      ],
      metrics: {
        holders: '50,000+',
        mcap: '$125M',
        transactions: '1M+'
      }
    },
    {
      quarter: 'Q3 2025',
      title: 'Enterprise Integration',
      status: 'upcoming',
      icon: Building2,
      color: 'gray',
      achievements: [
        'B2B energy trading features',
        'IoT device integration',
        'Carbon credit marketplace',
        'Institutional custody solutions'
      ],
      metrics: {
        holders: '100,000+',
        mcap: '$250M',
        transactions: '2M+'
      }
    },
    {
      quarter: 'Q4 2025',
      title: 'Global Expansion',
      status: 'upcoming',
      icon: Globe,
      color: 'gray',
      achievements: [
        'Multi-region compliance',
        'Strategic energy partnerships',
        'Advanced DeFi products',
        'NFT energy certificates'
      ],
      metrics: {
        holders: '250,000+',
        mcap: '$500M',
        transactions: '5M+'
      }
    },
    {
      quarter: 'Q1 2026',
      title: 'Mass Adoption',
      status: 'upcoming',
      icon: Users,
      color: 'gray',
      achievements: [
        '1M+ active users milestone',
        'Global energy network',
        'AI-powered trading',
        'Metaverse integration'
      ],
      metrics: {
        holders: '500,000+',
        mcap: '$1B',
        transactions: '10M+'
      }
    }
  ]

  const upcomingFeatures = [
    {
      title: 'Layer 2 Scaling',
      description: 'Ultra-fast transactions with near-zero fees',
      eta: 'Q3 2025'
    },
    {
      title: 'Energy NFTs',
      description: 'Tokenized renewable energy certificates',
      eta: 'Q4 2025'
    },
    {
      title: 'AI Trading Bot',
      description: 'Automated energy trading strategies',
      eta: 'Q1 2026'
    },
    {
      title: 'Mobile Mining',
      description: 'Earn ENERGY tokens from your phone',
      eta: 'Q2 2026'
    }
  ]

  const partnerships = [
    { name: 'Tesla Energy', type: 'Strategic', status: 'In Discussion' },
    { name: 'Solana Foundation', type: 'Technical', status: 'Active' },
    { name: 'Chainlink', type: 'Oracle', status: 'Active' },
    { name: 'Circle (USDC)', type: 'Payment', status: 'Active' }
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/5 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
            <Target className="h-4 w-4 text-indigo-400 mr-2" />
            <span className="text-indigo-400 text-sm font-medium">Development Roadmap</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Journey to <span className="text-gradient">$1 Billion</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Our strategic roadmap to becoming the leading energy token in the blockchain ecosystem
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 via-yellow-500 to-gray-500" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="w-full md:w-1/2 pl-20 md:pl-0">
                  <div className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    {/* Quarter & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-green-400 font-bold">{milestone.quarter}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {milestone.status.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {milestone.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle className={`h-4 w-4 mt-0.5 mr-2 flex-shrink-0 ${
                            milestone.status === 'completed' ? 'text-green-400' :
                            milestone.status === 'in-progress' ? 'text-yellow-400' :
                            'text-gray-500'
                          }`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/50">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Holders</p>
                        <p className="text-white font-semibold">{milestone.metrics.holders}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Market Cap</p>
                        <p className="text-white font-semibold">{milestone.metrics.mcap}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Transactions</p>
                        <p className="text-white font-semibold">{milestone.metrics.transactions}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center ${
                  milestone.status === 'completed' ? 'bg-green-500' :
                  milestone.status === 'in-progress' ? 'bg-yellow-500 animate-pulse' :
                  'bg-gray-600'
                } shadow-lg`}>
                  <milestone.icon className="h-8 w-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Upcoming <span className="text-gradient">Features</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <span className="text-xs text-gray-500">{feature.eta}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-12"
        >
          <div className="text-center mb-8">
            <Award className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Strategic Partnerships
            </h3>
            <p className="text-gray-400">Building the future with industry leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-4 text-center">
                <h4 className="text-white font-semibold mb-2">{partner.name}</h4>
                <p className="text-gray-500 text-xs mb-2">{partner.type}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  partner.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {partner.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TokenRoadmap