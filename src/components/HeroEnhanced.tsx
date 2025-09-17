'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Play,
  Zap,
  Leaf,
  TrendingUp,
  Shield,
  Globe,
  ChevronRight,
  ExternalLink,
  Wallet,
  Activity,
  Users,
  Lock
} from 'lucide-react'
import CountUp from 'react-countup'

const HeroEnhanced = () => {
  const [currentStat, setCurrentStat] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { value: 65000, suffix: '+', label: 'TPS', description: 'Transactions Per Second', icon: Activity },
    { value: 99.9, suffix: '%', label: 'Less Energy', description: 'vs Traditional Blockchains', icon: Leaf },
    { value: 1000000, suffix: '+', label: 'Carbon Credits', description: 'Traded on Platform', icon: Globe },
    { value: 500, suffix: '+', label: 'Validators', description: 'Renewable Energy Producers', icon: Users }
  ]

  const features = [
    { icon: Lock, text: 'Military-Grade Security' },
    { icon: Wallet, text: 'Web3 Wallet Ready' },
    { icon: Shield, text: 'Quantum Resistant' }
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(34, 197, 94, 0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }} />

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 5, -5, 0],
              x: mousePosition.x * (i % 2 === 0 ? 1 : -1) * 0.5,
              rotateY: mousePosition.x * 0.5,
            }}
            transition={{
              y: {
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotateZ: {
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
              },
              x: { duration: 0 },
              rotateY: { duration: 0 }
            }}
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${
              i % 3 === 0 ? 'from-green-500/20 to-emerald-500/20' :
              i % 3 === 1 ? 'from-blue-500/20 to-cyan-500/20' :
              'from-purple-500/20 to-pink-500/20'
            } backdrop-blur-sm rounded-2xl border border-white/10`} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full backdrop-blur-xl"
            >
              <Zap className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">Mainnet Launching Q2 2024</span>
              <ChevronRight className="h-4 w-4 text-green-400 ml-2" />
            </motion.div>

            {/* Main Title with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="text-white">The Future of</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Energy Trading
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              World's first blockchain powered by renewable energy with{' '}
              <span className="text-green-400 font-semibold">65,000+ TPS</span>,
              verified carbon credits, and sustainable DeFi protocols.
              Join the revolution today.
            </motion.p>

            {/* Rotating Stats Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <AnimatePresence mode="wait">
                {stats.map((stat, index) => {
                  if (index === currentStat) {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                      >
                        <Icon className="h-8 w-8 text-green-400 mb-4" />
                        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                          <CountUp end={stat.value} duration={2} separator="," decimals={stat.suffix === '%' ? 1 : 0} />
                          <span className="text-green-400">{stat.suffix}</span>
                        </div>
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">{stat.label}</p>
                        <p className="text-gray-500 text-xs">{stat.description}</p>
                      </motion.div>
                    )
                  }
                  return null
                })}
              </AnimatePresence>
            </motion.div>

            {/* CTA Buttons with Web3 Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold text-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50">
                <span className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5" />
                  <span>Connect Wallet</span>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
              </button>

              <button className="group px-8 py-4 bg-slate-800/80 backdrop-blur-xl text-white rounded-2xl font-semibold text-lg hover:bg-slate-700/80 transition-all duration-300 border border-slate-700 hover:border-green-500/50">
                <span className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5" />
                  <span>Explore Docs</span>
                </span>
              </button>

              <button className="group flex items-center space-x-3 px-8 py-4 text-white hover:text-green-400 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full group-hover:bg-green-400/20 transition-colors backdrop-blur-xl">
                  <Play className="h-5 w-5 ml-0.5" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-2 text-gray-400">
                    <Icon className="h-4 w-4 text-green-400" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                )
              })}
            </motion.div>

            {/* Live Activity Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-gray-400 text-sm">Network Status</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-sm">
                      <span className="text-gray-400">Block Height:</span>
                      <span className="text-white ml-2 font-mono">12,456,789</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Validators:</span>
                      <span className="text-green-400 ml-2 font-semibold">523</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">TVL:</span>
                      <span className="text-white ml-2 font-semibold">$125.4M</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center backdrop-blur-xl"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-green-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroEnhanced