'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Zap,
  TrendingUp,
  Activity,
  Battery,
  Sun,
  Wind,
  Droplets,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Users,
  Globe
} from 'lucide-react'
import CountUp from 'react-countup'

const EnergyTrading = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedEnergy, setSelectedEnergy] = useState('solar')

  const energyTypes = [
    { id: 'solar', name: 'Solar', icon: Sun, price: 0.082, change: 2.5, volume: '1.2M kWh', color: 'yellow' },
    { id: 'wind', name: 'Wind', icon: Wind, price: 0.074, change: -1.2, volume: '890K kWh', color: 'blue' },
    { id: 'hydro', name: 'Hydro', icon: Droplets, price: 0.069, change: 0.8, volume: '560K kWh', color: 'cyan' },
    { id: 'battery', name: 'Storage', icon: Battery, price: 0.095, change: 3.1, volume: '320K kWh', color: 'purple' }
  ]

  const recentTrades = [
    { time: '2 min ago', type: 'buy', energy: 'Solar', amount: '500 kWh', price: '$41.00', trader: '0x7f9...3a2' },
    { time: '5 min ago', type: 'sell', energy: 'Wind', amount: '750 kWh', price: '$55.50', trader: '0x2e4...8b1' },
    { time: '8 min ago', type: 'buy', energy: 'Hydro', amount: '1200 kWh', price: '$82.80', trader: '0x9c2...4f7' },
    { time: '12 min ago', type: 'sell', energy: 'Solar', amount: '300 kWh', price: '$24.60', trader: '0x1a8...6d3' }
  ]

  const tradingFeatures = [
    {
      icon: Activity,
      title: 'Real-Time Trading',
      description: 'Trade energy instantly with smart contract automation',
      stat: '< 1s execution'
    },
    {
      icon: Globe,
      title: 'Global Market',
      description: 'Access energy markets across 50+ countries',
      stat: '24/7 trading'
    },
    {
      icon: Users,
      title: 'P2P Network',
      description: 'Direct peer-to-peer energy transactions',
      stat: 'No intermediaries'
    },
    {
      icon: TrendingUp,
      title: 'Price Discovery',
      description: 'Automated market making for optimal pricing',
      stat: 'Best rates'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Zap className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Energy DEX Live</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Decentralized <span className="text-gradient">Energy Trading</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trade renewable energy directly on our blockchain with instant settlement,
            transparent pricing, and zero intermediaries.
          </p>
        </motion.div>

        {/* Trading Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Energy Markets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Energy Markets</h3>

              {/* Energy Type Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {energyTypes.map((energy) => {
                  const Icon = energy.icon
                  return (
                    <motion.div
                      key={energy.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedEnergy(energy.id)}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedEnergy === energy.id
                          ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/50'
                          : 'bg-slate-700/30 border-slate-600/50'
                      } border`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-${energy.color}-500/20 rounded-lg flex items-center justify-center`}>
                            <Icon className={`h-5 w-5 text-${energy.color}-400`} />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{energy.name}</h4>
                            <p className="text-gray-400 text-xs">{energy.volume}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-2xl font-bold text-white">
                            ${energy.price}
                          </p>
                          <p className="text-gray-400 text-sm">per kWh</p>
                        </div>
                        <div className={`flex items-center space-x-1 ${
                          energy.change > 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {energy.change > 0 ? (
                            <ArrowUpRight className="h-4 w-4" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4" />
                          )}
                          <span className="text-sm font-medium">
                            {Math.abs(energy.change)}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Trading Chart Placeholder */}
              <div className="bg-slate-900/50 rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-400">Real-time price chart</p>
                  <p className="text-green-400 text-sm mt-2">Live data streaming</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Trades */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Recent Trades</h3>
                <Clock className="h-4 w-4 text-green-400" />
              </div>

              <div className="space-y-4">
                {recentTrades.map((trade, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-slate-700/50 pb-3 last:border-0"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.type === 'buy'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {trade.type.toUpperCase()}
                        </div>
                        <span className="text-white font-medium">{trade.energy}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{trade.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{trade.amount}</span>
                      <span className="text-green-400 font-medium">{trade.price}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">Trader: {trade.trader}</p>
                  </motion.div>
                ))}
              </div>

              <button className="w-full mt-6 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-medium transition-all duration-200">
                View All Trades
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trading Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tradingFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300"
              >
                <Icon className="h-8 w-8 text-green-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                <p className="text-green-400 font-medium text-sm">{feature.stat}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 inline-flex items-center space-x-2">
            <span>Start Trading Energy</span>
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-gray-400 mt-4">No gas fees for your first 10 trades</p>
        </motion.div>
      </div>
    </section>
  )
}

export default EnergyTrading