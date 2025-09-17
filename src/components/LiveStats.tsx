'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  TrendingUp,
  Users,
  Zap,
  Globe,
  DollarSign,
  Clock,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Server,
  Shield
} from 'lucide-react'

const LiveStats = () => {
  const [activeTab, setActiveTab] = useState('network')
  const [liveData, setLiveData] = useState({
    blockHeight: 12456789,
    tps: 45234,
    validators: 523,
    totalStaked: 8945678900,
    energyTraded: 1234567,
    carbonCredits: 456789,
    gasPrice: 0.0001,
    networkLoad: 67
  })

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        blockHeight: prev.blockHeight + Math.floor(Math.random() * 3) + 1,
        tps: Math.floor(40000 + Math.random() * 25000),
        validators: prev.validators + (Math.random() > 0.8 ? 1 : 0),
        totalStaked: prev.totalStaked + Math.floor(Math.random() * 100000),
        energyTraded: prev.energyTraded + Math.floor(Math.random() * 1000),
        carbonCredits: prev.carbonCredits + Math.floor(Math.random() * 100),
        gasPrice: 0.0001 + Math.random() * 0.00005,
        networkLoad: Math.floor(50 + Math.random() * 40)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const tabs = [
    { id: 'network', label: 'Network', icon: Activity },
    { id: 'energy', label: 'Energy', icon: Zap },
    { id: 'carbon', label: 'Carbon', icon: Globe },
    { id: 'defi', label: 'DeFi', icon: DollarSign }
  ]

  const networkStats = [
    {
      label: 'Block Height',
      value: liveData.blockHeight.toLocaleString(),
      change: '+3',
      icon: Server,
      color: 'blue'
    },
    {
      label: 'Current TPS',
      value: liveData.tps.toLocaleString(),
      change: `${((liveData.tps / 65000) * 100).toFixed(1)}%`,
      icon: Activity,
      color: 'green'
    },
    {
      label: 'Active Validators',
      value: liveData.validators,
      change: '+2',
      icon: Users,
      color: 'purple'
    },
    {
      label: 'Network Load',
      value: `${liveData.networkLoad}%`,
      change: liveData.networkLoad > 70 ? 'High' : 'Normal',
      icon: BarChart3,
      color: liveData.networkLoad > 70 ? 'red' : 'green'
    }
  ]

  const energyStats = [
    {
      label: 'Energy Traded (24h)',
      value: `${(liveData.energyTraded / 1000).toFixed(1)}M kWh`,
      change: '+12.5%',
      trend: 'up'
    },
    {
      label: 'Active Producers',
      value: '1,234',
      change: '+45',
      trend: 'up'
    },
    {
      label: 'Avg Price',
      value: '$0.082/kWh',
      change: '-2.3%',
      trend: 'down'
    },
    {
      label: 'Grid Efficiency',
      value: '94.7%',
      change: '+0.3%',
      trend: 'up'
    }
  ]

  const recentTransactions = [
    { hash: '0x7f9e...3a2b', type: 'Energy Trade', amount: '500 kWh', time: '2s ago', status: 'success' },
    { hash: '0x2e4a...8b1c', type: 'Carbon Credit', amount: '100 tons', time: '5s ago', status: 'success' },
    { hash: '0x9c2f...4f7d', type: 'Stake ENERGY', amount: '10,000', time: '8s ago', status: 'success' },
    { hash: '0x1a8b...6d3e', type: 'Energy Trade', amount: '1,200 kWh', time: '12s ago', status: 'pending' }
  ]

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
            <span className="text-green-400 text-sm font-medium">Live Network Data</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time <span className="text-gradient">Blockchain Metrics</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Monitor the ENERGY blockchain network in real-time with live updates every 3 seconds
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2 inline-flex">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Stats Grid */}
        {activeTab === 'network' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {networkStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div className={`w-10 h-10 bg-${stat.color}-500/20 rounded-xl flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 text-${stat.color}-400`} />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      stat.color === 'green' ? 'text-green-400' :
                      stat.color === 'red' ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-gray-500 text-xs">from last block</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {activeTab === 'energy' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {energyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-white mb-3">{stat.value}</p>
                <div className="flex items-center space-x-2">
                  {stat.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-400" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Live Transactions Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
                <Clock className="h-5 w-5 text-green-400" />
              </div>

              <div className="space-y-3">
                {recentTransactions.map((tx, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        tx.status === 'success' ? 'bg-green-400' : 'bg-yellow-400'
                      } animate-pulse`} />
                      <div>
                        <p className="text-white font-mono text-sm">{tx.hash}</p>
                        <p className="text-gray-400 text-xs">{tx.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium text-sm">{tx.amount}</p>
                      <p className="text-gray-500 text-xs">{tx.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-medium transition-all duration-200">
                View All Transactions
              </button>
            </div>
          </div>

          {/* Network Health */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">Network Health</h3>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Consensus</span>
                  <span className="text-green-400 text-sm font-medium">Healthy</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '98%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Network Load</span>
                  <span className="text-yellow-400 text-sm font-medium">{liveData.networkLoad}%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500" style={{ width: `${liveData.networkLoad}%` }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Validator Uptime</span>
                  <span className="text-green-400 text-sm font-medium">99.99%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '99.99%' }} />
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-white font-medium text-sm">All Systems Operational</p>
                  <p className="text-gray-400 text-xs">Last incident: 45 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveStats