'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Roadmap from '@/components/Roadmap'
import { ArrowLeft, CheckCircle, Circle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function RoadmapPage() {
  const milestones = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      title: 'Foundation & Infrastructure',
      items: [
        'Core blockchain development',
        'Proof of Energy consensus implementation',
        'Smart contract framework',
        'Testnet alpha launch'
      ]
    },
    {
      quarter: 'Q2 2024',
      status: 'current',
      title: 'Mainnet Launch',
      items: [
        'Public testnet with 65,000+ TPS',
        'Security audits completion',
        'Mainnet genesis block',
        'Initial validator onboarding'
      ]
    },
    {
      quarter: 'Q3 2024',
      status: 'upcoming',
      title: 'Ecosystem Expansion',
      items: [
        'DEX launch for energy trading',
        'Carbon credits marketplace',
        'Mobile wallet release',
        'Partnership integrations'
      ]
    },
    {
      quarter: 'Q4 2024',
      status: 'upcoming',
      title: 'Global Scaling',
      items: [
        'Cross-chain bridges',
        'Institutional partnerships',
        'Regulatory compliance expansion',
        'Community governance launch'
      ]
    },
    {
      quarter: 'Q1 2025',
      status: 'upcoming',
      title: 'Advanced Features',
      items: [
        'AI-powered grid optimization',
        'Predictive energy trading',
        'IoT device integration',
        'Enterprise solutions'
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

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 pb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Development <span className="text-gradient">Roadmap</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our journey to revolutionize renewable energy trading on the blockchain
          </p>
        </motion.div>

        {/* Roadmap Component */}
        <Roadmap />

        {/* Detailed Timeline */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Detailed Timeline
          </h2>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-slate-700" />
                )}

                {/* Status Icon */}
                <div className="flex-shrink-0 mr-6">
                  {milestone.status === 'completed' ? (
                    <CheckCircle className="h-12 w-12 text-green-400" />
                  ) : milestone.status === 'current' ? (
                    <div className="relative">
                      <Circle className="h-12 w-12 text-yellow-400" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
                      </div>
                    </div>
                  ) : (
                    <Clock className="h-12 w-12 text-gray-500" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        milestone.status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : milestone.status === 'current'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {milestone.quarter}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {milestone.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            milestone.status === 'completed'
                              ? 'bg-green-400'
                              : milestone.status === 'current'
                              ? 'bg-yellow-400'
                              : 'bg-gray-500'
                          }`} />
                          <span className="text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3" />
              <span className="text-green-400 font-medium">40% Complete - On Track for Q2 2024 Mainnet Launch</span>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}