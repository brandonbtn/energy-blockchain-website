'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const HeroSimple = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo/Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30"
          >
            <Zap className="h-10 w-10 text-green-400" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            ENERGY Token
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            The Native Currency Powering Soltolaria's Decentralized Energy Marketplace
          </motion.p>

          {/* Key Stats - Simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">65,000+</p>
              <p className="text-gray-400 text-sm">TPS</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700" />
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">99.9%</p>
              <p className="text-gray-400 text-sm">Less Energy</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700" />
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">$0.0001</p>
              <p className="text-gray-400 text-sm">Gas Fee</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/features">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 flex items-center">
                Explore Platform
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </Link>
            <Link href="/docs">
              <button className="px-8 py-4 bg-slate-800/80 backdrop-blur-xl text-white rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300 border border-slate-700">
                Documentation
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-xs mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSimple