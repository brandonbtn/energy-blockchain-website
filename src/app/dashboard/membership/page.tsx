'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Crown,
  Zap,
  TrendingUp,
  Briefcase,
  Check,
  X,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  CreditCard,
  Download,
  AlertCircle,
  Star,
  Shield,
  Trophy,
  Clock,
  Users,
  BarChart3,
  Sparkles,
  ChevronRight
} from 'lucide-react'

interface TierFeature {
  name: string
  included: boolean
  value?: string
}

interface MembershipTier {
  name: string
  price: number
  period: string
  icon: any
  color: string
  features: string[]
}

export default function MembershipManagementPage() {
  const router = useRouter()
  const [currentTier, setCurrentTier] = useState('starter')
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [selectedUpgradeTier, setSelectedUpgradeTier] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get current tier from localStorage
    const storedTier = localStorage.getItem('membershipTier')
    if (storedTier) {
      setCurrentTier(storedTier)
    }
  }, [])

  const tiers: Record<string, MembershipTier> = {
    starter: {
      name: 'Starter',
      price: 0,
      period: 'Forever',
      icon: Zap,
      color: 'from-gray-500 to-gray-600',
      features: [
        'Basic Dashboard Access',
        'Up to 3 assets tracking',
        '10 trades per month',
        'Community forum access',
        'Email support (72hr response)'
      ]
    },
    growth: {
      name: 'Growth',
      price: billingPeriod === 'monthly' ? 29 : 24,
      period: billingPeriod === 'monthly' ? '/month' : '/month (billed yearly)',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Everything in Starter',
        'Up to 20 assets tracking',
        '100 trades per month',
        'Real-time market data',
        'API access (1,000 calls/day)',
        'Advanced analytics',
        'Custom alerts (up to 10)',
        'Quarterly tax reports',
        '+2% APY staking boost'
      ]
    },
    professional: {
      name: 'Professional',
      price: billingPeriod === 'monthly' ? 99 : 79,
      period: billingPeriod === 'monthly' ? '/month' : '/month (billed yearly)',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Everything in Growth',
        'Unlimited assets tracking',
        'Unlimited trades',
        'Level 2 market data',
        'API access (10,000 calls/day)',
        'Priority phone support',
        'Custom alerts (up to 50)',
        'Monthly tax reports',
        '+5% APY staking boost',
        'Early access to features'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 499,
      period: '/month (custom billing)',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Everything in Professional',
        'Multi-account management',
        'Ultra-low latency data',
        'OTC trading desk access',
        'Unlimited API calls',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom reports & analytics',
        '+10% APY staking boost',
        'Beta feature access',
        'White-label options'
      ]
    }
  }

  const billingHistory = [
    { date: 'Nov 1, 2024', amount: '$0.00', status: 'Current', plan: 'Starter', invoice: '#INV-2024-011' },
    { date: 'Oct 1, 2024', amount: '$0.00', status: 'Paid', plan: 'Starter', invoice: '#INV-2024-010' },
    { date: 'Sep 1, 2024', amount: '$0.00', status: 'Paid', plan: 'Starter', invoice: '#INV-2024-009' }
  ]

  const usageStats = {
    trades: { used: 5, limit: 10, percentage: 50 },
    assets: { used: 2, limit: 3, percentage: 67 },
    apiCalls: { used: 0, limit: 0, percentage: 0 },
    alerts: { used: 0, limit: 0, percentage: 0 }
  }

  const handleUpgrade = (tierName: string) => {
    setSelectedUpgradeTier(tierName)
    setShowUpgradeModal(true)
  }

  const confirmUpgrade = () => {
    localStorage.setItem('membershipTier', selectedUpgradeTier)
    setCurrentTier(selectedUpgradeTier)
    setShowUpgradeModal(false)
    // In production, this would process payment
    alert(`Successfully upgraded to ${tiers[selectedUpgradeTier].name} plan!`)
  }

  const CurrentTierIcon = tiers[currentTier].icon

  if (!mounted) return null

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Membership</h1>
        <p className="text-gray-400">Manage your subscription and billing</p>
      </div>

      {/* Current Plan Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-gray-400 text-sm mb-2">Current Plan</p>
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${tiers[currentTier].color}`}>
                <CurrentTierIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{tiers[currentTier].name}</h2>
                <p className="text-gray-400">
                  ${tiers[currentTier].price} {tiers[currentTier].period}
                </p>
              </div>
            </div>
          </div>
          {currentTier !== 'enterprise' && (
            <button
              onClick={() => handleUpgrade(currentTier === 'starter' ? 'growth' : currentTier === 'growth' ? 'professional' : 'enterprise')}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-200 flex items-center space-x-2"
            >
              <ArrowUpRight className="h-4 w-4" />
              <span>Upgrade Plan</span>
            </button>
          )}
        </div>

        {/* Plan Features */}
        <div className="border-t border-slate-700 pt-6">
          <p className="text-sm text-gray-400 mb-4">Plan Features</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tiers[currentTier].features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Billing */}
        <div className="mt-6 p-4 bg-slate-900/50 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Next billing date</p>
              <p className="text-white font-medium">
                {currentTier === 'starter' ? 'No billing - Free plan' : 'December 1, 2024'}
              </p>
            </div>
          </div>
          {currentTier !== 'starter' && (
            <button className="text-red-400 hover:text-red-300 text-sm font-medium">
              Cancel Subscription
            </button>
          )}
        </div>
      </motion.div>

      {/* Usage Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6"
      >
        <h3 className="text-lg font-bold text-white mb-4">Usage This Month</h3>

        <div className="space-y-4">
          {/* Trades Usage */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Trades Executed</span>
              <span className="text-sm text-white">{usageStats.trades.used} / {usageStats.trades.limit}</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${usageStats.trades.percentage}%` }}
              />
            </div>
          </div>

          {/* Assets Tracked */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Assets Tracked</span>
              <span className="text-sm text-white">{usageStats.assets.used} / {usageStats.assets.limit}</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${usageStats.assets.percentage}%` }}
              />
            </div>
          </div>

          {currentTier === 'starter' && (
            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-400 font-medium">Approaching Limits</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Upgrade to Growth plan for 100 trades/month and 20 assets tracking
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Available Plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-bold text-white mb-4">Available Plans</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(tiers).map(([key, tier]) => {
            const Icon = tier.icon
            const isCurrent = key === currentTier
            const isDowngrade = ['starter', 'growth', 'professional'].indexOf(key) < ['starter', 'growth', 'professional'].indexOf(currentTier)

            return (
              <div
                key={key}
                className={`bg-slate-800/50 backdrop-blur-xl border rounded-xl p-4 relative ${
                  isCurrent ? 'border-green-500' : 'border-slate-700'
                }`}
              >
                {isCurrent && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      CURRENT PLAN
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center mb-3`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{tier.name}</h4>
                  <p className="text-2xl font-bold text-white mt-2">
                    ${tier.price}
                    <span className="text-sm text-gray-400 font-normal ml-1">{tier.period}</span>
                  </p>
                </div>

                {!isCurrent && (
                  <button
                    onClick={() => handleUpgrade(key)}
                    className={`w-full py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isDowngrade
                        ? 'bg-slate-700 text-gray-400 cursor-not-allowed'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                    disabled={isDowngrade}
                  >
                    {isDowngrade ? (
                      <>
                        <ArrowDownRight className="h-4 w-4" />
                        <span>Downgrade</span>
                      </>
                    ) : (
                      <>
                        <ArrowUpRight className="h-4 w-4" />
                        <span>Upgrade</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Billing History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden"
      >
        <div className="p-6 border-b border-slate-700">
          <h3 className="text-lg font-bold text-white">Billing History</h3>
        </div>

        <div className="divide-y divide-slate-700">
          {billingHistory.map((item, index) => (
            <div key={index} className="p-4 hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-medium">{item.invoice}</p>
                    <p className="text-sm text-gray-400">{item.date} • {item.plan} Plan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-white font-medium">{item.amount}</p>
                    <p className={`text-sm ${item.status === 'Current' ? 'text-green-400' : 'text-gray-400'}`}>
                      {item.status}
                    </p>
                  </div>
                  <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                    <Download className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-700">
          <button className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center space-x-2">
            <span>View All Invoices</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      {/* Upgrade Modal */}
      {showUpgradeModal && selectedUpgradeTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowUpgradeModal(false)} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-md w-full"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Confirm Upgrade</h3>
              <p className="text-gray-400">
                Upgrade to {tiers[selectedUpgradeTier].name} plan for ${tiers[selectedUpgradeTier].price}{tiers[selectedUpgradeTier].period}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-400 font-medium mb-1">What you'll get:</p>
                <ul className="space-y-1">
                  {tiers[selectedUpgradeTier].features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmUpgrade}
                className="flex-1 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-200"
              >
                Confirm Upgrade
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}