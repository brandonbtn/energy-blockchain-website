'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Leaf,
  TrendingUp,
  Award,
  Globe,
  CheckCircle,
  BarChart3,
  Trees,
  Factory,
  Plane,
  Car,
  ShieldCheck,
  ArrowRight
} from 'lucide-react'
import CountUp from 'react-countup'

const CarbonMarketplace = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedCategory, setSelectedCategory] = useState('renewable')

  const carbonCategories = [
    { id: 'renewable', name: 'Renewable Energy', icon: Trees, credits: 450000, price: 32.50, verified: true },
    { id: 'forestry', name: 'Forest Conservation', icon: Trees, credits: 320000, price: 28.75, verified: true },
    { id: 'industrial', name: 'Industrial Reduction', icon: Factory, credits: 180000, price: 35.20, verified: true },
    { id: 'transport', name: 'Clean Transportation', icon: Car, credits: 95000, price: 30.10, verified: true }
  ]

  const standards = [
    { name: 'VCS', full: 'Verified Carbon Standard', active: true },
    { name: 'Gold Standard', full: 'Gold Standard Foundation', active: true },
    { name: 'CDM', full: 'Clean Development Mechanism', active: true },
    { name: 'CAR', full: 'Climate Action Reserve', active: false }
  ]

  const recentRetirements = [
    { company: 'Microsoft', amount: 15000, purpose: 'Carbon Neutral Operations', time: '1 hour ago' },
    { company: 'Apple', amount: 8500, purpose: 'Supply Chain Offset', time: '3 hours ago' },
    { company: 'Tesla', amount: 5200, purpose: 'Manufacturing Offset', time: '5 hours ago' },
    { company: 'Amazon', amount: 22000, purpose: 'Delivery Fleet Offset', time: '8 hours ago' }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-green-900/20 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Leaf className="h-4 w-4 text-emerald-400 mr-2" />
            <span className="text-emerald-400 text-sm font-medium">Carbon Credit Exchange</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Verified <span className="text-carbon-gradient">Carbon Credits</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trade verified carbon credits with international standards compliance.
            Instant verification, automated retirement, and transparent pricing.
          </p>
        </motion.div>

        {/* Carbon Credit Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Total Credits', value: 1000000, suffix: '+', icon: Leaf, color: 'green' },
            { label: 'Credits Retired', value: 450000, suffix: '', icon: CheckCircle, color: 'emerald' },
            { label: 'Avg Price', value: 31.25, prefix: '$', suffix: '', icon: TrendingUp, color: 'blue' },
            { label: 'CO₂ Offset', value: 2.5, suffix: 'M tons', icon: Globe, color: 'purple' }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center"
              >
                <Icon className={`h-8 w-8 text-${stat.color}-400 mx-auto mb-3`} />
                <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                  {stat.prefix}
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      separator=","
                      decimals={stat.prefix === '$' ? 2 : 0}
                    />
                  )}
                  {stat.suffix}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Main Marketplace Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Carbon Categories */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-green-400" />
                Carbon Credit Categories
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {carbonCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <motion.div
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 border-emerald-500/50'
                          : 'bg-slate-700/30 border-slate-600/50'
                      } border`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-6 w-6 text-emerald-400" />
                          <h4 className="text-white font-semibold">{category.name}</h4>
                        </div>
                        {category.verified && (
                          <ShieldCheck className="h-5 w-5 text-green-400" />
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Available</span>
                          <span className="text-white font-medium">
                            {(category.credits / 1000).toFixed(0)}K credits
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Price/ton</span>
                          <span className="text-emerald-400 font-medium">
                            ${category.price}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Certification Standards */}
              <div className="border-t border-slate-700 pt-6">
                <h4 className="text-white font-semibold mb-4">Certification Standards</h4>
                <div className="grid grid-cols-2 gap-3">
                  {standards.map((standard, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        standard.active
                          ? 'bg-emerald-500/10 border border-emerald-500/30'
                          : 'bg-slate-700/30 border border-slate-600/30 opacity-60'
                      }`}
                    >
                      <CheckCircle className={`h-4 w-4 ${
                        standard.active ? 'text-emerald-400' : 'text-gray-500'
                      }`} />
                      <div>
                        <p className="text-white font-medium text-sm">{standard.name}</p>
                        <p className="text-gray-400 text-xs">{standard.full}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent Retirements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <Award className="h-5 w-5 mr-2 text-emerald-400" />
              Recent Retirements
            </h3>

            <div className="space-y-4">
              {recentRetirements.map((retirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="border-b border-slate-700/50 pb-3 last:border-0"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-white font-medium">{retirement.company}</p>
                      <p className="text-emerald-400 text-sm font-medium">
                        {retirement.amount.toLocaleString()} tons CO₂
                      </p>
                    </div>
                    <span className="text-gray-500 text-xs">{retirement.time}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{retirement.purpose}</p>
                </motion.div>
              ))}
            </div>

            <button className="w-full mt-6 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-400 font-medium transition-all duration-200 flex items-center justify-center space-x-2">
              <span>View All Retirements</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl p-12 border border-emerald-500/20"
        >
          <Leaf className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Start Trading Carbon Credits Today
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of organizations offsetting their carbon footprint through
            our verified marketplace. Instant settlement and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105">
              Browse Credits
            </button>
            <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-full font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CarbonMarketplace