'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import '@/lib/i18n-client'
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
  Wallet,
  Globe,
  User
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const { t, ready } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loginMethod, setLoginMethod] = useState<'email' | 'wallet'>('email')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({ email: '', password: '', general: '' })

    // Basic validation
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: mounted && ready ? t('auth.emailRequired') : 'Email is required' }))
      setIsLoading(false)
      return
    }
    if (!formData.password) {
      setErrors(prev => ({ ...prev, password: mounted && ready ? t('auth.passwordRequired') : 'Password is required' }))
      setIsLoading(false)
      return
    }

    // Simulate login (replace with actual auth logic)
    setTimeout(() => {
      // Store auth token (in production, use secure storage)
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', formData.email)

      // Redirect to dashboard
      router.push('/dashboard')
    }, 1500)
  }

  const handleWalletConnect = async () => {
    setIsLoading(true)
    // Simulate wallet connection
    setTimeout(() => {
      alert(mounted && ready ? t('auth.walletComingSoon') : 'Wallet connection feature coming soon!')
      setIsLoading(false)
    }, 1000)
  }

  const features = [
    mounted && ready ? t('auth.feature1') : 'Real-time portfolio tracking',
    mounted && ready ? t('auth.feature2') : 'Advanced trading tools',
    mounted && ready ? t('auth.feature3') : 'Staking rewards up to 25% APY',
    mounted && ready ? t('auth.feature4') : 'Exclusive member benefits'
  ]

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
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12">
              {/* Logo and Title */}
              <div className="text-center mb-8">
                <Link href="/" className="inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </Link>
                <h1 className="text-3xl font-bold text-white mb-2">{mounted && ready ? t('auth.welcomeBack') : 'Welcome Back'}</h1>
                <p className="text-gray-400">{mounted && ready ? t('auth.signInMessage') : 'Sign in to access your ENERGY dashboard'}</p>
              </div>

              {/* Login Method Tabs */}
              <div className="flex space-x-2 mb-6">
                <button
                  onClick={() => setLoginMethod('email')}
                  className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                    loginMethod === 'email'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-slate-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Mail className="h-4 w-4 inline mr-2" />
                  {mounted && ready ? t('auth.email') : 'Email'}
                </button>
                <button
                  onClick={() => setLoginMethod('wallet')}
                  className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                    loginMethod === 'wallet'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-slate-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Wallet className="h-4 w-4 inline mr-2" />
                  {mounted && ready ? t('auth.wallet') : 'Wallet'}
                </button>
              </div>

              {loginMethod === 'email' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">{mounted && ready ? t('auth.emailAddress') : 'Email Address'}</label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 pl-11 bg-slate-700/50 border ${
                          errors.email ? 'border-red-500' : 'border-slate-600'
                        } rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors`}
                        placeholder={mounted && ready ? t('auth.enterEmail') : 'Enter your email'}
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

                  {/* Password Input */}
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">{mounted && ready ? t('auth.password') : 'Password'}</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className={`w-full px-4 py-3 pl-11 pr-11 bg-slate-700/50 border ${
                          errors.password ? 'border-red-500' : 'border-slate-600'
                        } rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors`}
                        placeholder={mounted && ready ? t('auth.enterPassword') : 'Enter your password'}
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
                    {errors.password && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 bg-slate-700 border-slate-600 rounded text-green-500 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-400 text-sm">{mounted && ready ? t('auth.rememberMe') : 'Remember me'}</span>
                    </label>
                    <Link href="/forgot-password" className="text-green-400 text-sm hover:text-green-300 transition-colors">
                      {mounted && ready ? t('auth.forgotPassword') : 'Forgot password?'}
                    </Link>
                  </div>

                  {/* Error Message */}
                  {errors.general && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                      <p className="text-red-400 text-sm">{errors.general}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        {mounted && ready ? t('nav.signin') : 'Sign In'}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6 text-center">
                    <Wallet className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">Connect Your Wallet</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Use your Solana wallet to sign in securely
                    </p>
                    <button
                      onClick={handleWalletConnect}
                      disabled={isLoading}
                      className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                      ) : (
                        'Connect Wallet'
                      )}
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">
                      Supported wallets: Phantom, Solflare, Backpack
                    </p>
                  </div>
                </div>
              )}

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                    Sign up
                  </Link>
                </p>
              </div>

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-slate-800/50 text-gray-400">Or continue with</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="py-2 px-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg text-white transition-colors flex items-center justify-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Google
                  </button>
                  <button className="py-2 px-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg text-white transition-colors flex items-center justify-center">
                    <User className="h-5 w-5 mr-2" />
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Start Trading <span className="text-gradient">ENERGY</span> Today
                </h2>
                <p className="text-gray-400 text-lg">
                  Join thousands of traders on the most advanced renewable energy trading platform
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Current Price</p>
                    <p className="text-2xl font-bold text-white">$0.125</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">24h Change</p>
                    <p className="text-2xl font-bold text-green-400">+15.2%</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Market Cap</span>
                    <span className="text-white">$125M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">24h Volume</span>
                    <span className="text-white">$2.4M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Holders</span>
                    <span className="text-white">50,000+</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Your data is encrypted and secure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}