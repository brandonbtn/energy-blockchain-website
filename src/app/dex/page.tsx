'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  TrendingUp,
  BarChart3,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Activity,
  Users,
  Lock
} from 'lucide-react'
import Link from 'next/link'

export default function DexPage() {
  const { t } = useTranslation()

  const dexFeatures = [
    {
      icon: TrendingUp,
      title: "High-Speed Trading",
      description: "Execute trades at lightning speed with our 65,000+ TPS blockchain infrastructure."
    },
    {
      icon: Shield,
      title: "Secure & Decentralized",
      description: "Trade with confidence on our fully decentralized platform with military-grade security."
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description: "Enjoy minimal trading fees powered by our energy-efficient blockchain technology."
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Access comprehensive market data and trading analytics in real-time."
    },
    {
      icon: Users,
      title: "Liquidity Pools",
      description: "Provide liquidity and earn rewards from our deep liquidity pools."
    },
    {
      icon: Lock,
      title: "Non-Custodial",
      description: "Maintain full control of your assets with our non-custodial trading platform."
    }
  ]

  const tradingPairs = [
    { pair: "ENERGY/SOL", price: "$0.052", change: "+12.45%", volume: "$2.1M" },
    { pair: "ENERGY/USDC", price: "$0.051", change: "+8.92%", volume: "$1.8M" },
    { pair: "ENERGY/ETH", price: "0.000028", change: "+15.23%", volume: "$956K" },
    { pair: "CARBON/ENERGY", price: "12.45", change: "+3.67%", volume: "$743K" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/10 to-slate-900">
      <Header />

      <main className="relative pt-20">
        {/* Back to Home Link */}
        <div className="container mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 pb-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Zap className="h-16 w-16 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <Zap className="h-16 w-16 text-green-400/50" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Energy <span className="text-gradient">DEX</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            The world's first decentralized exchange built specifically for renewable energy trading.
            Trade ENERGY tokens, carbon credits, and energy certificates with lightning-fast execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
              Start Trading
            </button>
            <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
              View Markets
            </button>
          </div>
        </motion.div>

        {/* Trading Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">$12.5M</h3>
              <p className="text-gray-400">24h Volume</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">156</h3>
              <p className="text-gray-400">Active Markets</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">$45.2M</h3>
              <p className="text-gray-400">Total Liquidity</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">25,000+</h3>
              <p className="text-gray-400">Active Traders</p>
            </div>
          </div>
        </motion.div>

        {/* Popular Trading Pairs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Popular Trading Pairs
          </h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-slate-700 text-gray-400 font-semibold">
              <div>Trading Pair</div>
              <div>Price</div>
              <div>24h Change</div>
              <div>24h Volume</div>
            </div>
            {tradingPairs.map((pair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="grid grid-cols-4 gap-4 p-6 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/30 transition-colors cursor-pointer"
              >
                <div className="text-white font-semibold">{pair.pair}</div>
                <div className="text-white">{pair.price}</div>
                <div className="text-green-400">{pair.change}</div>
                <div className="text-gray-400">{pair.volume}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DEX Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Trade on Energy DEX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dexFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of traders already using the Energy DEX to trade renewable energy assets
              and carbon credits on the most advanced blockchain platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                Launch DEX
              </button>
              <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}