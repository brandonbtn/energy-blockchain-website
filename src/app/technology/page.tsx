'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Technology from '@/components/Technology'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TechnologyPage() {
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
            Our <span className="text-gradient">Technology</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the innovative technology powering the ENERGY blockchain ecosystem
          </p>
        </motion.div>

        {/* Technology Component */}
        <Technology />

        {/* Additional Technology Details */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Technical Architecture</h2>
              <p className="text-gray-400">
                ENERGY blockchain utilizes a modular architecture built on Substrate framework,
                enabling unprecedented scalability and customization for energy-specific use cases.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Consensus Layer</h3>
                  <p className="text-gray-400 text-sm">
                    Proof of Energy consensus mechanism validates transactions based on renewable energy production
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Smart Contract Layer</h3>
                  <p className="text-gray-400 text-sm">
                    EVM-compatible smart contracts with specialized energy trading primitives
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Data Layer</h3>
                  <p className="text-gray-400 text-sm">
                    Distributed storage with IPFS integration for energy certificates and audit trails
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Performance Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                  <p className="text-3xl font-bold text-green-400">65,000+</p>
                  <p className="text-gray-400 text-sm mt-2">Transactions Per Second</p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                  <p className="text-3xl font-bold text-green-400">0.3s</p>
                  <p className="text-gray-400 text-sm mt-2">Block Time</p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                  <p className="text-3xl font-bold text-green-400">$0.0001</p>
                  <p className="text-gray-400 text-sm mt-2">Average Gas Fee</p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                  <p className="text-3xl font-bold text-green-400">99.99%</p>
                  <p className="text-gray-400 text-sm mt-2">Network Uptime</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}