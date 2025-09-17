'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Coins,
  Zap,
  Vote,
  TrendingUp,
  Shield,
  Users,
  Lock,
  Gift,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const TokenUtilities = () => {
  const utilities = [
    {
      icon: Zap,
      title: 'Transaction Fuel',
      description: 'All energy trades on Soltolaria require ENERGY tokens for transaction fees',
      benefits: ['Lower fees for token holders', 'Priority transaction processing', 'Batch trading capabilities'],
      color: 'yellow'
    },
    {
      icon: Lock,
      title: 'Staking Rewards',
      description: 'Stake ENERGY tokens to earn passive income and platform rewards',
      benefits: ['Up to 15% APY', 'Compound earnings', 'Flexible lock periods'],
      color: 'green'
    },
    {
      icon: Vote,
      title: 'Governance Rights',
      description: 'Vote on platform upgrades, fee structures, and strategic decisions',
      benefits: ['1 token = 1 vote', 'Proposal submission rights', 'Treasury management'],
      color: 'blue'
    },
    {
      icon: Gift,
      title: 'Fee Discounts',
      description: 'Enjoy reduced platform fees based on your ENERGY token holdings',
      benefits: ['Up to 50% fee reduction', 'Tiered discount levels', 'VIP trader status'],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Liquidity Provision',
      description: 'Provide liquidity to energy trading pools and earn rewards',
      benefits: ['Dual token rewards', 'Impermanent loss protection', 'Auto-compounding'],
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'ENERGY holders get priority access to platform insurance pools',
      benefits: ['Smart contract coverage', 'Trading loss protection', 'Emergency fund access'],
      color: 'red'
    }
  ]

  const tokenomics = {
    totalSupply: '1,000,000,000',
    distribution: [
      { category: 'Public Sale', percentage: 30, amount: '300,000,000', color: 'from-green-500 to-emerald-600' },
      { category: 'Platform Rewards', percentage: 25, amount: '250,000,000', color: 'from-blue-500 to-cyan-600' },
      { category: 'Team & Advisors', percentage: 15, amount: '150,000,000', color: 'from-purple-500 to-pink-600' },
      { category: 'Ecosystem Fund', percentage: 15, amount: '150,000,000', color: 'from-orange-500 to-red-600' },
      { category: 'Liquidity Pool', percentage: 10, amount: '100,000,000', color: 'from-yellow-500 to-orange-600' },
      { category: 'Reserve', percentage: 5, amount: '50,000,000', color: 'from-gray-500 to-gray-600' }
    ]
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-green-900/5 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Coins className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Token Utilities</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful <span className="text-gradient">Use Cases</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            ENERGY tokens unlock the full potential of the Soltolaria platform with exclusive benefits and features
          </p>
        </motion.div>

        {/* Utilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {utilities.map((utility, index) => {
            const Icon = utility.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-${utility.color}-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-7 w-7 text-${utility.color}-400`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{utility.title}</h3>
                <p className="text-gray-400 mb-4">{utility.description}</p>

                <ul className="space-y-2">
                  {utility.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Tokenomics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Token <span className="text-gradient">Distribution</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Distribution Chart */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">Total Supply: {tokenomics.totalSupply} ENERGY</h4>

              <div className="space-y-4">
                {tokenomics.distribution.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">{item.category}</span>
                      <span className="text-white font-semibold">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{item.amount} tokens</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vesting Schedule */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">Vesting Schedule</h4>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300">Public Sale</span>
                    <span className="text-green-400 font-medium">No Vesting</span>
                  </div>
                  <p className="text-gray-500 text-sm">Immediately available for trading</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300">Team & Advisors</span>
                    <span className="text-yellow-400 font-medium">24 Months</span>
                  </div>
                  <p className="text-gray-500 text-sm">6-month cliff, then linear vesting</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300">Platform Rewards</span>
                    <span className="text-blue-400 font-medium">48 Months</span>
                  </div>
                  <p className="text-gray-500 text-sm">Released based on platform milestones</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300">Ecosystem Fund</span>
                    <span className="text-purple-400 font-medium">36 Months</span>
                  </div>
                  <p className="text-gray-500 text-sm">Quarterly releases for partnerships</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Anti-Dump Protection</p>
                    <p className="text-gray-400 text-sm">
                      Smart vesting ensures sustainable token economics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join the Energy Revolution?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get ENERGY tokens now and start benefiting from the future of renewable energy trading
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://soltolaria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Buy ENERGY Tokens
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
              <button className="px-8 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700">
                View on Solscan
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TokenUtilities