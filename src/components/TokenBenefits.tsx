'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  BarChart3,
  Lock,
  Gift,
  Rocket,
  Target,
  DollarSign,
  Sparkles
} from 'lucide-react'

const TokenBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'High Growth Potential',
      description: 'Early-stage investment in the future of renewable energy trading',
      stats: '500% projected growth',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: DollarSign,
      title: 'Multiple Revenue Streams',
      description: 'Earn from staking, liquidity provision, and platform participation',
      stats: 'Up to 25% APY',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Deflationary Mechanism',
      description: 'Token burns from platform fees create scarcity over time',
      stats: '2% monthly burn rate',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Rocket,
      title: 'Early Adopter Rewards',
      description: 'Bonus rewards and airdrops for early platform participants',
      stats: '10M tokens reserved',
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  const holdingTiers = [
    {
      tier: 'Bronze',
      requirement: '1,000+ ENERGY',
      benefits: ['5% fee discount', 'Basic voting rights', 'Priority support'],
      color: 'from-orange-600 to-orange-700'
    },
    {
      tier: 'Silver',
      requirement: '10,000+ ENERGY',
      benefits: ['15% fee discount', 'Enhanced voting power', 'Beta features access', 'Monthly airdrops'],
      color: 'from-gray-400 to-gray-500'
    },
    {
      tier: 'Gold',
      requirement: '50,000+ ENERGY',
      benefits: ['30% fee discount', 'Governance proposals', 'VIP events access', 'Weekly rewards'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      tier: 'Platinum',
      requirement: '100,000+ ENERGY',
      benefits: ['50% fee discount', 'Direct team access', 'Revenue sharing', 'Exclusive NFTs', 'Strategic input'],
      color: 'from-cyan-400 to-blue-500'
    }
  ]

  const ecosystemPartners = [
    { name: 'Solana', logo: '⚡', description: 'Built on Solana for speed' },
    { name: 'Serum DEX', logo: '📊', description: 'Integrated liquidity' },
    { name: 'Chainlink', logo: '🔗', description: 'Oracle price feeds' },
    { name: 'MakerDAO', logo: '🏦', description: 'Stablecoin integration' }
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/5 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Token Benefits</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Hold <span className="text-gradient">ENERGY</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of holders benefiting from the growing Soltolaria ecosystem
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <span className="text-green-400 font-bold text-lg">{benefit.stats}</span>
                  <BarChart3 className="h-5 w-5 text-gray-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Holding Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Holder <span className="text-gradient">Tiers & Rewards</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {holdingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 h-full hover:border-green-500/30 transition-all duration-300">
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r ${tier.color} rounded-full`}>
                    <span className="text-white font-bold text-sm">{tier.tier}</span>
                  </div>

                  <div className="mt-6">
                    <Award className="h-8 w-8 text-yellow-400 mb-4 mx-auto" />
                    <p className="text-green-400 font-semibold text-center mb-4">{tier.requirement}</p>

                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ecosystem Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Ecosystem <span className="text-gradient">Partners</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {ecosystemPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-xl p-6 text-center hover:border-green-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h4 className="text-white font-semibold mb-1">{partner.name}</h4>
                <p className="text-gray-500 text-xs">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-12">
            <div className="text-center">
              <Target className="h-12 w-12 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Calculate Your Potential Returns
              </h3>
              <p className="text-gray-400 mb-8">
                With staking rewards, fee discounts, and token appreciation
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-4">
                  <p className="text-gray-400 text-sm mb-2">Investment</p>
                  <p className="text-2xl font-bold text-white">$10,000</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-4">
                  <p className="text-gray-400 text-sm mb-2">Est. 1 Year Return</p>
                  <p className="text-2xl font-bold text-green-400">$18,500</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-4">
                  <p className="text-gray-400 text-sm mb-2">ROI</p>
                  <p className="text-2xl font-bold text-yellow-400">85%</p>
                </div>
              </div>

              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105">
                Start Earning Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TokenBenefits