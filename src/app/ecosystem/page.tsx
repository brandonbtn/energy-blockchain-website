'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Ecosystem from '@/components/Ecosystem'
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
            A comprehensive network of stakeholders driving the renewable energy revolution
          </p>
        </motion.div>

        {/* Ecosystem Component */}
        <Ecosystem />

        {/* Ecosystem Stats */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Users, label: 'Active Users', value: '50,000+', growth: '+125%' },
              { icon: Building2, label: 'Energy Producers', value: '1,200+', growth: '+85%' },
              { icon: Coins, label: 'Total Value Locked', value: '$125M', growth: '+45%' },
              { icon: Globe, label: 'Countries', value: '45', growth: '+12' }
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

          {/* Ecosystem Participants */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Energy Producers</h3>
              <p className="text-gray-400 mb-6">
                Renewable energy facilities that generate and sell clean energy through our platform
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Solar Farms
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Wind Turbines
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Hydroelectric Plants
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Geothermal Facilities
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
              <h3 className="text-2xl font-bold text-white mb-4">Energy Consumers</h3>
              <p className="text-gray-400 mb-6">
                Businesses and individuals purchasing clean energy directly from producers
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Industrial Facilities
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Commercial Buildings
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Residential Homes
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Electric Vehicle Fleets
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
              <h3 className="text-2xl font-bold text-white mb-4">Service Providers</h3>
              <p className="text-gray-400 mb-6">
                Essential services supporting the energy trading ecosystem
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Grid Operators
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Energy Auditors
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Carbon Verifiers
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  DeFi Protocols
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