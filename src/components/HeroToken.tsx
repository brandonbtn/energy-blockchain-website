'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Globe,
  Users,
  Activity,
  Coins,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const HeroToken = () => {
  const { t } = useTranslation()
  const tokenMetrics = [
    { label: 'Total Supply', value: '1B', suffix: ' ENERGY' },
    { label: 'Current Price', value: '$0.125', prefix: '' },
    { label: 'Market Cap', value: '$125M', prefix: '' },
    { label: 'Holders', value: '50,000+', suffix: '' }
  ]

  const features = [
    'Powers all Soltolaria transactions',
    'Stake for platform rewards',
    'Governance voting rights',
    'Fee discounts for traders'
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900" />

        {/* Animated Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full backdrop-blur-xl">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-green-400 font-medium">{t('hero.subtitle')}</span>
              <Star className="h-4 w-4 text-yellow-400 ml-2" />
            </div>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                ENERGY
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-light">
              {t('hero.title')}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12"
          >
            ENERGY is the native utility token of Soltolaria&apos;s revolutionary decentralized energy marketplace.
            Trade renewable energy, earn rewards, and participate in the future of sustainable power distribution.
          </motion.p>

          {/* Live Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {tokenMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 text-center hover:border-green-500/30 transition-all duration-300"
              >
                <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {metric.prefix}{metric.value}{metric.suffix}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-lg"
              >
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="https://soltolaria.com" target="_blank">
              <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 flex items-center shadow-xl hover:shadow-green-500/25">
                <Globe className="h-5 w-5 mr-2" />
                Visit Soltolaria Platform
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/features">
              <button className="px-8 py-4 bg-slate-800/80 backdrop-blur-xl text-white rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300 border border-slate-700 hover:border-green-500/50 flex items-center">
                <Coins className="h-5 w-5 mr-2" />
                Token Economics
              </button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-8 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Audited Smart Contract</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-400" />
                <span>50,000+ Holders</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-green-400" />
                <span>Live on Solana</span>
              </div>
            </div>
          </motion.div>

          {/* Live Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-400 text-sm">Network Status</span>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div>
                    <span className="text-gray-400">24h Volume:</span>
                    <span className="text-green-400 ml-2 font-semibold">$2.4M</span>
                  </div>
                  <div>
                    <span className="text-gray-400">24h Change:</span>
                    <span className="text-green-400 ml-2 font-semibold">+12.5%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Gas Fee:</span>
                    <span className="text-white ml-2 font-semibold">0.001 SOL</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroToken