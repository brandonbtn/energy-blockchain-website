'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity,
  PieChart,
  Calendar,
  Download,
  Filter,
  Info,
  DollarSign,
  Users,
  Zap,
  Target,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Globe,
  Percent
} from 'lucide-react'
import Link from 'next/link'

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d')
  const [selectedMetric, setSelectedMetric] = useState('portfolio')

  const performanceMetrics = {
    totalReturn: 125.5,
    totalReturnValue: 156875,
    bestPerformer: 'ENERGY',
    bestReturn: 450,
    worstPerformer: 'N/A',
    worstReturn: 0,
    winRate: 78.5,
    avgHoldTime: '45 days',
    totalTrades: 156,
    profitableTrades: 122
  }

  const portfolioAnalytics = {
    sharpeRatio: 2.45,
    sortino: 3.12,
    maxDrawdown: -12.5,
    volatility: 18.3,
    beta: 1.25,
    alpha: 8.5
  }

  const tradingStats = [
    { label: 'Total Trades', value: '156', change: 12.5, icon: Activity },
    { label: 'Win Rate', value: '78.5%', change: 5.2, icon: Target },
    { label: 'Avg Profit', value: '$1,250', change: 18.3, icon: TrendingUp },
    { label: 'Best Trade', value: '$15,600', change: 0, icon: Award }
  ]

  const monthlyPerformance = [
    { month: 'Jan', pnl: 12500, trades: 15, winRate: 80 },
    { month: 'Feb', pnl: 8900, trades: 12, winRate: 75 },
    { month: 'Mar', pnl: 15600, trades: 18, winRate: 83 },
    { month: 'Apr', pnl: -3200, trades: 10, winRate: 40 },
    { month: 'May', pnl: 22500, trades: 25, winRate: 88 },
    { month: 'Jun', pnl: 18750, trades: 20, winRate: 85 },
    { month: 'Jul', pnl: 14200, trades: 16, winRate: 81 },
    { month: 'Aug', pnl: 19800, trades: 22, winRate: 86 },
    { month: 'Sep', pnl: 11250, trades: 18, winRate: 78 }
  ]

  const assetPerformance = [
    {
      asset: 'ENERGY',
      invested: 25000,
      currentValue: 125000,
      pnl: 100000,
      pnlPercent: 400,
      allocation: 85
    },
    {
      asset: 'SOL',
      invested: 5000,
      currentValue: 12500,
      pnl: 7500,
      pnlPercent: 150,
      allocation: 10
    },
    {
      asset: 'USDC',
      invested: 5000,
      currentValue: 5150,
      pnl: 150,
      pnlPercent: 3,
      allocation: 5
    }
  ]

  const riskMetrics = [
    { metric: 'Value at Risk (95%)', value: '$12,500', description: 'Maximum expected loss in 95% of cases' },
    { metric: 'Expected Shortfall', value: '$18,750', description: 'Average loss beyond VaR threshold' },
    { metric: 'Max Drawdown', value: '-12.5%', description: 'Largest peak-to-trough decline' },
    { metric: 'Recovery Time', value: '15 days', description: 'Average time to recover from drawdown' }
  ]

  const correlationData = [
    { pair: 'ENERGY/BTC', correlation: 0.65, strength: 'Moderate' },
    { pair: 'ENERGY/ETH', correlation: 0.78, strength: 'Strong' },
    { pair: 'ENERGY/SOL', correlation: 0.82, strength: 'Strong' },
    { pair: 'ENERGY/S&P500', correlation: 0.25, strength: 'Weak' }
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
              <h1 className="text-2xl font-bold text-white">Analytics</h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Time Range Selector */}
              <div className="flex bg-slate-800 rounded-lg p-1">
                {['24h', '7d', '30d', '90d', '1y', 'All'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      timeRange === range
                        ? 'bg-slate-700 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Filter className="h-5 w-5 text-gray-400" />
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
        {/* Performance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-400 mb-2">Total Portfolio Return</p>
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl font-bold text-white">
                  {performanceMetrics.totalReturn >= 0 ? '+' : ''}{performanceMetrics.totalReturn}%
                </h2>
                <div className={`flex items-center ${performanceMetrics.totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {performanceMetrics.totalReturn >= 0 ? <ArrowUpRight className="h-6 w-6" /> : <ArrowDownRight className="h-6 w-6" />}
                  <span className="text-2xl font-semibold">
                    ${performanceMetrics.totalReturnValue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 mb-2">Win Rate</p>
              <p className="text-3xl font-bold text-green-400">{performanceMetrics.winRate}%</p>
              <p className="text-gray-500 text-sm">
                {performanceMetrics.profitableTrades}/{performanceMetrics.totalTrades} trades
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tradingStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-5 w-5 text-green-400" />
                    {stat.change !== 0 && (
                      <span className={`text-xs ${stat.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change >= 0 ? '+' : ''}{stat.change}%
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Monthly Performance Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Monthly P&L</h3>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-3">
              {monthlyPerformance.map((month) => (
                <div key={month.month}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-sm">{month.month}</span>
                    <span className={`font-semibold ${month.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {month.pnl >= 0 ? '+' : ''}${Math.abs(month.pnl).toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-6">
                    <div
                      className={`h-6 rounded-full flex items-center justify-end pr-2 text-xs text-white ${
                        month.pnl >= 0 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-pink-600'
                      }`}
                      style={{ width: `${(Math.abs(month.pnl) / 25000) * 100}%` }}
                    >
                      {month.winRate}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Asset Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Asset Performance</h3>
              <PieChart className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {assetPerformance.map((asset) => (
                <div key={asset.asset} className="bg-slate-700/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-green-400" />
                      <span className="font-semibold text-white">{asset.asset}</span>
                    </div>
                    <span className={`font-bold ${asset.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {asset.pnl >= 0 ? '+' : ''}{asset.pnlPercent}%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Invested</p>
                      <p className="text-white">${asset.invested.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Current</p>
                      <p className="text-white">${asset.currentValue.toLocaleString()}</p>
                    </div>
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
        </div>

        {/* Risk Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Portfolio Metrics</h3>
              <Info className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Sharpe Ratio</span>
                <span className="text-white font-semibold">{portfolioAnalytics.sharpeRatio}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sortino Ratio</span>
                <span className="text-white font-semibold">{portfolioAnalytics.sortino}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Drawdown</span>
                <span className="text-red-400 font-semibold">{portfolioAnalytics.maxDrawdown}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Volatility</span>
                <span className="text-white font-semibold">{portfolioAnalytics.volatility}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Beta</span>
                <span className="text-white font-semibold">{portfolioAnalytics.beta}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Alpha</span>
                <span className="text-green-400 font-semibold">{portfolioAnalytics.alpha}%</span>
              </div>
            </div>
          </motion.div>

          {/* Risk Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Risk Analysis</h3>
              <Target className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {riskMetrics.map((risk) => (
                <div key={risk.metric} className="bg-slate-700/30 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-gray-400 text-sm">{risk.metric}</p>
                    <p className="text-white font-semibold">{risk.value}</p>
                  </div>
                  <p className="text-gray-500 text-xs">{risk.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Correlations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Correlations</h3>
              <Globe className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-3">
              {correlationData.map((corr) => (
                <div key={corr.pair}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">{corr.pair}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      corr.strength === 'Strong' ? 'bg-green-500/20 text-green-400' :
                      corr.strength === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {corr.strength}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          corr.correlation >= 0.7 ? 'bg-green-500' :
                          corr.correlation >= 0.4 ? 'bg-yellow-500' :
                          'bg-gray-500'
                        }`}
                        style={{ width: `${Math.abs(corr.correlation) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-semibold w-12 text-right">
                      {corr.correlation}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-slate-700/30 rounded-lg">
              <div className="flex items-start space-x-2">
                <Info className="h-4 w-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">
                    Correlation measures how assets move together. Values closer to 1 indicate strong positive correlation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}