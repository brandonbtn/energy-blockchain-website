'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Zap,
  Shield,
  CheckCircle,
  AlertCircle,
  User,
  Phone,
  Globe,
  Wallet,
  Check,
  X,
  TrendingUp,
  Briefcase,
  Crown,
  Star,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

interface MembershipTier {
  name: string
  price: number
  period: string
  description: string
  icon: any
  color: string
  popular?: boolean
  benefits: string[]
}

export default function SignupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedTier, setSelectedTier] = useState('starter')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [agreedToMarketing, setAgreedToMarketing] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referralCode: ''
  })

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    general: ''
  })

  const membershipTiers: MembershipTier[] = [
    {
      name: 'Starter',
      price: 0,
      period: 'Forever',
      description: 'Perfect for beginners exploring renewable energy trading',
      icon: Zap,
      color: 'from-gray-500 to-gray-600',
      benefits: [
        'Basic trading features',
        'Educational content',
        'Community access'
      ]
    },
    {
      name: 'Growth',
      price: 29,
      period: '/month',
      description: 'For active traders ready to scale their portfolio',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-600',
      benefits: [
        'Real-time market data',
        'Advanced analytics',
        'API access',
        'Tax reports'
      ]
    },
    {
      name: 'Professional',
      price: 99,
      period: '/month',
      description: 'Complete toolkit for professional energy traders',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-600',
      popular: true,
      benefits: [
        'Unlimited trading',
        'Level 2 market data',
        'Priority support',
        'Early access features',
        '5% staking boost'
      ]
    },
    {
      name: 'Enterprise',
      price: 499,
      period: '/month',
      description: 'Custom solutions for institutions and high-volume traders',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      benefits: [
        'White-glove onboarding',
        'Dedicated manager',
        'Custom integrations',
        'OTC trading desk',
        '10% staking boost'
      ]
    }
  ]

  // Initialize selected tier from URL params
  useEffect(() => {
    const tierParam = searchParams.get('tier')
    if (tierParam) {
      setSelectedTier(tierParam.toLowerCase())
    }
  }, [searchParams])

  const passwordRequirements = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /[A-Z]/, text: 'One uppercase letter' },
    { regex: /[a-z]/, text: 'One lowercase letter' },
    { regex: /[0-9]/, text: 'One number' },
    { regex: /[^A-Za-z0-9]/, text: 'One special character' }
  ]

  const checkPasswordStrength = (password: string) => {
    return passwordRequirements.map(req => ({
      ...req,
      met: req.regex.test(password)
    }))
  }

  const handleNextStep = () => {
    // Validate step 1
    if (step === 1) {
      let hasError = false
      const newErrors = { ...errors }

      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required'
        hasError = true
      }
      if (!formData.email) {
        newErrors.email = 'Email is required'
        hasError = true
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required'
        hasError = true
      }

      setErrors(newErrors)
      if (!hasError) {
        setStep(2)
      }
    }
    // Step 2 (membership selection) has its own navigation buttons
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({ fullName: '', email: '', phone: '', password: '', confirmPassword: '', general: '' })

    // Validation
    if (!formData.password) {
      setErrors(prev => ({ ...prev, password: 'Password is required' }))
      setIsLoading(false)
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }))
      setIsLoading(false)
      return
    }
    if (!agreedToTerms) {
      setErrors(prev => ({ ...prev, general: 'You must agree to the terms and conditions' }))
      setIsLoading(false)
      return
    }

    // Simulate signup (replace with actual auth logic)
    setTimeout(() => {
      // Store auth token and user data
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', formData.email)
      localStorage.setItem('userName', formData.fullName)
      localStorage.setItem('membershipTier', selectedTier)

      // Redirect to dashboard
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/10 to-slate-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12"
        >
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-gray-400">Join the ENERGY ecosystem and start trading</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-green-500' : 'bg-slate-700'
                }`}>
                  {step > 1 ? <Check className="h-5 w-5 text-white" /> : <span className="text-white font-semibold">1</span>}
                </div>
                <span className="text-xs text-gray-400 mt-2">Personal Info</span>
              </div>
              <div className={`w-20 h-1 ${step >= 2 ? 'bg-green-500' : 'bg-slate-700'}`} />
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-green-500' : 'bg-slate-700'
                }`}>
                  {step > 2 ? <Check className="h-5 w-5 text-white" /> : <span className="text-white font-semibold">2</span>}
                </div>
                <span className="text-xs text-gray-400 mt-2">Membership</span>
              </div>
              <div className={`w-20 h-1 ${step >= 3 ? 'bg-green-500' : 'bg-slate-700'}`} />
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-green-500' : 'bg-slate-700'
                }`}>
                  <span className="text-white font-semibold">3</span>
                </div>
                <span className="text-xs text-gray-400 mt-2">Security</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Personal Information</h2>

                {/* Full Name */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 pl-11 bg-slate-700/50 border ${
                        errors.fullName ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors`}
                      placeholder="Enter your full name"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 pl-11 bg-slate-700/50 border ${
                        errors.email ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors`}
                      placeholder="Enter your email"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 pl-11 bg-slate-700/50 border ${
                        errors.phone ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors`}
                      placeholder="+1 (555) 123-4567"
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Referral Code (Optional) */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Referral Code (Optional)</label>
                  <input
                    type="text"
                    value={formData.referralCode}
                    onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Enter referral code"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            ) : step === 2 ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Choose Your Membership</h2>

                {/* Selected Tier Summary */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-green-400 font-semibold">Selected Plan:</h3>
                      <p className="text-white font-bold">
                        {membershipTiers.find(t => t.name.toLowerCase() === selectedTier)?.name} -
                        ${membershipTiers.find(t => t.name.toLowerCase() === selectedTier)?.price}
                        {membershipTiers.find(t => t.name.toLowerCase() === selectedTier)?.period}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">You can change this anytime</p>
                    </div>
                  </div>
                </div>

                {/* Membership Tier Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {membershipTiers.map((tier) => {
                    const Icon = tier.icon
                    const isSelected = selectedTier === tier.name.toLowerCase()
                    return (
                      <motion.div
                        key={tier.name}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedTier(tier.name.toLowerCase())}
                        className={`relative cursor-pointer bg-slate-800/50 backdrop-blur-xl border rounded-xl p-4 transition-all duration-300 ${
                          isSelected
                            ? 'border-green-500 shadow-lg shadow-green-500/20'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        {tier.popular && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full flex items-center space-x-1">
                              <Star className="h-3 w-3" />
                              <span>POPULAR</span>
                            </div>
                          </div>
                        )}

                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          {isSelected && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{tier.description}</p>

                        <div className="flex items-baseline mb-4">
                          <span className="text-2xl font-bold text-white">${tier.price}</span>
                          <span className="text-gray-400 ml-1 text-sm">{tier.period}</span>
                        </div>

                        {/* Benefits */}
                        <ul className="space-y-1">
                          {tier.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{benefit}</span>
                            </li>
                          ))}
                          {tier.benefits.length > 3 && (
                            <li className="text-sm text-gray-500">
                              +{tier.benefits.length - 3} more benefits
                            </li>
                          )}
                        </ul>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Continue to Security
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Security Setup</h2>

                {/* Password */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={`w-full px-4 py-3 pl-11 pr-11 bg-slate-700/50 border ${
                        errors.password ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors`}
                      placeholder="Create a strong password"
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {/* Password Requirements */}
                  <div className="mt-3 space-y-1">
                    {checkPasswordStrength(formData.password).map((req, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        {req.met ? (
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        ) : (
                          <X className="h-4 w-4 text-gray-500" />
                        )}
                        <span className={req.met ? 'text-green-400' : 'text-gray-500'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className={`w-full px-4 py-3 pl-11 pr-11 bg-slate-700/50 border ${
                        errors.confirmPassword ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors`}
                      placeholder="Confirm your password"
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="w-4 h-4 mt-1 bg-slate-700 border-slate-600 rounded text-green-500 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-400 text-sm">
                      I agree to the{' '}
                      <Link href="/terms" className="text-green-400 hover:text-green-300">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-green-400 hover:text-green-300">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToMarketing}
                      onChange={(e) => setAgreedToMarketing(e.target.checked)}
                      className="w-4 h-4 mt-1 bg-slate-700 border-slate-600 rounded text-green-500 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-400 text-sm">
                      I want to receive promotional emails and updates
                    </span>
                  </label>
                </div>

                {/* Error Message */}
                {errors.general && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                    <p className="text-red-400 text-sm">{errors.general}</p>
                  </div>
                )}

                {/* Buttons */}
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Back
                  </button>
                </div>
              </motion.div>
            )}
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Secure Platform</h3>
              <p className="text-gray-400 text-sm">Bank-level security & encryption</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Instant Trading</h3>
              <p className="text-gray-400 text-sm">Start trading immediately</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Wallet className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Free Wallet</h3>
              <p className="text-gray-400 text-sm">Built-in secure wallet</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}