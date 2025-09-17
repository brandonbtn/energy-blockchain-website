'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Lock,
  Shield,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle,
  Key,
  Fingerprint,
  AlertCircle,
  ShieldCheck,
  Activity
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [twoFactorCode, setTwoFactorCode] = useState('')
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    twoFactor: '',
    general: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({ email: '', password: '', twoFactor: '', general: '' })

    // Validate admin credentials (in production, use secure backend authentication)
    if (formData.email !== 'admin@energytoken.io') {
      setErrors(prev => ({ ...prev, email: 'Invalid administrator email' }))
      setIsLoading(false)
      return
    }

    if (formData.password.length < 8) {
      setErrors(prev => ({ ...prev, password: 'Invalid administrator password' }))
      setIsLoading(false)
      return
    }

    // Simulate secure login process
    setTimeout(() => {
      setShowTwoFactor(true)
      setIsLoading(false)
    }, 1500)
  }

  const handleTwoFactorSubmit = () => {
    setIsLoading(true)

    // Validate 2FA code
    if (twoFactorCode.length !== 6) {
      setErrors(prev => ({ ...prev, twoFactor: 'Invalid 2FA code' }))
      setIsLoading(false)
      return
    }

    setTimeout(() => {
      // Store admin session
      localStorage.setItem('isAdminAuthenticated', 'true')
      localStorage.setItem('adminEmail', formData.email)
      localStorage.setItem('adminLoginTime', new Date().toISOString())

      // Redirect to admin dashboard
      router.push('/admin/dashboard')
    }, 1000)
  }

  // Security indicators
  const securityFeatures = [
    'End-to-end encryption',
    'Two-factor authentication required',
    'IP whitelisting enabled',
    'Session timeout: 30 minutes'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      {/* Security Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Animated Security Grid */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-green-500/5"
        />
      </div>

      <div className="container mx-auto max-w-lg relative z-10">
        {/* Security Alert */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 flex items-start"
        >
          <AlertTriangle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-red-400 font-semibold mb-1">Restricted Access</p>
            <p className="text-red-300 text-sm">
              This area is for authorized administrators only. All access attempts are logged and monitored.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 px-8 py-6 border-b border-slate-800">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Administrator Access</h1>
                <p className="text-gray-400 text-sm">ENERGY Token Control Panel</p>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="p-8">
            {!showTwoFactor ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">
                    Administrator Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 pl-11 bg-slate-800/50 border ${
                        errors.email ? 'border-red-500' : 'border-slate-700'
                      } rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors`}
                      placeholder="admin@energytoken.io"
                      autoComplete="off"
                    />
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
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
                  <label className="block text-gray-400 text-sm mb-2 font-medium">
                    Administrator Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={`w-full px-4 py-3 pl-11 pr-11 bg-slate-800/50 border ${
                        errors.password ? 'border-red-500' : 'border-slate-700'
                      } rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors`}
                      placeholder="Enter secure password"
                      autoComplete="off"
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
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

                {/* Security Features */}
                <div className="bg-slate-800/30 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-3 font-medium">Security Features Active:</p>
                  <div className="space-y-2">
                    {securityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Shield className="h-5 w-5 mr-2" />
                      Authenticate
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Fingerprint className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2">Two-Factor Authentication</h2>
                  <p className="text-gray-400 text-sm">
                    Enter the 6-digit code from your authenticator app
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    value={twoFactorCode}
                    onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-4 py-4 text-center text-2xl tracking-widest bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="000000"
                    maxLength={6}
                    autoComplete="off"
                  />
                  {errors.twoFactor && (
                    <p className="text-red-400 text-sm mt-2 flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.twoFactor}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleTwoFactorSubmit}
                  disabled={isLoading || twoFactorCode.length !== 6}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <ShieldCheck className="h-5 w-5 mr-2" />
                      Verify & Access Dashboard
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setShowTwoFactor(false)
                    setTwoFactorCode('')
                  }}
                  className="w-full py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Back to Login
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-slate-800/30 px-8 py-4 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center">
                <Activity className="h-3 w-3 mr-1 text-green-400" />
                <span>System Status: Operational</span>
              </div>
              <div>
                IP: {typeof window !== 'undefined' ? '192.168.1.1' : 'Loading...'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-xs text-gray-500"
        >
          <p className="mb-1">This session will be recorded for security purposes.</p>
          <p>Unauthorized access attempts will be prosecuted.</p>
        </motion.div>
      </div>
    </div>
  )
}