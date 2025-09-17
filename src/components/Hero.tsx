'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Leaf, TrendingUp, Shield } from 'lucide-react'
import CountUp from 'react-countup'

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const floatingIcons = [
    { Icon: Zap, color: 'text-yellow-400', delay: 0 },
    { Icon: Leaf, color: 'text-green-400', delay: 1 },
    { Icon: TrendingUp, color: 'text-blue-400', delay: 2 },
    { Icon: Shield, color: 'text-purple-400', delay: 3 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Floating Icons */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, color, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: delay * 0.5, duration: 1 }}
            className={`absolute ${color}`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
            }}
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className="h-16 w-16 md:h-24 md:w-24" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-6xl mx-auto"
        >
          {/* Announcement Banner */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-2 mb-8 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm"
          >
            <Zap className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">
              Now Live: Testnet with 65,000+ TPS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            The Future of{' '}
            <span className="text-gradient">
              Renewable Energy
            </span>{' '}
            Trading
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            World's first blockchain powered by renewable energy with{' '}
            <span className="text-green-400 font-semibold">65,000+ TPS</span>,{' '}
            carbon credits, and sustainable DeFi protocols.
            Join the energy revolution today.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                <CountUp end={65000} separator="," suffix="+" />
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">TPS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                <CountUp end={99} suffix=".9%" />
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Less Energy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                <CountUp end={1000000} separator="," suffix="+" />
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Carbon Credits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                <CountUp end={50} suffix="+" />
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Countries</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50 flex items-center space-x-2">
              <span>Launch Energy DEX</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group flex items-center space-x-3 px-8 py-4 text-white border border-gray-600 rounded-full hover:border-green-400 transition-all duration-300 backdrop-blur-sm bg-white/5">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full group-hover:bg-green-400/20 transition-colors">
                <Play className="h-5 w-5 ml-0.5" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </motion.div>

          {/* Technology Highlights */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 border border-green-500/20">
              <Zap className="h-8 w-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Proof of Energy</h3>
              <p className="text-gray-400 text-sm">
                Revolutionary consensus mechanism powered by renewable energy production
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-blue-500/20">
              <TrendingUp className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Energy Trading</h3>
              <p className="text-gray-400 text-sm">
                Real-time P2P energy marketplace with automated smart contracts
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-purple-500/20">
              <Leaf className="h-8 w-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Carbon Credits</h3>
              <p className="text-gray-400 text-sm">
                Verified carbon offset marketplace with international standards
              </p>
            </div>
          </motion.div>
        </motion.div>
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
          className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center"
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

export default Hero