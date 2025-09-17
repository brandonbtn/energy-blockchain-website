'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CarbonMarketplace from '@/components/CarbonMarketplace'
import { ArrowLeft, Leaf, Globe, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function CarbonMarketplacePage() {
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
            Carbon Credits <span className="text-gradient">Marketplace</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trade verified carbon credits and offset your emissions on the blockchain
          </p>
        </motion.div>

        {/* Carbon Marketplace Component */}
        <CarbonMarketplace />

        {/* Marketplace Stats */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, label: 'Carbon Offset', value: '450K', description: 'Tons CO₂ offset' },
              { icon: Globe, label: 'Global Projects', value: '89', description: 'Verified projects' },
              { icon: Award, label: 'Certifications', value: '12', description: 'Standards supported' },
              { icon: TrendingUp, label: 'Market Growth', value: '+125%', description: 'Year over year' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center"
                >
                  <Icon className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-green-400 font-medium mb-1">{stat.label}</p>
                  <p className="text-gray-500 text-sm">{stat.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}