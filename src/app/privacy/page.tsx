'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Globe,
  FileText,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  const { t } = useTranslation()

  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Account information (email, wallet addresses)",
        "Transaction data on the Energy blockchain",
        "Usage analytics and performance metrics",
        "Technical data (IP address, browser type, device info)",
        "Communication preferences and support interactions"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        "Provide and maintain our energy trading platform",
        "Process transactions and facilitate energy trades",
        "Improve our services and develop new features",
        "Ensure security and prevent fraudulent activity",
        "Comply with legal and regulatory requirements",
        "Send important updates and security notifications"
      ]
    },
    {
      title: "Information Sharing",
      icon: Globe,
      content: [
        "We do not sell personal information to third parties",
        "Blockchain transactions are public by design",
        "We may share data with service providers under strict agreements",
        "Legal compliance may require disclosure to authorities",
        "Anonymous, aggregated data may be shared for research"
      ]
    },
    {
      title: "Data Security",
      icon: Shield,
      content: [
        "End-to-end encryption for sensitive data",
        "Multi-signature security for financial transactions",
        "Regular security audits and penetration testing",
        "Secure data centers with 24/7 monitoring",
        "Employee access controls and background checks"
      ]
    },
    {
      title: "Your Rights",
      icon: Eye,
      content: [
        "Access your personal information",
        "Correct inaccurate data",
        "Request deletion of your data (where legally possible)",
        "Opt-out of marketing communications",
        "Data portability for supported information",
        "Lodge complaints with data protection authorities"
      ]
    },
    {
      title: "Data Retention",
      icon: Calendar,
      content: [
        "Account data retained while your account is active",
        "Transaction records kept for regulatory compliance",
        "Analytics data anonymized after 24 months",
        "Support communications deleted after 3 years",
        "Backup data securely deleted according to schedule"
      ]
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
                <Lock className="h-16 w-16 text-green-400" />
                <div className="absolute inset-0 animate-pulse">
                  <Lock className="h-16 w-16 text-green-400/50" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
              <p className="text-gray-400 text-center mb-4">
                <strong className="text-white">Last Updated:</strong> September 17, 2024
              </p>
              <p className="text-gray-400 text-center">
                Energy Blockchain ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you use our energy trading platform and related services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Privacy Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Blockchain Transparency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Blockchain Transparency</h2>
              </div>
              <p className="text-gray-400 mb-4">
                As a blockchain-based platform, certain information is inherently public and transparent:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Transaction amounts, timestamps, and wallet addresses are recorded on the public blockchain</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Energy trading activities and carbon credit transactions are publicly verifiable</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Validator activities and network participation are transparent and auditable</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-400 mb-6">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">General Privacy Inquiries</h3>
                  <p className="text-gray-400">Email: privacy@energyblockchain.org</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Data Protection Officer</h3>
                  <p className="text-gray-400">Email: dpo@energyblockchain.org</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Updates Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl p-8 text-center">
              <FileText className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
              <p className="text-gray-400 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes
                by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                  Subscribe to Updates
                </button>
                <Link
                  href="/terms"
                  className="px-6 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  View Terms of Service
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