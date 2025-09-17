'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Zap,
  Leaf,
  TrendingUp,
  Shield,
  Globe,
  Battery,
  Clock,
  DollarSign,
  Users,
  Lightbulb,
  Target,
  Award
} from 'lucide-react'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Zap,
      title: 'Proof of Energy Consensus',
      description: 'Revolutionary consensus mechanism that validates renewable energy production, ensuring only sustainable validators participate in network security.',
      gradient: 'from-yellow-500 to-orange-500',
      stats: '65,000+ TPS'
    },
    {
      icon: TrendingUp,
      title: 'Energy Trading DEX',
      description: 'Real-time peer-to-peer energy marketplace with automated smart contracts, enabling instant energy trading across global grid networks.',
      gradient: 'from-green-500 to-emerald-500',
      stats: '24/7 Trading'
    },
    {
      icon: Leaf,
      title: 'Carbon Credit Marketplace',
      description: 'Verified carbon offset trading platform with international standards compliance, featuring NFT-based credits and automated retirement.',
      gradient: 'from-green-600 to-green-400',
      stats: '1M+ Credits'
    },
    {
      icon: Shield,
      title: 'Byzantine Fault Tolerance',
      description: 'Enterprise-grade security with advanced slashing mechanisms, real-time validator monitoring, and energy-aware consensus protocols.',
      gradient: 'from-purple-500 to-indigo-500',
      stats: '99.9% Uptime'
    },
    {
      icon: Battery,
      title: 'Grid Balancing',
      description: 'Automated demand response system that optimizes energy distribution across regional grids, reducing waste and improving efficiency.',
      gradient: 'from-blue-500 to-cyan-500',
      stats: 'Real-time'
    },
    {
      icon: Globe,
      title: 'Cross-Chain Bridges',
      description: 'Seamless integration with Ethereum, Solana, and other major blockchains, enabling global energy markets and liquidity.',
      gradient: 'from-pink-500 to-rose-500',
      stats: '10+ Chains'
    },
    {
      icon: Clock,
      title: 'Proof of History',
      description: 'High-throughput transaction ordering using cryptographic timestamps, eliminating traditional block time limitations.',
      gradient: 'from-amber-500 to-yellow-500',
      stats: 'Sub-second'
    },
    {
      icon: DollarSign,
      title: 'DeFi Protocols',
      description: 'Comprehensive DeFi suite including energy lending, liquid staking, and derivatives trading for sustainable finance.',
      gradient: 'from-emerald-500 to-teal-500',
      stats: '$100M+ TVL'
    },
    {
      icon: Target,
      title: 'ESG Compliance',
      description: 'Built-in ESG reporting and compliance tools for corporations, with automated carbon accounting and sustainability metrics.',
      gradient: 'from-violet-500 to-purple-500',
      stats: 'Automated'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Lightbulb className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Revolutionary Features</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powering the{' '}
            <span className="text-gradient">Clean Energy</span>{' '}
            Revolution
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our blockchain combines cutting-edge technology with renewable energy validation
            to create the world's most sustainable and efficient energy trading platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute top-0 right-0 px-3 py-1 bg-slate-700/80 rounded-lg text-xs text-green-400 font-medium">
                      {feature.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 inline-flex items-center space-x-2">
            <span>Explore Technology</span>
            <Users className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features