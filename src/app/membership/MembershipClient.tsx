'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import '@/lib/i18n-client'
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

export default function MembershipClient() {
  const router = useRouter()
  const { t, ready } = useTranslation()
  const [selectedTier, setSelectedTier] = useState<string>('starter')
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const tiers: MembershipTier[] = [
    {
      name: mounted && ready ? t('membership.starter') : 'Starter',
      price: 0,
      period: mounted && ready ? t('membership.forever') : 'Forever',
      description: mounted && ready ? t('membership.starterDesc') : 'Perfect for beginners exploring renewable energy trading',
      icon: Zap,
      color: 'from-gray-500 to-gray-600',
      features: [
        { name: mounted && ready ? t('membership.basicDashboard') : 'Basic Dashboard Access', included: true },
        { name: mounted && ready ? t('membership.portfolioTracking') : 'Portfolio Tracking', included: true, value: mounted && ready ? t('membership.upTo3Assets') : 'Up to 3 assets' },
        { name: mounted && ready ? t('membership.marketData') : 'Market Data', included: true, value: mounted && ready ? t('membership.delayed15min') : 'Delayed 15 min' },
        { name: mounted && ready ? t('membership.tradeExecution') : 'Trade Execution', included: true, value: mounted && ready ? t('membership.10trades') : '10 trades/month' },
        { name: mounted && ready ? t('membership.educationalResources') : 'Educational Resources', included: true },
        { name: mounted && ready ? t('membership.communityForum') : 'Community Forum Access', included: true },
        { name: mounted && ready ? t('membership.mobileApp') : 'Mobile App Access', included: true },
        { name: mounted && ready ? t('membership.emailSupport') : 'Email Support', included: true, value: mounted && ready ? t('membership.72hrResponse') : '72hr response' },
        { name: mounted && ready ? t('membership.advancedAnalytics') : 'Advanced Analytics', included: false },
        { name: mounted && ready ? t('membership.apiAccess') : 'API Access', included: false },
        { name: mounted && ready ? t('membership.prioritySupport') : 'Priority Support', included: false },
        { name: mounted && ready ? t('membership.customAlerts') : 'Custom Alerts', included: false },
        { name: mounted && ready ? t('membership.taxReports') : 'Tax Reports', included: false },
        { name: mounted && ready ? t('membership.stakingBoost') : 'Staking Rewards Boost', included: false },
        { name: mounted && ready ? t('membership.earlyAccess') : 'Early Access Features', included: false }
      ],
      benefits: [
        mounted && ready ? t('membership.starterBenefit1') : 'Access to basic trading features',
        mounted && ready ? t('membership.starterBenefit2') : 'Learn with educational content',
        mounted && ready ? t('membership.starterBenefit3') : 'Join our growing community'
      ]
    },
    {
      name: mounted && ready ? t('membership.growth') : 'Growth',
      price: billingPeriod === 'monthly' ? 29 : 24,
      period: billingPeriod === 'monthly' ? (mounted && ready ? t('membership.month') : '/month') : (mounted && ready ? t('membership.yearBilled') : '/month (billed yearly)'),
      description: mounted && ready ? t('membership.growthDesc') : 'For active traders ready to scale their portfolio',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-600',
      features: [
        { name: mounted && ready ? t('membership.basicDashboard') : 'Basic Dashboard Access', included: true },
        { name: mounted && ready ? t('membership.portfolioTracking') : 'Portfolio Tracking', included: true, value: mounted && ready ? t('membership.upTo20Assets') : 'Up to 20 assets' },
        { name: mounted && ready ? t('membership.marketData') : 'Market Data', included: true, value: mounted && ready ? t('membership.realTime') : 'Real-time' },
        { name: mounted && ready ? t('membership.tradeExecution') : 'Trade Execution', included: true, value: mounted && ready ? t('membership.100trades') : '100 trades/month' },
        { name: mounted && ready ? t('membership.educationalResources') : 'Educational Resources', included: true },
        { name: mounted && ready ? t('membership.communityForum') : 'Community Forum Access', included: true },
        { name: mounted && ready ? t('membership.mobileApp') : 'Mobile App Access', included: true },
        { name: mounted && ready ? t('membership.emailSupport') : 'Email Support', included: true, value: mounted && ready ? t('membership.24hrResponse') : '24hr response' },
        { name: mounted && ready ? t('membership.advancedAnalytics') : 'Advanced Analytics', included: true },
        { name: mounted && ready ? t('membership.apiAccess') : 'API Access', included: true, value: '1,000 calls/day' },
        { name: mounted && ready ? t('membership.prioritySupport') : 'Priority Support', included: false },
        { name: mounted && ready ? t('membership.customAlerts') : 'Custom Alerts', included: true, value: 'Up to 10' },
        { name: mounted && ready ? t('membership.taxReports') : 'Tax Reports', included: true, value: 'Quarterly' },
        { name: mounted && ready ? t('membership.stakingBoost') : 'Staking Rewards Boost', included: true, value: '+2% APY' },
        { name: mounted && ready ? t('membership.earlyAccess') : 'Early Access Features', included: false }
      ],
      benefits: [
        mounted && ready ? t('membership.growthBenefit1') : 'Real-time market data access',
        mounted && ready ? t('membership.growthBenefit2') : 'Advanced portfolio analytics',
        mounted && ready ? t('membership.growthBenefit3') : 'Priority customer support',
        'Quarterly tax reports'
      ]
    },
    {
      name: mounted && ready ? t('membership.professional') : 'Professional',
      price: billingPeriod === 'monthly' ? 99 : 79,
      period: billingPeriod === 'monthly' ? (mounted && ready ? t('membership.month') : '/month') : (mounted && ready ? t('membership.yearBilled') : '/month (billed yearly)'),
      description: mounted && ready ? t('membership.professionalDesc') : 'Complete toolkit for professional energy traders',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-600',
      popular: true,
      features: [
        { name: mounted && ready ? t('membership.basicDashboard') : 'Basic Dashboard Access', included: true },
        { name: mounted && ready ? t('membership.portfolioTracking') : 'Portfolio Tracking', included: true, value: mounted && ready ? t('membership.unlimited') : 'Unlimited' },
        { name: mounted && ready ? t('membership.marketData') : 'Market Data', included: true, value: 'Real-time + Level 2' },
        { name: mounted && ready ? t('membership.tradeExecution') : 'Trade Execution', included: true, value: mounted && ready ? t('membership.unlimited') : 'Unlimited' },
        { name: mounted && ready ? t('membership.educationalResources') : 'Educational Resources', included: true },
        { name: mounted && ready ? t('membership.communityForum') : 'Community Forum Access', included: true },
        { name: mounted && ready ? t('membership.mobileApp') : 'Mobile App Access', included: true },
        { name: mounted && ready ? t('membership.emailSupport') : 'Email Support', included: true, value: 'Priority 1hr' },
        { name: mounted && ready ? t('membership.advancedAnalytics') : 'Advanced Analytics', included: true },
        { name: mounted && ready ? t('membership.apiAccess') : 'API Access', included: true, value: '10,000 calls/day' },
        { name: mounted && ready ? t('membership.prioritySupport') : 'Priority Support', included: true, value: 'Phone + Chat' },
        { name: mounted && ready ? t('membership.customAlerts') : 'Custom Alerts', included: true, value: 'Up to 50' },
        { name: mounted && ready ? t('membership.taxReports') : 'Tax Reports', included: true, value: 'Monthly + Annual' },
        { name: mounted && ready ? t('membership.stakingBoost') : 'Staking Rewards Boost', included: true, value: '+5% APY' },
        { name: mounted && ready ? t('membership.earlyAccess') : 'Early Access Features', included: true }
      ],
      benefits: [
        mounted && ready ? t('membership.professionalBenefit1') : 'Unlimited trading & tracking',
        mounted && ready ? t('membership.professionalBenefit2') : 'Level 2 market depth data',
        mounted && ready ? t('membership.professionalBenefit3') : 'Priority phone support',
        'Early access to new features',
        '5% staking rewards boost'
      ]
    },
    {
      name: mounted && ready ? t('membership.enterprise') : 'Enterprise',
      price: 499,
      period: billingPeriod === 'monthly' ? (mounted && ready ? t('membership.month') : '/month') : '/month (custom billing)',
      description: mounted && ready ? t('membership.enterpriseDesc') : 'Custom solutions for institutions and high-volume traders',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      features: [
        { name: mounted && ready ? t('membership.basicDashboard') : 'Basic Dashboard Access', included: true },
        { name: mounted && ready ? t('membership.portfolioTracking') : 'Portfolio Tracking', included: true, value: 'Unlimited + Multi-account' },
        { name: mounted && ready ? t('membership.marketData') : 'Market Data', included: true, value: 'Ultra-low latency' },
        { name: mounted && ready ? t('membership.tradeExecution') : 'Trade Execution', included: true, value: 'Unlimited + OTC desk' },
        { name: mounted && ready ? t('membership.educationalResources') : 'Educational Resources', included: true },
        { name: mounted && ready ? t('membership.communityForum') : 'Community Forum Access', included: true },
        { name: mounted && ready ? t('membership.mobileApp') : 'Mobile App Access', included: true },
        { name: mounted && ready ? t('membership.emailSupport') : 'Email Support', included: true, value: 'Dedicated manager' },
        { name: mounted && ready ? t('membership.advancedAnalytics') : 'Advanced Analytics', included: true, value: 'Custom reports' },
        { name: mounted && ready ? t('membership.apiAccess') : 'API Access', included: true, value: mounted && ready ? t('membership.unlimited') : 'Unlimited' },
        { name: mounted && ready ? t('membership.prioritySupport') : 'Priority Support', included: true, value: '24/7 dedicated' },
        { name: mounted && ready ? t('membership.customAlerts') : 'Custom Alerts', included: true, value: mounted && ready ? t('membership.unlimited') : 'Unlimited' },
        { name: mounted && ready ? t('membership.taxReports') : 'Tax Reports', included: true, value: 'Custom + Audit support' },
        { name: mounted && ready ? t('membership.stakingBoost') : 'Staking Rewards Boost', included: true, value: '+10% APY' },
        { name: mounted && ready ? t('membership.earlyAccess') : 'Early Access Features', included: true, value: 'Beta access' }
      ],
      benefits: [
        mounted && ready ? t('membership.enterpriseBenefit1') : 'White-glove onboarding',
        mounted && ready ? t('membership.enterpriseBenefit2') : 'Dedicated account manager',
        mounted && ready ? t('membership.enterpriseBenefit3') : 'Custom API integrations',
        'OTC trading desk access',
        'Institutional-grade security',
        '10% staking rewards boost'
      ]
    }
  ]

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName.toLowerCase())
    localStorage.setItem('selectedTier', tierName.toLowerCase())
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
                  ENERGY <span className="text-green-400">{mounted && ready ? t('membership.title') : 'Membership'}</span>
                </span>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white">
                {mounted && ready ? t('nav.signin') : 'Sign In'}
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
              >
                {mounted && ready ? t('nav.getStarted') : 'Get Started'}
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
              <span className="text-green-400 text-sm font-medium">
                {mounted && ready ? t('membership.title') : 'Choose Your Trading Journey'}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {mounted && ready ? t('membership.title') : 'Unlock the Full Power of'}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600"> ENERGY Trading</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              {mounted && ready ? t('membership.subtitle') : 'Join thousands of traders revolutionizing renewable energy markets. Choose the plan that fits your trading goals.'}
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                {mounted && ready ? t('membership.monthly') : 'Monthly'}
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
                {mounted && ready ? t('membership.yearly') : 'Yearly'}
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  {mounted && ready ? t('membership.yearlyDiscount') : 'Save 20%'}
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
                    tier.popular ? 'border-green-500/50 ring-1 ring-green-500/20' : 'border-slate-700/50'
                  } hover:border-green-500/30 transition-all duration-300`}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {mounted && ready ? t('membership.most-popular') : 'Most Popular'}
                      </div>
                    </div>
                  )}

                  {/* Icon and Name */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      {tier.price === 0 ? (
                        <span className="text-3xl font-bold text-green-400">{mounted && ready ? t('membership.free') : 'Free'}</span>
                      ) : (
                        <>
                          <span className="text-sm text-gray-400">$</span>
                          <span className="text-3xl font-bold text-white">{tier.price}</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{tier.period}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {tier.features.slice(0, 8).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                            {feature.name}
                          </span>
                          {feature.value && (
                            <span className="text-xs text-gray-400 ml-2">({feature.value})</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectTier(tier.name)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500'
                        : 'bg-slate-700/50 text-white hover:bg-slate-700 border border-slate-600'
                    }`}
                  >
                    {tier.price === 0
                      ? (mounted && ready ? t('nav.getStarted') : 'Get Started')
                      : (mounted && ready ? t('membership.selectPlan') : 'Select Plan')
                    }
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}