'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Coins,
  TrendingUp,
  Lock,
  Unlock,
  Clock,
  Award,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  Zap,
  Shield,
  Timer,
  Trophy
} from 'lucide-react'

export default function StakingPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedPool, setSelectedPool] = useState<string | null>(null)
  const [stakeAmount, setStakeAmount] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const stakingPools = [
    {
      id: 'flexible',
      name: 'Flexible Staking',
      apy: 8.5,
      lockPeriod: 'No Lock',
      minStake: 100,
      totalStaked: '45.2M ENERGY',
      yourStake: '0',
      icon: Unlock,
      color: 'green',
      available: true
    },
    {
      id: '30days',
      name: '30 Days Lock',
      apy: 12.5,
      lockPeriod: '30 Days',
      minStake: 500,
      totalStaked: '78.9M ENERGY',
      yourStake: '0',
      icon: Clock,
      color: 'blue',
      available: true
    },
    {
      id: '90days',
      name: '90 Days Lock',
      apy: 18.0,
      lockPeriod: '90 Days',
      minStake: 1000,
      totalStaked: '156.3M ENERGY',
      yourStake: '0',
      icon: Timer,
      color: 'purple',
      available: true
    },
    {
      id: '365days',
      name: 'Elite Staking',
      apy: 25.0,
      lockPeriod: '365 Days',
      minStake: 5000,
      totalStaked: '234.7M ENERGY',
      yourStake: '0',
      icon: Trophy,
      color: 'gold',
      available: true
    }
  ]

  const stats = [
    { label: 'Total Value Locked', value: '$524.8M', change: '+12.4%', up: true },
    { label: 'Your Total Staked', value: '0 ENERGY', change: '0%', up: false },
    { label: 'Total Rewards Earned', value: '0 ENERGY', change: '0%', up: false },
    { label: 'Average APY', value: '16.0%', change: '+2.1%', up: true }
  ]

  const recentActivity = [
    { action: 'Staked', amount: '10,000 ENERGY', pool: '90 Days Lock', time: '2 hours ago', user: '0x7a9f...8c2d' },
    { action: 'Claimed', amount: '1,250 ENERGY', pool: 'Flexible', time: '3 hours ago', user: '0x3b5e...4f1a' },
    { action: 'Staked', amount: '50,000 ENERGY', pool: 'Elite Staking', time: '5 hours ago', user: '0x9d2c...7e8b' },
    { action: 'Unstaked', amount: '5,000 ENERGY', pool: '30 Days Lock', time: '8 hours ago', user: '0x1a4f...2b9c' }
  ]

  if (!mounted) return null

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Staking</h1>
        <p className="text-gray-400">Stake your ENERGY tokens and earn rewards</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6"
          >
            <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
            <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
            <div className="flex items-center space-x-2">
              {stat.up ? (
                <ArrowUp className="h-4 w-4 text-green-400" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-400" />
              )}
              <span className={`text-sm ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Staking Pools */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Available Staking Pools</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {stakingPools.map((pool, index) => {
            const Icon = pool.icon
            const isSelected = selectedPool === pool.id

            return (
              <motion.div
                key={pool.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-xl border rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                  isSelected ? 'border-green-500' : 'border-slate-700 hover:border-green-500/50'
                }`}
                onClick={() => setSelectedPool(pool.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${
                      pool.color === 'green' ? 'from-green-500 to-emerald-600' :
                      pool.color === 'blue' ? 'from-blue-500 to-cyan-600' :
                      pool.color === 'purple' ? 'from-purple-500 to-pink-600' :
                      'from-yellow-500 to-orange-600'
                    }`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pool.name}</h3>
                      <p className="text-gray-400 text-sm">{pool.lockPeriod}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">{pool.apy}%</p>
                    <p className="text-gray-400 text-sm">APY</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Min. Stake</span>
                    <span className="text-white font-medium">{pool.minStake} ENERGY</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Staked</span>
                    <span className="text-white font-medium">{pool.totalStaked}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Your Stake</span>
                    <span className="text-white font-medium">{pool.yourStake}</span>
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pt-4 border-t border-slate-700"
                  >
                    <div className="space-y-3">
                      <div>
                        <label className="text-gray-400 text-sm block mb-2">Amount to Stake</label>
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            value={stakeAmount}
                            onChange={(e) => setStakeAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                          />
                          <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                            MAX
                          </button>
                        </div>
                      </div>
                      <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                        Stake ENERGY
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Your Stakes */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Your Active Stakes</h2>
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex flex-col items-center justify-center py-12">
            <Coins className="h-12 w-12 text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg mb-2">No Active Stakes</p>
            <p className="text-gray-500 text-sm">Start staking to earn rewards</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Recent Network Activity</h2>
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden">
          <div className="divide-y divide-slate-700">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      activity.action === 'Staked' ? 'bg-green-500/20 text-green-400' :
                      activity.action === 'Claimed' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {activity.action === 'Staked' ? <ArrowUp className="h-4 w-4" /> :
                       activity.action === 'Claimed' ? <Award className="h-4 w-4" /> :
                       <ArrowDown className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {activity.user} {activity.action.toLowerCase()} {activity.amount}
                      </p>
                      <p className="text-gray-400 text-sm">{activity.pool} • {activity.time}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/50 rounded-xl p-6"
      >
        <div className="flex items-start space-x-4">
          <AlertCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white font-bold mb-2">Staking Benefits</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Earn passive income through competitive APY rates</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-green-400" />
                <span>Contribute to network security and decentralization</span>
              </li>
              <li className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-green-400" />
                <span>Get exclusive access to platform features and airdrops</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}