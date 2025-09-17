'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Features from '@/components/Features'
import Metrics from '@/components/Metrics'
import SecurityFeatures from '@/components/SecurityFeatures'
import CompetitiveAdvantage from '@/components/CompetitiveAdvantage'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
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
            Platform <span className="text-gradient">Features</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the powerful features that make ENERGY the most advanced renewable energy blockchain
          </p>
        </motion.div>

        {/* Core Features */}
        <Features />

        {/* Live Metrics */}
        <Metrics />

        {/* Security Features */}
        <SecurityFeatures />

        {/* Competitive Advantages */}
        <CompetitiveAdvantage />
      </main>

      <Footer />
    </div>
  )
}