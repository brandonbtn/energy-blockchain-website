'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wallet,
  CreditCard,
  Building,
  Smartphone,
  Bitcoin,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Shield,
  TrendingUp,
  DollarSign,
  Euro,
  PoundSterling,
  Zap,
  ChevronRight,
  Copy,
  ExternalLink,
  QrCode,
  Download,
  Upload,
  RefreshCw,
  Lock
} from 'lucide-react'

interface PaymentMethod {
  id: string
  type: 'card' | 'bank' | 'etransfer' | 'crypto'
  name: string
  last4?: string
  expiry?: string
  email?: string
  wallet?: string
  icon: any
  default?: boolean
}

interface Transaction {
  id: string
  type: 'deposit' | 'withdrawal' | 'purchase' | 'sale'
  amount: number
  currency: string
  status: 'completed' | 'pending' | 'failed'
  method: string
  date: string
  txHash?: string
}

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'deposit' | 'withdraw' | 'buy'>('overview')
  const [selectedMethod, setSelectedMethod] = useState<string>('')
  const [amount, setAmount] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [showAddPayment, setShowAddPayment] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Mock wallet data
  const walletBalance = {
    energy: 15234.67,
    usd: 125430.50,
    btc: 0.425,
    eth: 8.234
  }

  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'card',
      name: 'Visa',
      last4: '4242',
      expiry: '12/25',
      icon: CreditCard,
      default: true
    },
    {
      id: '2',
      type: 'card',
      name: 'Mastercard',
      last4: '5555',
      expiry: '08/26',
      icon: CreditCard
    },
    {
      id: '3',
      type: 'bank',
      name: 'Bank Account',
      last4: '6789',
      icon: Building
    },
    {
      id: '4',
      type: 'etransfer',
      name: 'Interac e-Transfer',
      email: 'user@example.com',
      icon: Smartphone
    }
  ]

  const recentTransactions: Transaction[] = [
    {
      id: '1',
      type: 'deposit',
      amount: 5000,
      currency: 'USD',
      status: 'completed',
      method: 'Visa ****4242',
      date: '2024-01-15 14:30'
    },
    {
      id: '2',
      type: 'purchase',
      amount: 1000,
      currency: 'ENERGY',
      status: 'completed',
      method: 'USD Balance',
      date: '2024-01-14 09:15',
      txHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385'
    },
    {
      id: '3',
      type: 'withdrawal',
      amount: 2500,
      currency: 'USD',
      status: 'pending',
      method: 'Bank ****6789',
      date: '2024-01-13 16:45'
    }
  ]

  const currencies = [
    { code: 'USD', symbol: '$', icon: DollarSign },
    { code: 'EUR', symbol: '€', icon: Euro },
    { code: 'GBP', symbol: '£', icon: PoundSterling },
    { code: 'CAD', symbol: 'C$', icon: DollarSign }
  ]

  const cryptoOptions = [
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.00 },
    { symbol: 'ETH', name: 'Ethereum', price: 2280.50 },
    { symbol: 'USDT', name: 'Tether', price: 1.00 },
    { symbol: 'USDC', name: 'USD Coin', price: 1.00 }
  ]

  const handleDeposit = () => {
    // Simulate deposit processing
    console.log('Processing deposit:', { amount, method: selectedMethod, currency: selectedCurrency })
  }

  const handleBuyTokens = () => {
    // Simulate token purchase
    const energyAmount = parseFloat(amount) / 8.25 // Mock ENERGY price
    console.log('Buying ENERGY tokens:', energyAmount)
  }

  if (!mounted) return null

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Wallet & Payments</h1>
        <p className="text-gray-400">Manage your funds and payment methods</p>
      </div>

      {/* Wallet Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-green-100 text-sm mb-1">ENERGY Token Balance</p>
              <h2 className="text-4xl font-bold">{walletBalance.energy.toLocaleString()}</h2>
              <p className="text-green-100 mt-2">
                ≈ ${(walletBalance.energy * 8.25).toLocaleString()} USD
              </p>
            </div>
            <div className="p-3 bg-white/20 rounded-xl">
              <Zap className="h-6 w-6" />
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setActiveTab('deposit')}
              className="flex-1 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <ArrowDownLeft className="h-4 w-4" />
              <span>Deposit</span>
            </button>
            <button
              onClick={() => setActiveTab('buy')}
              className="flex-1 py-2 bg-white hover:bg-green-50 text-green-600 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Buy ENERGY</span>
            </button>
          </div>
        </motion.div>

        {/* USD Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">USD Balance</p>
              <h3 className="text-2xl font-bold text-white">
                ${walletBalance.usd.toLocaleString()}
              </h3>
            </div>
            <DollarSign className="h-5 w-5 text-blue-400" />
          </div>
          <button
            onClick={() => setActiveTab('deposit')}
            className="w-full py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg text-sm font-medium transition-colors"
          >
            Add Funds
          </button>
        </motion.div>

        {/* Crypto Holdings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Crypto Holdings</p>
              <h3 className="text-2xl font-bold text-white">
                ${((walletBalance.btc * 43250) + (walletBalance.eth * 2280)).toLocaleString()}
              </h3>
            </div>
            <Bitcoin className="h-5 w-5 text-orange-400" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">BTC</span>
              <span className="text-white">{walletBalance.btc}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">ETH</span>
              <span className="text-white">{walletBalance.eth}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-800/30 p-1 rounded-lg max-w-fit">
        {['overview', 'deposit', 'withdraw', 'buy'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 capitalize ${
              activeTab === tab
                ? 'bg-green-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab === 'buy' ? 'Buy Tokens' : tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Payment Methods */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Payment Methods</h3>
                <button
                  onClick={() => setShowAddPayment(true)}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Method</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <div
                      key={method.id}
                      className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-slate-800 rounded-lg">
                          <Icon className="h-5 w-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            {method.name} {method.last4 && `****${method.last4}`}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {method.expiry || method.email || 'Connected'}
                          </p>
                        </div>
                      </div>
                      {method.default && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
              </div>

              <div className="divide-y divide-slate-700">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="p-4 hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          tx.type === 'deposit' ? 'bg-green-500/20' :
                          tx.type === 'withdrawal' ? 'bg-red-500/20' :
                          tx.type === 'purchase' ? 'bg-blue-500/20' :
                          'bg-yellow-500/20'
                        }`}>
                          {tx.type === 'deposit' || tx.type === 'purchase' ? (
                            <ArrowDownLeft className={`h-4 w-4 ${
                              tx.type === 'deposit' ? 'text-green-400' : 'text-blue-400'
                            }`} />
                          ) : (
                            <ArrowUpRight className={`h-4 w-4 ${
                              tx.type === 'withdrawal' ? 'text-red-400' : 'text-yellow-400'
                            }`} />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium capitalize">{tx.type}</p>
                          <p className="text-gray-400 text-sm">{tx.method} • {tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${
                          tx.type === 'deposit' || tx.type === 'sale' ? 'text-green-400' : 'text-white'
                        }`}>
                          {tx.type === 'deposit' || tx.type === 'sale' ? '+' : '-'}
                          {tx.amount.toLocaleString()} {tx.currency}
                        </p>
                        <div className="flex items-center justify-end space-x-2 mt-1">
                          {tx.status === 'completed' && <CheckCircle className="h-3 w-3 text-green-400" />}
                          {tx.status === 'pending' && <Clock className="h-3 w-3 text-yellow-400" />}
                          {tx.status === 'failed' && <XCircle className="h-3 w-3 text-red-400" />}
                          <span className={`text-xs ${
                            tx.status === 'completed' ? 'text-green-400' :
                            tx.status === 'pending' ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    {tx.txHash && (
                      <div className="mt-2 flex items-center space-x-2">
                        <span className="text-xs text-gray-500">TX:</span>
                        <span className="text-xs text-gray-400 font-mono">
                          {tx.txHash.slice(0, 10)}...{tx.txHash.slice(-8)}
                        </span>
                        <ExternalLink className="h-3 w-3 text-gray-500 cursor-pointer hover:text-gray-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'deposit' && (
          <motion.div
            key="deposit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Deposit Form */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Add Funds to Wallet</h3>

                {/* Amount Input */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Amount</label>
                  <div className="relative">
                    <select
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-transparent text-gray-400 focus:outline-none"
                    >
                      {currencies.map(curr => (
                        <option key={curr.code} value={curr.code}>{curr.code}</option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-20 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white text-lg focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="flex space-x-2 mt-3">
                    {[100, 500, 1000, 5000].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setAmount(preset.toString())}
                        className="flex-1 py-1 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded text-sm transition-colors"
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Payment Method</label>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon
                      return (
                        <label
                          key={method.id}
                          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                            selectedMethod === method.id
                              ? 'bg-green-500/10 border-green-500'
                              : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="payment-method"
                              value={method.id}
                              checked={selectedMethod === method.id}
                              onChange={(e) => setSelectedMethod(e.target.value)}
                              className="text-green-500 focus:ring-green-500"
                            />
                            <Icon className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="text-white font-medium">
                                {method.name} {method.last4 && `****${method.last4}`}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {method.expiry || method.email || 'Connected'}
                              </p>
                            </div>
                          </div>
                          {method.default && (
                            <span className="text-xs text-green-400">Default</span>
                          )}
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* Deposit Button */}
                <button
                  onClick={handleDeposit}
                  disabled={!amount || !selectedMethod}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Shield className="h-5 w-5" />
                  <span>Deposit {selectedCurrency} {amount || '0'}</span>
                </button>

                {/* Security Notice */}
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-blue-400 mt-0.5" />
                    <div className="text-xs text-gray-300">
                      <p className="font-medium text-blue-400 mb-1">Secure Transaction</p>
                      <p>Your payment is processed through bank-level encryption. Funds typically arrive within 1-3 business days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crypto Deposit */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Crypto Deposit</h3>

                <div className="text-center py-8">
                  <div className="inline-flex p-6 bg-white rounded-xl mb-4">
                    <QrCode className="h-32 w-32 text-black" />
                  </div>

                  <p className="text-gray-400 text-sm mb-4">Scan QR code or copy address below</p>

                  <div className="flex items-center space-x-2 p-3 bg-slate-900 rounded-lg">
                    <input
                      type="text"
                      value="0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af"
                      readOnly
                      className="flex-1 bg-transparent text-white text-xs font-mono focus:outline-none"
                    />
                    <button className="p-1 hover:bg-slate-800 rounded transition-colors">
                      <Copy className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>

                  <div className="mt-6 space-y-2 text-left">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">Supports BTC, ETH, USDT, USDC</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">Minimum deposit: $50</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">No fees for deposits over $1000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'buy' && (
          <motion.div
            key="buy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Buy Form */}
              <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Buy ENERGY Tokens</h3>

                {/* Token Price Card */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <Zap className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">ENERGY Token</p>
                        <p className="text-gray-400 text-sm">Current Price</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">$8.25</p>
                      <p className="text-green-400 text-sm flex items-center justify-end">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +5.2% (24h)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Purchase Amount */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">You Pay</label>
                  <div className="relative">
                    <select
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-transparent text-gray-400 focus:outline-none"
                    >
                      {currencies.map(curr => (
                        <option key={curr.code} value={curr.code}>{curr.code}</option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-20 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white text-lg focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* You Receive */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">You Receive</label>
                  <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-6 w-6 text-green-400" />
                        <span className="text-2xl font-bold text-white">
                          {amount ? (parseFloat(amount) / 8.25).toFixed(2) : '0.00'}
                        </span>
                        <span className="text-gray-400">ENERGY</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Payment Method</label>
                  <select
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                  >
                    <option value="">Select payment method</option>
                    {paymentMethods.map((method) => (
                      <option key={method.id} value={method.id}>
                        {method.name} {method.last4 && `****${method.last4}`}
                      </option>
                    ))}
                    <option value="balance">USD Balance (${walletBalance.usd.toLocaleString()})</option>
                  </select>
                </div>

                {/* Buy Button */}
                <button
                  onClick={handleBuyTokens}
                  disabled={!amount || !selectedMethod}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Zap className="h-5 w-5" />
                  <span>Buy ENERGY Tokens</span>
                </button>

                {/* Info */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Network Fee</span>
                    <span className="text-white">$2.50</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Processing Time</span>
                    <span className="text-white">~5 minutes</span>
                  </div>
                </div>
              </div>

              {/* Market Info */}
              <div className="space-y-4">
                {/* Quick Buy Options */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                  <h4 className="text-white font-medium mb-4">Quick Buy</h4>
                  <div className="space-y-2">
                    {[100, 500, 1000, 5000].map((value) => (
                      <button
                        key={value}
                        onClick={() => setAmount(value.toString())}
                        className="w-full p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-700 rounded-lg transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white">${value}</span>
                          <span className="text-gray-400">
                            ≈ {(value / 8.25).toFixed(0)} ENERGY
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                  <h4 className="text-white font-medium mb-4">Token Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-gray-300 text-sm">Staking Rewards</p>
                        <p className="text-gray-500 text-xs">Earn up to 25% APY</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-gray-300 text-sm">Trading Fee Discounts</p>
                        <p className="text-gray-500 text-xs">Save 20% on all trades</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-gray-300 text-sm">Governance Rights</p>
                        <p className="text-gray-500 text-xs">Vote on platform decisions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'withdraw' && (
          <motion.div
            key="withdraw"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-6">Withdraw Funds</h3>
            <div className="text-center py-12">
              <Lock className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-2">Withdrawal Feature Coming Soon</p>
              <p className="text-gray-500 text-sm">
                We're working on enabling secure withdrawals. This feature will be available shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Payment Method Modal */}
      {showAddPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowAddPayment(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-white mb-6">Add Payment Method</h3>

            <div className="space-y-4">
              <button className="w-full p-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                  <div className="text-left">
                    <p className="text-white font-medium">Credit/Debit Card</p>
                    <p className="text-gray-400 text-sm">Visa, Mastercard, Amex</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </button>

              <button className="w-full p-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-green-400" />
                  <div className="text-left">
                    <p className="text-white font-medium">Bank Account</p>
                    <p className="text-gray-400 text-sm">ACH Transfer</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </button>

              <button className="w-full p-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-5 w-5 text-purple-400" />
                  <div className="text-left">
                    <p className="text-white font-medium">Interac e-Transfer</p>
                    <p className="text-gray-400 text-sm">Canadian banks only</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </button>

              <button className="w-full p-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Bitcoin className="h-5 w-5 text-orange-400" />
                  <div className="text-left">
                    <p className="text-white font-medium">Cryptocurrency</p>
                    <p className="text-gray-400 text-sm">BTC, ETH, USDT, USDC</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </button>
            </div>

            <button
              onClick={() => setShowAddPayment(false)}
              className="mt-6 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}