'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Cookie,
  Settings,
  Eye,
  BarChart3,
  Shield,
  Globe,
  Clock,
  ToggleLeft,
  ToggleRight
} from 'lucide-react'
import Link from 'next/link'

export default function CookiesPage() {
  const { t } = useTranslation()

  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Shield,
      required: true,
      description: "These cookies are necessary for the platform to function and cannot be disabled.",
      examples: [
        "User authentication and session management",
        "Security tokens and CSRF protection",
        "Platform functionality and navigation",
        "Language and accessibility preferences"
      ],
      retention: "Session or until logout"
    },
    {
      title: "Analytics Cookies",
      icon: BarChart3,
      required: false,
      description: "Help us understand how users interact with our platform to improve user experience.",
      examples: [
        "Page views and user journey tracking",
        "Feature usage and performance metrics",
        "Error reporting and debugging data",
        "A/B testing and optimization data"
      ],
      retention: "Up to 24 months"
    },
    {
      title: "Functional Cookies",
      icon: Settings,
      required: false,
      description: "Enable enhanced functionality and personalization features.",
      examples: [
        "Trading preferences and dashboard layout",
        "Notification settings and alerts",
        "Theme and display preferences",
        "Saved searches and filters"
      ],
      retention: "Up to 12 months"
    },
    {
      title: "Performance Cookies",
      icon: BarChart3,
      required: false,
      description: "Collect information about platform performance and user experience.",
      examples: [
        "Page load times and response rates",
        "API performance metrics",
        "Network connectivity data",
        "Platform optimization data"
      ],
      retention: "Up to 6 months"
    }
  ]

  const thirdPartyCookies = [
    {
      service: "Google Analytics",
      purpose: "Website analytics and user behavior tracking",
      retention: "Up to 24 months",
      privacy: "https://policies.google.com/privacy"
    },
    {
      service: "Cloudflare",
      purpose: "Security, performance, and content delivery",
      retention: "Up to 30 days",
      privacy: "https://www.cloudflare.com/privacy/"
    },
    {
      service: "Intercom",
      purpose: "Customer support and communication",
      retention: "Up to 12 months",
      privacy: "https://www.intercom.com/legal/privacy"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/10 to-slate-900">
      <Header />

      <main className="relative pt-20">
        {/* Back to Home Link */}
        <div className="container mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 pb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Cookie className="h-16 w-16 text-green-400" />
                <div className="absolute inset-0 animate-pulse">
                  <Cookie className="h-16 w-16 text-green-400/50" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              Cookie <span className="text-gradient">Policy</span>
            </h1>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
              <p className="text-gray-400 text-center mb-4">
                <strong className="text-white">Last Updated:</strong> September 17, 2024
              </p>
              <p className="text-gray-400 text-center">
                This Cookie Policy explains how Energy Blockchain uses cookies and similar technologies
                to provide, improve, and protect our services. By using our platform, you consent to our use of cookies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What Are Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  Cookies are small text files that are stored on your device when you visit our platform.
                  They help us provide you with a better user experience by remembering your preferences and actions.
                </p>
                <p>
                  We use both session cookies (which expire when you close your browser) and persistent cookies
                  (which remain on your device for a set period) to enhance platform functionality.
                </p>
                <p>
                  Similar technologies include local storage, pixels, and web beacons, which serve similar functions
                  to cookies in helping us understand platform usage and improve our services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cookie Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Types of Cookies We Use
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{type.title}</h3>
                        <p className="text-gray-400 text-sm">{type.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {type.required ? (
                        <>
                          <span className="text-red-400 text-sm">Required</span>
                          <ToggleRight className="h-5 w-5 text-red-400" />
                        </>
                      ) : (
                        <>
                          <span className="text-green-400 text-sm">Optional</span>
                          <ToggleLeft className="h-5 w-5 text-green-400" />
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Data Retention:</h4>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{type.retention}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Third-Party Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Third-Party Cookies
            </h2>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-slate-700 text-gray-400 font-semibold">
                <div>Service</div>
                <div>Purpose</div>
                <div>Retention</div>
                <div>Privacy Policy</div>
              </div>
              {thirdPartyCookies.map((cookie, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="grid grid-cols-4 gap-4 p-6 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/30 transition-colors"
                >
                  <div className="text-white font-semibold">{cookie.service}</div>
                  <div className="text-gray-400 text-sm">{cookie.purpose}</div>
                  <div className="text-gray-400 text-sm">{cookie.retention}</div>
                  <div>
                    <a 
                      href={cookie.privacy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 text-sm hover:underline"
                    >
                      View Policy
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cookie Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Settings className="h-6 w-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  You can control and manage cookies in several ways. Most web browsers automatically accept cookies,
                  but you can modify your browser settings to decline cookies if you prefer.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Browser Settings</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Chrome: Settings → Privacy and Security → Cookies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Firefox: Settings → Privacy & Security → Cookies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Safari: Preferences → Privacy → Cookies</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3">Platform Settings</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Access cookie preferences in your account settings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Manage analytics and functional cookie consent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Update preferences at any time</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact and Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <Globe className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
              <p className="text-gray-400 mb-6">
                If you have questions about our use of cookies or this Cookie Policy,
                please contact our privacy team or visit our comprehensive privacy documentation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Privacy Team</h3>
                  <p className="text-gray-400">Email: privacy@energyblockchain.org</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cookie Support</h3>
                  <p className="text-gray-400">Email: cookies@energyblockchain.org</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                  Manage Cookie Preferences
                </button>
                <Link
                  href="/privacy"
                  className="px-6 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}