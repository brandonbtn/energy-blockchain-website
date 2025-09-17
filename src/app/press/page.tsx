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
  Camera,
  Newspaper,
  Award,
  Calendar,
  ExternalLink,
  Users,
  Mail,
  Phone,
  Globe
} from 'lucide-react'
import Link from 'next/link'

export default function PressPage() {
  const { t } = useTranslation()

  const pressReleases = [
    {
      date: "2024-09-15",
      title: "Energy Blockchain Mainnet Beta Launches with 65,000+ TPS",
      excerpt: "Revolutionary renewable energy trading platform goes live with lightning-fast transaction speeds and carbon credit integration.",
      category: "Product Launch"
    },
    {
      date: "2024-08-22",
      title: "Strategic Partnership with GreenTech Energy Providers",
      excerpt: "Major partnership brings 500+ renewable energy providers to the Energy blockchain ecosystem.",
      category: "Partnership"
    },
    {
      date: "2024-07-10",
      title: "Energy Blockchain Raises $25M Series A for Global Expansion",
      excerpt: "Funding round led by prominent VCs to accelerate international growth and technology development.",
      category: "Funding"
    },
    {
      date: "2024-06-05",
      title: "Winner: Best Blockchain Innovation at GreenTech Awards 2024",
      excerpt: "Energy Blockchain recognized for outstanding contribution to sustainable technology and renewable energy trading.",
      category: "Award"
    },
    {
      date: "2024-05-18",
      title: "Carbon Credits Marketplace Reaches $10M in Trading Volume",
      excerpt: "Milestone achievement demonstrates growing adoption of blockchain-based carbon credit trading.",
      category: "Milestone"
    }
  ]

  const mediaAssets = [
    {
      title: "Company Logos",
      description: "High-resolution logos in various formats",
      files: ["PNG", "SVG", "EPS"],
      icon: Camera
    },
    {
      title: "Product Screenshots",
      description: "Platform screenshots and UI elements",
      files: ["High-res PNGs", "Mobile screens"],
      icon: FileText
    },
    {
      title: "Team Photos",
      description: "Professional headshots and team photos",
      files: ["Individual photos", "Group photos"],
      icon: Users
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand style guide and usage rules",
      files: ["PDF Guide", "Color palettes"],
      icon: FileText
    }
  ]

  const awards = [
    {
      year: "2024",
      award: "Best Blockchain Innovation",
      organization: "GreenTech Awards",
      description: "Recognized for revolutionary approach to renewable energy trading"
    },
    {
      year: "2024",
      award: "Sustainability Pioneer",
      organization: "Blockchain Climate Initiative",
      description: "Leading the way in climate-positive blockchain technology"
    },
    {
      year: "2023",
      award: "Most Promising Startup",
      organization: "Energy Innovation Summit",
      description: "Outstanding potential in transforming energy markets"
    }
  ]

  const keyStats = [
    { label: "Countries Served", value: "45+" },
    { label: "Energy Providers", value: "500+" },
    { label: "Active Users", value: "50,000+" },
    { label: "CO2 Reduced", value: "1.2M tons" },
    { label: "Transaction Speed", value: "65,000+ TPS" },
    { label: "Trading Volume", value: "$25M+" }
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
              <Newspaper className="h-16 w-16 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <Newspaper className="h-16 w-16 text-green-400/50" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Press <span className="text-gradient">Kit</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Access the latest news, media assets, and information about Energy Blockchain.
            For media inquiries and interview requests, please contact our press team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="h-5 w-5" />
              <span>press@energyblockchain.org</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Facts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center"
              >
                <h3 className="text-xl font-bold text-green-400 mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Press Releases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Recent Press Releases
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-green-400 font-medium">{release.category}</span>
                      <span className="text-sm text-gray-400">{release.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{release.excerpt}</p>
                    <div className="flex items-center text-green-400 text-sm font-medium">
                      <span>Read Full Release</span>
                      <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Assets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Media Assets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaAssets.map((asset, index) => {
              const Icon = asset.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{asset.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{asset.description}</p>
                  <div className="space-y-1">
                    {asset.files.map((file, fileIndex) => (
                      <div key={fileIndex} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{file}</span>
                        <Download className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{award.award}</h3>
                      <span className="text-sm text-green-400 font-medium">{award.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{award.organization}</p>
                    <p className="text-gray-400">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Media Inquiries
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              For interviews, quotes, or additional information about Energy Blockchain,
              please contact our press team. We're happy to provide expert commentary on
              renewable energy, blockchain technology, and sustainable innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                Contact Press Team
              </button>
              <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
                Download Press Kit
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}