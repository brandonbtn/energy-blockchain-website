'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  FileText,
  Download,
  BookOpen,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Cpu,
  Leaf,
  ChevronRight,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

export default function WhitepaperPage() {
  const { t } = useTranslation()

  const whitepaperSections = [
    {
      title: "Executive Summary",
      description: "Overview of Energy Blockchain's mission and key innovations",
      pages: "3-7"
    },
    {
      title: "Problem Statement",
      description: "Current challenges in renewable energy trading and distribution",
      pages: "8-12"
    },
    {
      title: "Technology Architecture",
      description: "Technical details of our blockchain consensus and infrastructure",
      pages: "13-25"
    },
    {
      title: "Tokenomics",
      description: "ENERGY token distribution, utility, and economic model",
      pages: "26-32"
    },
    {
      title: "Energy Trading Protocol",
      description: "Decentralized energy marketplace mechanics and smart contracts",
      pages: "33-41"
    },
    {
      title: "Carbon Credits Integration",
      description: "Blockchain-based carbon credit verification and trading",
      pages: "42-48"
    },
    {
      title: "Validator Network",
      description: "Proof-of-Stake consensus and validator economics",
      pages: "49-55"
    },
    {
      title: "Roadmap & Future Development",
      description: "Development timeline and upcoming features",
      pages: "56-60"
    }
  ]

  const technicalPapers = [
    {
      title: "Consensus Mechanism Deep Dive",
      description: "Technical analysis of our Proof-of-Stake implementation",
      type: "Technical Paper",
      pages: "15 pages"
    },
    {
      title: "Smart Contract Security Audit",
      description: "Third-party security audit results and recommendations",
      type: "Security Report",
      pages: "32 pages"
    },
    {
      title: "Energy Trading Economics",
      description: "Economic analysis of decentralized energy markets",
      type: "Research Paper",
      pages: "22 pages"
    },
    {
      title: "Carbon Credit Verification Protocol",
      description: "Technical specification for blockchain-based carbon verification",
      type: "Protocol Spec",
      pages: "18 pages"
    }
  ]

  const keyFeatures = [
    {
      icon: Zap,
      title: "65,000+ TPS",
      description: "Ultra-high transaction throughput for real-time energy trading"
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "Military-grade security with multi-signature wallets and audit trails"
    },
    {
      icon: Leaf,
      title: "Carbon Neutral",
      description: "100% renewable energy powered blockchain network"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Designed to handle worldwide energy trading and distribution"
    },
    {
      icon: Users,
      title: "Community Governed",
      description: "Decentralized governance with token holder voting rights"
    },
    {
      icon: Cpu,
      title: "Advanced Smart Contracts",
      description: "Sophisticated trading algorithms and automated settlement"
    }
  ]

  const downloadOptions = [
    {
      title: "Full Whitepaper",
      description: "Complete technical documentation (60 pages)",
      format: "PDF",
      size: "2.4 MB"
    },
    {
      title: "Executive Summary",
      description: "High-level overview for quick reading (8 pages)",
      format: "PDF",
      size: "856 KB"
    },
    {
      title: "Technical Appendix",
      description: "Additional technical specifications (25 pages)",
      format: "PDF",
      size: "1.8 MB"
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
          className="container mx-auto px-6 pb-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <BookOpen className="h-16 w-16 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <BookOpen className="h-16 w-16 text-green-400/50" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-gradient">Whitepaper</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Dive deep into the technical architecture, tokenomics, and vision behind Energy Blockchain.
            Our comprehensive whitepaper details how we're revolutionizing renewable energy trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Full Whitepaper
            </button>
            <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
              View Online
            </button>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Whitepaper Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Document Structure
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              {whitepaperSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-slate-700 last:border-b-0 p-6 hover:bg-slate-700/30 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-green-400 font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                        <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{section.description}</p>
                      <span className="text-xs text-gray-500">Pages {section.pages}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Download Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Download Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {downloadOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{option.format} • {option.size}</span>
                  <div className="flex items-center text-green-400 group-hover:scale-110 transition-transform">
                    <Download className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Papers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Additional Technical Papers
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {technicalPapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-green-400 font-medium px-2 py-1 bg-green-500/20 rounded">
                        {paper.type}
                      </span>
                      <span className="text-sm text-gray-400">{paper.pages}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{paper.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our technical team is available to discuss any aspects of our whitepaper,
              architecture, or implementation details. Join our developer community for in-depth discussions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/developers"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200"
              >
                Developer Resources
              </Link>
              <Link
                href="/community"
                className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
              >
                Join Community
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}