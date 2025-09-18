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

export default function SignupClient() {
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

  // Initialize selected tier from URL params
  useEffect(() => {
    const tierParam = searchParams.get('tier')
    if (tierParam && ['starter', 'growth', 'professional', 'enterprise'].includes(tierParam)) {
      setSelectedTier(tierParam)
    }
  }, [searchParams])

  const membershipTiers: MembershipTier[] = [
    {
      name: 'Starter',
      price: 0,
      period: 'Forever',
      description: 'Perfect for beginners',
      icon: Zap,
      color: 'from-gray-500 to-gray-600',
      benefits: [
        'Basic Dashboard',
        'Up to 3 assets',
        '10 trades/month',
        'Community access'
      ]
    },
    {
      name: 'Growth',
      price: 29,
      period: '/month',
      description: 'For active traders',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-600',
      benefits: [
        'Real-time data',
        'Up to 20 assets',
        '100 trades/month',
        'API access'
      ]
    },
    {
      name: 'Professional',
      price: 99,
      period: '/month',
      description: 'Complete toolkit',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-600',
      popular: true,
      benefits: [
        'Unlimited assets',
        'Unlimited trades',
        'Priority support',
        '+5% staking boost'
      ]
    },
    {
      name: 'Enterprise',
      price: 499,
      period: '/month',
      description: 'For institutions',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      benefits: [
        'Multi-account',
        'Dedicated manager',
        'OTC trading',
        '+10% staking boost'
      ]
    }
  ]

  const passwordRequirements = [
    { met: formData.password.length >= 8, text: 'At least 8 characters' },
    { met: /[A-Z]/.test(formData.password), text: 'One uppercase letter' },
    { met: /[a-z]/.test(formData.password), text: 'One lowercase letter' },
    { met: /[0-9]/.test(formData.password), text: 'One number' },
    { met: /[!@#$%^&*]/.test(formData.password), text: 'One special character' }
  ]

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return re.test(phone)
  }

  const handleNextStep = () => {
    // Validate step 1
    if (step === 1) {
      let hasErrors = false
      const newErrors = { ...errors }

      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required'
        hasErrors = true
      }
      if (!formData.email) {
        newErrors.email = 'Email is required'
        hasErrors = true
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email'
        hasErrors = true
      }
      if (formData.phone && !validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number'
        hasErrors = true
      }

      setErrors(newErrors)
      if (!hasErrors) {
        setStep(2)
      }
    } else if (step === 2) {
      // Move to security setup
      setStep(3)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({ fullName: '', email: '', phone: '', password: '', confirmPassword: '', general: '' })

    // Validate passwords
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
    if (!passwordRequirements.every(req => req.met)) {
      setErrors(prev => ({ ...prev, password: 'Password does not meet all requirements' }))
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
      // Store auth token
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', formData.email)
      localStorage.setItem('userName', formData.fullName)
      localStorage.setItem('membershipTier', selectedTier)

      // Redirect to dashboard
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex min-h-screen">
        {/* Left Panel - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 mb-8">
              <Zap className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">
                ENERGY
              </span>
            </Link>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= num
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-700 text-gray-400'
                  }`}>
                    {step > num ? <Check className="h-5 w-5" /> : num}
                  </div>
                  {num < 3 && (
                    <div className={`w-16 lg:w-20 h-1 ${
                      step > num ? 'bg-green-500' : 'bg-slate-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="flex justify-between mb-8 -mt-4">
              <span className="text-xs text-gray-400">Personal Info</span>
              <span className="text-xs text-gray-400 ml-4">Membership</span>
              <span className="text-xs text-gray-400">Security</span>
            </div>

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-gray-400 mb-8">Start your renewable energy trading journey</p>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-2 text-red-400 text-sm">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-red-400 text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone (Optional) */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Phone Number (Optional)</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-2 text-red-400 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  {/* Referral Code (Optional) */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Referral Code (Optional)</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type="text"
                        value={formData.referralCode}
                        onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="ENERGY2024"
                      />
                    </div>
                  </div>

                  {/* Next Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Continue to Membership</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* Step 2: Membership Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-white mb-2">Choose Your Plan</h2>
                <p className="text-gray-400 mb-6">Select the membership that fits your trading needs</p>

                {/* Selected Tier Summary */}
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-400 mb-1">Selected Plan</p>
                      <p className="text-xl font-bold text-white">
                        {membershipTiers.find(t => t.name.toLowerCase() === selectedTier)?.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        ${membershipTiers.find(t => t.name.toLowerCase() === selectedTier)?.price}
                      </p>
                      <p className="text-sm text-gray-400">
                        {membershipTiers.find(t => t.name.toLowerCase() === selectedTier)?.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tier Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {membershipTiers.map((tier) => {
                    const Icon = tier.icon
                    const isSelected = tier.name.toLowerCase() === selectedTier

                    return (
                      <motion.div
                        key={tier.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedTier(tier.name.toLowerCase())}
                        className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'bg-slate-800/80 border-2 border-green-500 shadow-lg shadow-green-500/20'
                            : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        {tier.popular && (
                          <div className="absolute -top-2 right-3">
                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                              POPULAR
                            </span>
                          </div>
                        )}

                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${tier.color}`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                            <p className="text-sm text-gray-400 mb-2">{tier.description}</p>
                            <p className="text-xl font-bold text-white">
                              ${tier.price}
                              <span className="text-sm text-gray-400 font-normal ml-1">
                                {tier.period}
                              </span>
                            </p>
                            <ul className="mt-3 space-y-1">
                              {tier.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                  <Check className="h-3 w-3 text-green-400" />
                                  <span className="text-xs text-gray-300">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Continue to Security</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Security Setup */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-white mb-2">Secure Your Account</h2>
                <p className="text-gray-400 mb-8">Set up a strong password to protect your account</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Password */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Enter a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-2 text-red-400 text-sm">{errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-2 text-red-400 text-sm">{errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Password Requirements */}
                  <div className="p-4 bg-slate-800 rounded-lg">
                    <p className="text-gray-400 text-sm mb-3">Password Requirements:</p>
                    <div className="space-y-2">
                      {passwordRequirements.map((req, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          {req.met ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <X className="h-4 w-4 text-gray-600" />
                          )}
                          <span className={`text-sm ${req.met ? 'text-green-400' : 'text-gray-500'}`}>
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 bg-slate-800 border-slate-700 rounded text-green-500 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-400">
                        I agree to the <Link href="/terms" className="text-green-400 hover:text-green-300">Terms of Service</Link> and{' '}
                        <Link href="/privacy" className="text-green-400 hover:text-green-300">Privacy Policy</Link>
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToMarketing}
                        onChange={(e) => setAgreedToMarketing(e.target.checked)}
                        className="mt-1 w-4 h-4 bg-slate-800 border-slate-700 rounded text-green-500 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-400">
                        I want to receive updates about products and promotions
                      </span>
                    </label>
                  </div>

                  {errors.general && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm">{errors.general}</p>
                    </div>
                  )}

                  {/* Submit Buttons */}
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Create Account</span>
                          <CheckCircle className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Already have an account */}
            <p className="mt-8 text-center text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-green-400 hover:text-green-300 font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Right Panel - Features */}
        <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-12">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              Start Trading Renewable Energy Today
            </h3>

            <p className="text-gray-300 text-lg mb-12">
              Join 50,000+ traders revolutionizing the energy market with blockchain technology.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">65,000+ TPS Speed</h4>
                  <p className="text-gray-400">Lightning-fast transactions with minimal fees</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Bank-Grade Security</h4>
                  <p className="text-gray-400">Your assets protected with military-grade encryption</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wallet className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Multi-Chain Support</h4>
                  <p className="text-gray-400">Trade across multiple blockchain networks seamlessly</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-slate-700">
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-gray-400 text-sm">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$2.5B</div>
                <div className="text-gray-400 text-sm">Trading Volume</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}