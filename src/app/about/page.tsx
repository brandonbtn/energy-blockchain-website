'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Shield,
  Leaf,
  Lightbulb,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const { t } = useTranslation()

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to building technology that protects and nurtures our planet for future generations."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete transparency in our operations, technology, and commitment to renewable energy trading."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building an inclusive global community of energy traders, validators, and sustainability advocates."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing the boundaries of blockchain technology to solve real-world energy challenges."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that can scale globally and make renewable energy accessible to everyone."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in security, performance, and user experience."
    }
  ]

  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "Energy Blockchain founded with the vision to revolutionize renewable energy trading"
    },
    {
      year: "2023",
      title: "Testnet Launch",
      description: "Successfully launched testnet with 65,000+ TPS and carbon credit integration"
    },
    {
      year: "2024",
      title: "Mainnet Beta",
      description: "Mainnet beta release with DEX, validator network, and energy trading platform"
    },
    {
      year: "2024",
      title: "Partnership Growth",
      description: "Strategic partnerships with major renewable energy providers and trading platforms"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "International expansion and integration with traditional energy markets"
    }
  ]

  const stats = [
    { label: "Countries Served", value: "45+", icon: Globe },
    { label: "Energy Providers", value: "250+", icon: Zap },
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "CO2 Reduced", value: "1.2M tons", icon: Leaf }
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
              <Heart className="h-16 w-16 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <Heart className="h-16 w-16 text-green-400/50" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">Energy Blockchain</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            We're building the future of renewable energy trading through innovative blockchain technology,
            creating a sustainable and decentralized energy marketplace for everyone.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400">
                To democratize renewable energy trading through blockchain technology, making clean energy
                accessible, tradeable, and profitable for communities worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">
                A world where renewable energy is the primary power source, traded seamlessly on a
                decentralized platform that benefits both producers and consumers.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
              <p className="text-gray-400">
                Reducing global carbon emissions while creating economic opportunities for renewable
                energy producers and enabling efficient energy distribution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Global Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
                >
                  <Icon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-400/30" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6 pb-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-slate-900 rounded-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-green-400 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Learn more about the passionate individuals behind Energy Blockchain who are working
              tirelessly to create a sustainable energy future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/team"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200"
              >
                View Team
              </Link>
              <Link
                href="/careers"
                className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
              >
                Join Us
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}