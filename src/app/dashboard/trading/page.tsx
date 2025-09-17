'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  DollarSign,
  BarChart3,
  Clock,
  Zap,
  AlertCircle,
  Settings,
  RefreshCw,
  Plus,
  Minus,
  ArrowRight,
  Info
} from 'lucide-react'
import Link from 'next/link'

export default function TradingPage() {
  const [tradeType, setTradeType] = useState<'buy' | 'sell' | 'swap'>('buy')
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  const marketData = {
    currentPrice: 0.125,
    change24h: 15.2,
    high24h: 0.132,
    low24h: 0.108,
    volume24h: 2456789,
    marketCap: 125000000,
    circulatingSupply: 1000000000,
    totalSupply: 1000000000
  }

  const orderBook = {
    bids: [
      { price: 0.1248, amount: 125000, total: 15600 },
      { price: 0.1247, amount: 89500, total: 11160 },
      { price: 0.1246, amount: 156000, total: 19458 },
      { price: 0.1245, amount: 234000, total: 29133 },
      { price: 0.1244, amount: 98000, total: 12191 }
    ],
    asks: [
      { price: 0.1252, amount: 95000, total: 11894 },
      { price: 0.1253, amount: 145000, total: 18169 },
      { price: 0.1254, amount: 178000, total: 22321 },
      { price: 0.1255, amount: 256000, total: 32128 },
      { price: 0.1256, amount: 189000, total: 23738 }
    ]
  }

  const recentTrades = [
    { price: 0.1250, amount: 15000, time: '14:32:15', type: 'buy' },
    { price: 0.1249, amount: 8500, time: '14:32:08', type: 'sell' },
    { price: 0.1251, amount: 25000, time: '14:31:55', type: 'buy' },
    { price: 0.1248, amount: 12000, time: '14:31:42', type: 'sell' },
    { price: 0.1252, amount: 45000, time: '14:31:30', type: 'buy' },
    { price: 0.1247, amount: 18500, time: '14:31:15', type: 'sell' }
  ]

  const openOrders = [
    {
      id: 'ORD001',
      type: 'limit',
      side: 'buy',
      price: 0.1200,
      amount: 50000,
      filled: 0,
      status: 'open',
      date: '2025-09-17 10:15'
    },
    {
      id: 'ORD002',
      type: 'limit',
      side: 'sell',
      price: 0.1300,
      amount: 25000,
      filled: 12500,
      status: 'partial',
      date: '2025-09-17 09:45'
    }
  ]

  const tradingPairs = [
    { pair: 'ENERGY/USDC', price: 0.125, change: 15.2, volume: 2456789 },
    { pair: 'ENERGY/SOL', price: 0.00125, change: 12.8, volume: 1856320 },
    { pair: 'ENERGY/USDT', price: 0.124, change: 14.9, volume: 1985632 }
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
              <h1 className="text-2xl font-bold text-white">Trading</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <RefreshCw className="h-5 w-5 text-gray-400" />
              </button>
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Settings className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Market Data & Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-8 w-8 text-green-400" />
                    <div>
                      <h2 className="text-2xl font-bold text-white">ENERGY/USDC</h2>
                      <p className="text-gray-400 text-sm">Energy Token</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">${marketData.currentPrice}</p>
                  <div className={`flex items-center justify-end ${marketData.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {marketData.change24h >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    <span className="font-semibold ml-1">{marketData.change24h}%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">24h High</p>
                  <p className="text-white font-semibold">${marketData.high24h}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">24h Low</p>
                  <p className="text-white font-semibold">${marketData.low24h}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">24h Volume</p>
                  <p className="text-white font-semibold">${(marketData.volume24h / 1000000).toFixed(2)}M</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Market Cap</p>
                  <p className="text-white font-semibold">${(marketData.marketCap / 1000000).toFixed(0)}M</p>
                </div>
              </div>
            </motion.div>

            {/* Price Chart Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Price Chart</h3>
                <div className="flex space-x-2">
                  {['1H', '4H', '1D', '1W', '1M'].map((timeframe) => (
                    <button
                      key={timeframe}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-gray-400 rounded hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64 flex items-center justify-center bg-slate-700/30 rounded-lg">
                <BarChart3 className="h-16 w-16 text-gray-600" />
                <p className="text-gray-500 ml-4">Interactive chart coming soon</p>
              </div>
            </motion.div>

            {/* Order Book & Recent Trades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Order Book */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">Order Book</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Asks</p>
                    <div className="space-y-1">
                      {orderBook.asks.map((ask, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-red-400">${ask.price}</span>
                          <span className="text-gray-400">{ask.amount.toLocaleString()}</span>
                          <span className="text-white">${ask.total.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-gray-400 text-sm mb-2">Bids</p>
                    <div className="space-y-1">
                      {orderBook.bids.map((bid, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-green-400">${bid.price}</span>
                          <span className="text-gray-400">{bid.amount.toLocaleString()}</span>
                          <span className="text-white">${bid.total.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Recent Trades */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">Recent Trades</h3>
                <div className="space-y-1">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className={trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}>
                        ${trade.price}
                      </span>
                      <span className="text-gray-400">{trade.amount.toLocaleString()}</span>
                      <span className="text-gray-500">{trade.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Trading Panel */}
          <div className="space-y-6">
            {/* Trading Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
            >
              {/* Trade Type Tabs */}
              <div className="flex space-x-2 mb-6">
                {(['buy', 'sell', 'swap'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setTradeType(type)}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${
                      tradeType === type
                        ? type === 'buy'
                          ? 'bg-green-500/20 text-green-400'
                          : type === 'sell'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-blue-500/20 text-blue-400'
                        : 'bg-slate-700/50 text-gray-400'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              {/* Order Type */}
              <div className="flex space-x-2 mb-4">
                {(['market', 'limit'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`flex-1 py-2 rounded-lg text-sm transition-colors ${
                      orderType === type
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-700/30 text-gray-400'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              {/* Trading Form Fields */}
              <div className="space-y-4">
                {orderType === 'limit' && (
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Price (USDC)</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="0.0000"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                      />
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        USDC
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Amount (ENERGY)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <button className="text-gray-400 hover:text-white">25%</button>
                      <button className="text-gray-400 hover:text-white">50%</button>
                      <button className="text-gray-400 hover:text-white">Max</button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Total (USDC)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount ? (parseFloat(amount) * (orderType === 'limit' && price ? parseFloat(price) : marketData.currentPrice)).toFixed(2) : ''}
                      readOnly
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-lg text-white"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      USDC
                    </span>
                  </div>
                </div>

                {/* Balance Info */}
                <div className="bg-slate-700/30 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Available Balance</span>
                    <span className="text-white">
                      {tradeType === 'buy' ? '5,000 USDC' : '500,000 ENERGY'}
                    </span>
                  </div>
                </div>

                {/* Trade Button */}
                <button
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${
                    tradeType === 'buy'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500'
                      : tradeType === 'sell'
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500'
                  }`}
                >
                  {tradeType === 'buy' ? 'Buy ENERGY' : tradeType === 'sell' ? 'Sell ENERGY' : 'Swap Tokens'}
                </button>

                {/* Fee Info */}
                <div className="bg-slate-700/30 rounded-lg p-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Trading Fee</span>
                      <span className="text-white">0.1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Network Fee</span>
                      <span className="text-white">~0.001 SOL</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Open Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Open Orders</h3>
              <div className="space-y-3">
                {openOrders.map((order) => (
                  <div key={order.id} className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          order.side === 'buy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {order.side.toUpperCase()}
                        </span>
                        <span className="ml-2 text-gray-400 text-xs">{order.type}</span>
                      </div>
                      <button className="text-gray-400 hover:text-red-400 transition-colors">
                        <Minus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price</span>
                        <span className="text-white">${order.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Amount</span>
                        <span className="text-white">{order.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Filled</span>
                        <span className="text-white">{((order.filled / order.amount) * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trading Pairs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Trading Pairs</h3>
              <div className="space-y-2">
                {tradingPairs.map((pair) => (
                  <button
                    key={pair.pair}
                    className="w-full bg-slate-700/30 hover:bg-slate-700/50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <p className="text-white font-semibold">{pair.pair}</p>
                        <p className="text-gray-400 text-sm">Vol: ${(pair.volume / 1000000).toFixed(2)}M</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white">${pair.price}</p>
                        <p className={`text-sm ${pair.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {pair.change >= 0 ? '+' : ''}{pair.change}%
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}