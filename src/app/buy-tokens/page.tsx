'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Zap,
  CreditCard,
  Building,
  Smartphone,
  Bitcoin,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  Globe,
  Lock,
  Clock,
  Award,
  Users,
  BarChart3,
  DollarSign,
  Euro,
  PoundSterling,
  AlertCircle,
  Sparkles,
  Star
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface PaymentMethod {
  id: string
  name: string
  description: string
  icon: any
  color: string
  fee: string
  time: string
  min: number
  max: number
  popular?: boolean
}

export default function BuyTokensPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<string>('card')
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      icon: CreditCard,
      color: 'from-blue-500 to-blue-600',
      fee: '2.9% + $0.30',
      time: 'Instant',
      min: 10,
      max: 50000,
      popular: true
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'ACH, Wire Transfer, SEPA',
      icon: Building,
      color: 'from-green-500 to-green-600',
      fee: '0.8%',
      time: '1-3 days',
      min: 100,
      max: 100000
    },
    {
      id: 'etransfer',
      name: 'Interac e-Transfer',
      description: 'Canadian banks only',
      icon: Smartphone,
      color: 'from-purple-500 to-purple-600',
      fee: '$1.50 flat',
      time: '30 minutes',
      min: 50,
      max: 10000
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      description: 'BTC, ETH, USDT, USDC',
      icon: Bitcoin,
      color: 'from-orange-500 to-orange-600',
      fee: '1%',
      time: '10-30 minutes',
      min: 50,
      max: 500000
    }
  ]

  const currencies = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' },
    { code: 'CAD', symbol: 'C$' }
  ]

  const quickAmounts = [100, 500, 1000, 5000, 10000, 25000]

  const tokenPrice = 8.25 // Mock price
  const tokenAmount = amount ? (parseFloat(amount) / tokenPrice).toFixed(2) : '0.00'

  const handlePurchase = async () => {
    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setStep(3) // Success step
    }, 2000)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ChevronLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Limited Time: 10% Bonus on First Purchase</span>
            </div>

            <h1 className="text-5xl font-bold text-white mb-6">
              Buy ENERGY Tokens
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join the renewable energy revolution with instant, secure token purchases
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-400">$8.25</div>
                <div className="text-gray-400 text-sm">Current Price</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-gray-400 text-sm">Token Holders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$2.5B</div>
                <div className="text-gray-400 text-sm">Market Cap</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">+45%</div>
                <div className="text-gray-400 text-sm">30-Day Growth</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Purchase Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Purchase Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Amount Selection */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Select Amount</h3>

                  {/* Currency Selector */}
                  <div className="mb-6">
                    <label className="block text-gray-400 text-sm mb-2">Currency</label>
                    <div className="flex space-x-2">
                      {currencies.map((curr) => (
                        <button
                          key={curr.code}
                          onClick={() => setCurrency(curr.code)}
                          className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                            currency === curr.code
                              ? 'bg-green-500 text-white'
                              : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                          }`}
                        >
                          {curr.symbol} {curr.code}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div className="mb-6">
                    <label className="block text-gray-400 text-sm mb-2">Purchase Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                        {currencies.find(c => c.code === currency)?.symbol}
                      </span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white text-2xl focus:outline-none focus:border-green-500"
                      />
                    </div>

                    {/* Quick Amount Buttons */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
                      {quickAmounts.map((quickAmount) => (
                        <button
                          key={quickAmount}
                          onClick={() => setAmount(quickAmount.toString())}
                          className="py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg text-sm transition-colors"
                        >
                          {currencies.find(c => c.code === currency)?.symbol}{quickAmount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Token Calculator */}
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">You will receive</p>
                        <p className="text-3xl font-bold text-white flex items-center space-x-3 mt-1">
                          <Zap className="h-8 w-8 text-green-400" />
                          <span>{tokenAmount}</span>
                          <span className="text-gray-400 text-lg">ENERGY</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Token price</p>
                        <p className="text-xl font-bold text-green-400">${tokenPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Payment Method</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon
                      return (
                        <motion.button
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-6 rounded-xl border-2 transition-all ${
                            selectedMethod === method.id
                              ? 'bg-slate-800 border-green-500'
                              : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          {method.popular && (
                            <div className="absolute -top-3 right-4">
                              <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                POPULAR
                              </span>
                            </div>
                          )}

                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1 text-left">
                              <h4 className="text-white font-bold mb-1">{method.name}</h4>
                              <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-500">Fee: {method.fee}</span>
                                <span className="text-gray-500">{method.time}</span>
                              </div>
                              <div className="mt-2 text-xs text-gray-500">
                                Min: ${method.min} • Max: ${method.max.toLocaleString()}
                              </div>
                            </div>
                          </div>

                          {selectedMethod === method.id && (
                            <div className="absolute top-4 right-4">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            </div>
                          )}
                        </motion.button>
                      )
                    })}
                  </div>
                </div>

                {/* Purchase Button */}
                <button
                  onClick={() => setStep(2)}
                  disabled={!amount || parseFloat(amount) <= 0 || !selectedMethod}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Security Badge */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-green-400" />
                    <h4 className="text-white font-bold">Secure Transaction</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">256-bit SSL encryption</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">PCI DSS compliant</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">2FA authentication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">Fraud protection</span>
                    </li>
                  </ul>
                </div>

                {/* Why Buy ENERGY */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4">Why Buy ENERGY?</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-blue-400 mt-0.5" />
                      <div>
                        <p className="text-white font-medium text-sm">High Growth Potential</p>
                        <p className="text-gray-400 text-xs mt-1">45% growth in last 30 days</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-yellow-400 mt-0.5" />
                      <div>
                        <p className="text-white font-medium text-sm">Staking Rewards</p>
                        <p className="text-gray-400 text-xs mt-1">Earn up to 25% APY</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-purple-400 mt-0.5" />
                      <div>
                        <p className="text-white font-medium text-sm">Growing Community</p>
                        <p className="text-gray-400 text-xs mt-1">50,000+ active holders</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-white font-medium text-sm">Real-World Impact</p>
                        <p className="text-gray-400 text-xs mt-1">Supporting green energy</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4">Quick Answers</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-300 text-sm font-medium mb-1">When will I receive my tokens?</p>
                      <p className="text-gray-500 text-xs">Instantly after payment confirmation</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium mb-1">Is there a minimum purchase?</p>
                      <p className="text-gray-500 text-xs">Yes, minimum $10 for card payments</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium mb-1">Can I sell my tokens later?</p>
                      <p className="text-gray-500 text-xs">Yes, through our DEX or partner exchanges</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Payment Processing */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-6">
                    <Lock className="h-12 w-12 text-green-400" />
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">Complete Your Purchase</h2>

                  <div className="p-6 bg-slate-900/50 rounded-xl mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">Amount</span>
                      <span className="text-white font-bold text-xl">
                        {currencies.find(c => c.code === currency)?.symbol}{amount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">You Receive</span>
                      <span className="text-green-400 font-bold text-xl">{tokenAmount} ENERGY</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Payment Method</span>
                      <span className="text-white">{paymentMethods.find(m => m.id === selectedMethod)?.name}</span>
                    </div>
                  </div>

                  {!isProcessing ? (
                    <button
                      onClick={handlePurchase}
                      className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200"
                    >
                      Confirm Purchase
                    </button>
                  ) : (
                    <div className="py-8">
                      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-gray-400">Processing your payment...</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
                <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-6">
                  <CheckCircle className="h-16 w-16 text-green-400" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">Purchase Successful!</h2>
                <p className="text-gray-400 text-lg mb-8">
                  You've successfully purchased {tokenAmount} ENERGY tokens
                </p>

                <div className="p-6 bg-slate-900/50 rounded-xl mb-8">
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-gray-400 text-sm">Transaction ID</p>
                      <p className="text-white font-mono">#TX-{Date.now()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Status</p>
                      <p className="text-green-400 font-medium">Completed</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Tokens Purchased</p>
                      <p className="text-white font-bold">{tokenAmount} ENERGY</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Total Paid</p>
                      <p className="text-white font-bold">
                        {currencies.find(c => c.code === currency)?.symbol}{amount}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => router.push('/dashboard/wallet')}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-200"
                  >
                    View in Wallet
                  </button>
                  <button
                    onClick={() => {
                      setStep(1)
                      setAmount('')
                    }}
                    className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
                  >
                    Buy More
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}