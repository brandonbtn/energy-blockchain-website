'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Coins,
  PieChart,
  Activity,
  Calendar,
  Download,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Award,
  Lock,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function PortfolioPage() {
  const [showBalances, setShowBalances] = useState(true)

  const portfolio = {
    totalValue: 125650.50,
    totalChange24h: 12.5,
    totalChangeValue: 13956.25,
    energyBalance: 1000000,
    energyValue: 125000,
    energyChange: 15.2,
    stakedAmount: 500000,
    stakingRewards: 650.50,
    availableBalance: 500000
  }

  const assets = [
    {
      symbol: 'ENERGY',
      name: 'Energy Token',
      balance: 1000000,
      value: 125000,
      price: 0.125,
      change24h: 15.2,
      allocation: 99.5,
      icon: '⚡'
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: 650.50,
      value: 650.50,
      price: 1.00,
      change24h: 0,
      allocation: 0.5,
      icon: '💵'
    }
  ]

  const stakingPositions = [
    {
      pool: 'ENERGY Single Stake',
      amount: 250000,
      apy: 15.5,
      rewards: 325.25,
      lockPeriod: '30 days',
      unlockDate: '2025-10-17',
      status: 'active'
    },
    {
      pool: 'ENERGY-USDC LP',
      amount: 250000,
      apy: 25.8,
      rewards: 325.25,
      lockPeriod: '90 days',
      unlockDate: '2025-12-17',
      status: 'active'
    }
  ]

  const recentTransactions = [
    {
      type: 'buy',
      asset: 'ENERGY',
      amount: 50000,
      price: 0.118,
      value: 5900,
      date: '2025-09-15 14:32',
      status: 'completed'
    },
    {
      type: 'stake',
      asset: 'ENERGY',
      amount: 100000,
      price: 0.120,
      value: 12000,
      date: '2025-09-14 10:15',
      status: 'completed'
    },
    {
      type: 'reward',
      asset: 'ENERGY',
      amount: 1250,
      price: 0.125,
      value: 156.25,
      date: '2025-09-13 00:00',
      status: 'completed'
    },
    {
      type: 'sell',
      asset: 'ENERGY',
      amount: 25000,
      price: 0.122,
      value: 3050,
      date: '2025-09-12 16:45',
      status: 'completed'
    }
  ]

  const performanceData = [
    { period: '24h', value: 12.5, amount: 13956.25 },
    { period: '7d', value: 28.3, amount: 27654.50 },
    { period: '30d', value: 45.2, amount: 39102.75 },
    { period: '90d', value: 125.5, amount: 69875.00 },
    { period: '1y', value: 450.0, amount: 103250.00 },
    { period: 'All', value: 850.0, amount: 110437.50 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/10 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                ← Back
              </Link>
              <h1 className="text-2xl font-bold text-white">Portfolio</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowBalances(!showBalances)}
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                {showBalances ? <Eye className="h-5 w-5 text-gray-400" /> : <EyeOff className="h-5 w-5 text-gray-400" />}
              </button>
              <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Total Portfolio Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-400 mb-2">Total Portfolio Value</p>
              <h2 className="text-4xl font-bold text-white">
                {showBalances ? `$${portfolio.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '****'}
              </h2>
              <div className={`flex items-center mt-2 ${portfolio.totalChange24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {portfolio.totalChange24h >= 0 ? <ArrowUpRight className="h-5 w-5 mr-1" /> : <ArrowDownRight className="h-5 w-5 mr-1" />}
                <span className="font-semibold">{portfolio.totalChange24h}%</span>
                <span className="ml-2">
                  ({portfolio.totalChange24h >= 0 ? '+' : ''}{showBalances ? `$${portfolio.totalChangeValue.toLocaleString()}` : '****'})
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 mb-2">Available ENERGY</p>
              <p className="text-2xl font-bold text-white">
                {showBalances ? portfolio.availableBalance.toLocaleString() : '****'}
              </p>
              <p className="text-gray-500 text-sm">
                {showBalances ? `$${(portfolio.availableBalance * 0.125).toLocaleString()}` : '****'}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Wallet className="h-5 w-5 text-green-400" />
                <span className="text-xs text-green-400">+15.2%</span>
              </div>
              <p className="text-gray-400 text-sm">ENERGY Balance</p>
              <p className="text-xl font-bold text-white">
                {showBalances ? portfolio.energyBalance.toLocaleString() : '****'}
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Lock className="h-5 w-5 text-blue-400" />
                <span className="text-xs text-blue-400">50%</span>
              </div>
              <p className="text-gray-400 text-sm">Staked Amount</p>
              <p className="text-xl font-bold text-white">
                {showBalances ? portfolio.stakedAmount.toLocaleString() : '****'}
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-xs text-yellow-400">Daily</span>
              </div>
              <p className="text-gray-400 text-sm">Staking Rewards</p>
              <p className="text-xl font-bold text-white">
                {showBalances ? `$${portfolio.stakingRewards.toFixed(2)}` : '****'}
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Zap className="h-5 w-5 text-purple-400" />
                <span className="text-xs text-purple-400">APY</span>
              </div>
              <p className="text-gray-400 text-sm">Average Yield</p>
              <p className="text-xl font-bold text-white">18.5%</p>
            </div>
          </div>
        </motion.div>

        {/* Performance Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {performanceData.map((period) => (
              <button
                key={period.period}
                className="p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <p className="text-gray-400 text-xs mb-1">{period.period}</p>
                <p className={`font-bold ${period.value >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {period.value >= 0 ? '+' : ''}{period.value}%
                </p>
                <p className="text-gray-500 text-xs">
                  {showBalances ? `$${period.amount.toLocaleString()}` : '****'}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Asset Allocation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Assets</h3>
              <PieChart className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {assets.map((asset) => (
                <div key={asset.symbol} className="bg-slate-700/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{asset.icon}</span>
                      <div>
                        <p className="font-semibold text-white">{asset.symbol}</p>
                        <p className="text-gray-400 text-sm">{asset.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white">
                        {showBalances ? `$${asset.value.toLocaleString()}` : '****'}
                      </p>
                      <p className={`text-sm ${asset.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-400">
                      {showBalances ? `${asset.balance.toLocaleString()} ${asset.symbol}` : '****'}
                    </p>
                    <p className="text-gray-400">
                      ${asset.price.toFixed(asset.price < 1 ? 3 : 2)}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Allocation</span>
                      <span>{asset.allocation}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                        style={{ width: `${asset.allocation}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Staking Positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Staking Positions</h3>
              <Lock className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {stakingPositions.map((position, index) => (
                <div key={index} className="bg-slate-700/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-white">{position.pool}</p>
                      <p className="text-gray-400 text-sm">{position.lockPeriod} lock</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">{position.apy}% APY</p>
                      <p className="text-gray-400 text-sm">
                        {showBalances ? `+$${position.rewards}` : '****'}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Staked Amount</span>
                      <span className="text-white">
                        {showBalances ? position.amount.toLocaleString() : '****'} ENERGY
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Unlock Date</span>
                      <span className="text-white">{position.unlockDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Status</span>
                      <span className="text-green-400 capitalize">{position.status}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                    Claim Rewards
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mt-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm border-b border-slate-700">
                  <th className="pb-3">Type</th>
                  <th className="pb-3">Asset</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Value</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tx.type === 'buy' ? 'bg-green-500/20 text-green-400' :
                        tx.type === 'sell' ? 'bg-red-500/20 text-red-400' :
                        tx.type === 'stake' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {tx.type}
                      </span>
                    </td>
                    <td className="py-4 text-white">{tx.asset}</td>
                    <td className="py-4 text-white">
                      {showBalances ? tx.amount.toLocaleString() : '****'}
                    </td>
                    <td className="py-4 text-gray-400">${tx.price}</td>
                    <td className="py-4 text-white">
                      {showBalances ? `$${tx.value.toLocaleString()}` : '****'}
                    </td>
                    <td className="py-4 text-gray-400">{tx.date}</td>
                    <td className="py-4">
                      <span className="text-green-400 text-sm">{tx.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center">
            <button className="text-green-400 hover:text-green-300 transition-colors">
              View All Transactions →
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}