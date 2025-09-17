'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TokenEcosystem from '@/components/TokenEcosystem'
import { ArrowLeft, Users, Building2, Coins, Globe } from 'lucide-react'
import Link from 'next/link'

export default function EcosystemPage() {
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

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 pb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ENERGY <span className="text-gradient">Ecosystem</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how ENERGY tokens power the Soltolaria platform and connect energy markets globally
          </p>
        </motion.div>

        {/* Token Ecosystem Component */}
        <TokenEcosystem />

        {/* Token Stats */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Users, label: 'Token Holders', value: '50,000+', growth: '+125%' },
              { icon: Building2, label: 'Partner Platforms', value: '25+', growth: '+85%' },
              { icon: Coins, label: 'Market Cap', value: '$125M', growth: '+45%' },
              { icon: Globe, label: 'Available Markets', value: '45', growth: '+12' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{stat.growth}</span>
                  </div>
                  <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Token Ecosystem Participants */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Token Holders</h3>
              <p className="text-gray-400 mb-6">
                ENERGY token holders participating in governance and earning rewards
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Individual Investors
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Institutional Funds
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  DeFi Protocols
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Energy Traders
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Platform Users</h3>
              <p className="text-gray-400 mb-6">
                Soltolaria platform users leveraging ENERGY tokens for transactions
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Energy Producers
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Energy Consumers
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Carbon Credit Traders
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Grid Operators
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Ecosystem Partners</h3>
              <p className="text-gray-400 mb-6">
                Strategic partners integrating ENERGY tokens into their services
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  DEX Platforms
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Wallet Providers
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Oracle Networks
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Lending Protocols
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}