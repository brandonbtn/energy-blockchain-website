'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  FileText,
  Scale,
  AlertTriangle,
  Shield,
  Zap,
  Users,
  Globe,
  Ban,
  Calendar,
  DollarSign,
  Gavel
} from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  const { t } = useTranslation()

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: Scale,
      content: [
        "By accessing and using the Energy Blockchain platform, you agree to be bound by these Terms of Service",
        "These terms constitute a legally binding agreement between you and Energy Blockchain",
        "If you do not agree to these terms, you must not use our services",
        "Your continued use of the platform constitutes acceptance of any updated terms"
      ]
    },
    {
      title: "Platform Description",
      icon: Zap,
      content: [
        "Energy Blockchain provides a decentralized platform for renewable energy trading",
        "The platform facilitates peer-to-peer energy transactions using blockchain technology",
        "Carbon credit trading and verification services are included",
        "Validator network participation and staking services are available",
        "Smart contract functionality for automated energy trading"
      ]
    },
    {
      title: "User Eligibility",
      icon: Users,
      content: [
        "You must be at least 18 years old to use our services",
        "You must have the legal capacity to enter into binding agreements",
        "Use of the platform must comply with all applicable laws in your jurisdiction",
        "Prohibited users include those from sanctioned countries or entities",
        "Business users must have proper authorization to trade energy"
      ]
    },
    {
      title: "Platform Risks",
      icon: AlertTriangle,
      content: [
        "Cryptocurrency and energy trading involves significant financial risk",
        "Token values may fluctuate dramatically and you may lose your entire investment",
        "Blockchain transactions are irreversible once confirmed",
        "Smart contract bugs or exploits may result in loss of funds",
        "Regulatory changes may affect platform availability or functionality",
        "Network congestion may cause transaction delays or failures"
      ]
    },
    {
      title: "User Responsibilities",
      icon: Shield,
      content: [
        "Maintain the security of your private keys and wallet access",
        "Provide accurate information when using the platform",
        "Comply with all applicable laws and regulations",
        "Pay all applicable taxes on your transactions",
        "Report any suspected security vulnerabilities",
        "Use the platform only for lawful purposes"
      ]
    },
    {
      title: "Prohibited Activities",
      icon: Ban,
      content: [
        "Money laundering or terrorist financing",
        "Market manipulation or fraudulent trading",
        "Violation of sanctions or export control laws",
        "Unauthorized access to platform systems",
        "Distribution of malware or harmful code",
        "Impersonation of other users or entities",
        "Spam, harassment, or abusive behavior"
      ]
    },
    {
      title: "Fees and Payments",
      icon: DollarSign,
      content: [
        "Transaction fees are charged for energy trades and transfers",
        "Validator rewards are subject to network consensus rules",
        "Fee structures may change with prior notice to users",
        "All fees are deducted automatically from transactions",
        "No refunds are provided for completed transactions"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: Gavel,
      content: [
        "Energy Blockchain provides the platform 'as is' without warranties",
        "We are not liable for losses due to market volatility or user error",
        "Maximum liability is limited to fees paid in the 12 months prior to claim",
        "We are not responsible for third-party services or content",
        "Force majeure events may suspend platform operations without liability"
      ]
    },
    {
      title: "Termination",
      icon: Ban,
      content: [
        "Either party may terminate this agreement at any time",
        "We may suspend or terminate accounts for terms violations",
        "Upon termination, you may withdraw your funds subject to applicable law",
        "Some provisions survive termination including limitation of liability",
        "Terminated users may not create new accounts without permission"
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
                <FileText className="h-16 w-16 text-green-400" />
                <div className="absolute inset-0 animate-pulse">
                  <FileText className="h-16 w-16 text-green-400/50" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
              <p className="text-gray-400 text-center mb-4">
                <strong className="text-white">Last Updated:</strong> September 17, 2024
              </p>
              <p className="text-gray-400 text-center">
                These Terms of Service ("Terms") govern your use of the Energy Blockchain platform and services.
                Please read these terms carefully before using our platform, as they contain important legal information.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-400" />
                <h2 className="text-2xl font-bold text-white">Important Legal Notice</h2>
              </div>
              <p className="text-gray-400 mb-4">
                <strong className="text-red-400">High Risk Investment Warning:</strong> Trading in cryptocurrencies and energy tokens involves substantial risk of loss.
                The value of digital assets can be extremely volatile and may result in significant financial loss.
              </p>
              <p className="text-gray-400">
                <strong className="text-red-400">No Financial Advice:</strong> Nothing on this platform constitutes financial, investment, legal, or tax advice.
                You should consult with qualified professionals before making any financial decisions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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

        {/* Governing Law */}
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
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Governing Law and Disputes</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction],
                  without regard to its conflict of law principles.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of the platform shall be resolved through
                  binding arbitration in accordance with the rules of [Arbitration Organization].
                </p>
                <p>
                  You waive any right to participate in class-action lawsuits or class-wide arbitration.
                </p>
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
              <Calendar className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-400 mb-6">
                We reserve the right to modify these Terms at any time. Material changes will be notified
                to users via email or platform notification. Your continued use after changes constitutes acceptance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Legal Questions</h3>
                  <p className="text-gray-400">Email: legal@energyblockchain.org</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Terms Updates</h3>
                  <p className="text-gray-400">Email: terms@energyblockchain.org</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/privacy"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/compliance"
                  className="px-6 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  Compliance Info
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