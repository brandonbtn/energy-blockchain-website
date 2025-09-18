'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Check,
  X,
  Zap,
  Shield,
  Trophy,
  Crown,
  ArrowRight,
  Star,
  Sparkles,
  Rocket,
  Lock,
  Unlock,
  TrendingUp,
  Users,
  BarChart3,
  Briefcase,
  Heart,
  MessageCircle,
  Headphones,
  ChevronLeft
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
  description: string
  icon: any
  color: string
  popular?: boolean
  features: TierFeature[]
  benefits: string[]
}

export default function MembershipPage() {
  const router = useRouter()
  const [selectedTier, setSelectedTier] = useState<string>('starter')
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const tiers: MembershipTier[] = [
    {
      name: 'Starter',
      price: 0,
      period: 'Forever',
      description: 'Perfect for beginners exploring renewable energy trading',
      icon: Zap,
      color: 'from-gray-500 to-gray-600',
      features: [
        { name: 'Basic Dashboard Access', included: true },
        { name: 'Portfolio Tracking', included: true, value: 'Up to 3 assets' },
        { name: 'Market Data', included: true, value: 'Delayed 15 min' },
        { name: 'Trade Execution', included: true, value: '10 trades/month' },
        { name: 'Educational Resources', included: true },
        { name: 'Community Forum Access', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Email Support', included: true, value: '72hr response' },
        { name: 'Advanced Analytics', included: false },
        { name: 'API Access', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Custom Alerts', included: false },
        { name: 'Tax Reports', included: false },
        { name: 'Staking Rewards Boost', included: false },
        { name: 'Early Access Features', included: false }
      ],
      benefits: [
        'Access to basic trading features',
        'Learn with educational content',
        'Join our growing community'
      ]
    },
    {
      name: 'Growth',
      price: billingPeriod === 'monthly' ? 29 : 24,
      period: billingPeriod === 'monthly' ? '/month' : '/month (billed yearly)',
      description: 'For active traders ready to scale their portfolio',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-600',
      features: [
        { name: 'Basic Dashboard Access', included: true },
        { name: 'Portfolio Tracking', included: true, value: 'Up to 20 assets' },
        { name: 'Market Data', included: true, value: 'Real-time' },
        { name: 'Trade Execution', included: true, value: '100 trades/month' },
        { name: 'Educational Resources', included: true },
        { name: 'Community Forum Access', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Email Support', included: true, value: '24hr response' },
        { name: 'Advanced Analytics', included: true },
        { name: 'API Access', included: true, value: '1,000 calls/day' },
        { name: 'Priority Support', included: false },
        { name: 'Custom Alerts', included: true, value: 'Up to 10' },
        { name: 'Tax Reports', included: true, value: 'Quarterly' },
        { name: 'Staking Rewards Boost', included: true, value: '+2% APY' },
        { name: 'Early Access Features', included: false }
      ],
      benefits: [
        'Real-time market data',
        'Advanced trading analytics',
        'API access for automation',
        'Quarterly tax reports'
      ]
    },
    {
      name: 'Professional',
      price: billingPeriod === 'monthly' ? 99 : 79,
      period: billingPeriod === 'monthly' ? '/month' : '/month (billed yearly)',
      description: 'Complete toolkit for professional energy traders',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-600',
      popular: true,
      features: [
        { name: 'Basic Dashboard Access', included: true },
        { name: 'Portfolio Tracking', included: true, value: 'Unlimited' },
        { name: 'Market Data', included: true, value: 'Real-time + Level 2' },
        { name: 'Trade Execution', included: true, value: 'Unlimited' },
        { name: 'Educational Resources', included: true },
        { name: 'Community Forum Access', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Email Support', included: true, value: 'Priority 1hr' },
        { name: 'Advanced Analytics', included: true },
        { name: 'API Access', included: true, value: '10,000 calls/day' },
        { name: 'Priority Support', included: true, value: 'Phone + Chat' },
        { name: 'Custom Alerts', included: true, value: 'Up to 50' },
        { name: 'Tax Reports', included: true, value: 'Monthly + Annual' },
        { name: 'Staking Rewards Boost', included: true, value: '+5% APY' },
        { name: 'Early Access Features', included: true }
      ],
      benefits: [
        'Unlimited trading & tracking',
        'Level 2 market depth data',
        'Priority phone support',
        'Early access to new features',
        '5% staking rewards boost'
      ]
    },
    {
      name: 'Enterprise',
      price: 499,
      period: billingPeriod === 'monthly' ? '/month' : '/month (custom billing)',
      description: 'Custom solutions for institutions and high-volume traders',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      features: [
        { name: 'Basic Dashboard Access', included: true },
        { name: 'Portfolio Tracking', included: true, value: 'Unlimited + Multi-account' },
        { name: 'Market Data', included: true, value: 'Ultra-low latency' },
        { name: 'Trade Execution', included: true, value: 'Unlimited + OTC desk' },
        { name: 'Educational Resources', included: true },
        { name: 'Community Forum Access', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Email Support', included: true, value: 'Dedicated manager' },
        { name: 'Advanced Analytics', included: true, value: 'Custom reports' },
        { name: 'API Access', included: true, value: 'Unlimited' },
        { name: 'Priority Support', included: true, value: '24/7 dedicated' },
        { name: 'Custom Alerts', included: true, value: 'Unlimited' },
        { name: 'Tax Reports', included: true, value: 'Custom + Audit support' },
        { name: 'Staking Rewards Boost', included: true, value: '+10% APY' },
        { name: 'Early Access Features', included: true, value: 'Beta access' }
      ],
      benefits: [
        'White-glove onboarding',
        'Dedicated account manager',
        'Custom API integrations',
        'OTC trading desk access',
        'Institutional-grade security',
        '10% staking rewards boost'
      ]
    }
  ]

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName.toLowerCase())
    // Store selected tier in localStorage
    localStorage.setItem('selectedTier', tierName.toLowerCase())
    // Redirect to signup with tier
    router.push(`/signup?tier=${tierName.toLowerCase()}`)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <ChevronLeft className="h-5 w-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold text-white">
                  ENERGY <span className="text-green-400">Membership</span>
                </span>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white">
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Choose Your Trading Journey</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Unlock the Full Power of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600"> ENERGY Trading</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders revolutionizing renewable energy markets.
              Choose the plan that fits your trading goals.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-slate-700 rounded-full transition-colors"
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-green-500 rounded-full"
                  animate={{ left: billingPeriod === 'monthly' ? 4 : 36 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </button>
              <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-xl border rounded-2xl p-6 ${
                    tier.popular ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-slate-700'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>MOST POPULAR</span>
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">${tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-6 pb-6 border-b border-slate-700">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Key Benefits</p>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features List */}
                  <div className="mb-6 space-y-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">All Features</p>
                    {tier.features.slice(0, 8).map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <X className="h-4 w-4 text-gray-600" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature.name}
                          </span>
                        </div>
                        {feature.value && feature.included && (
                          <span className="text-xs text-green-400">{feature.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectTier(tier.name)}
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500'
                        : tier.name === 'Starter'
                        ? 'bg-slate-700 text-white hover:bg-slate-600'
                        : 'bg-slate-800 border border-slate-600 text-white hover:bg-slate-700'
                    }`}
                  >
                    <span>{tier.name === 'Starter' ? 'Start Free' : 'Choose Plan'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400 text-sm">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$2.5B+</div>
              <div className="text-gray-400 text-sm">Trading Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Can I change my plan later?</h3>
              <p className="text-gray-400">Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards, crypto payments (USDT, USDC, ETH), and wire transfers for Enterprise plans.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Is there a free trial for paid plans?</h3>
              <p className="text-gray-400">Yes! All paid plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">How does the staking rewards boost work?</h3>
              <p className="text-gray-400">Your membership tier provides an additional APY boost on all staking positions. This is added to the base staking rewards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}