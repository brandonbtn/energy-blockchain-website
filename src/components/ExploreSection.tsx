'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Cpu,
  Network,
  Map,
  Users,
  ArrowRight,
  Sparkles,
  Globe,
  Target,
  UserCheck
} from 'lucide-react'

const ExploreSection = () => {
  const sections = [
    {
      title: 'Technology',
      description: 'Discover our cutting-edge blockchain architecture and innovations',
      href: '/technology',
      icon: Cpu,
      color: 'blue',
      features: ['65,000+ TPS', 'Proof of Energy', 'Quantum Resistant']
    },
    {
      title: 'Ecosystem',
      description: 'Explore our network of energy producers, consumers, and partners',
      href: '/ecosystem',
      icon: Network,
      color: 'green',
      features: ['50,000+ Users', '1,200+ Producers', '45 Countries']
    },
    {
      title: 'Roadmap',
      description: 'Follow our journey to revolutionize renewable energy trading',
      href: '/roadmap',
      icon: Map,
      color: 'purple',
      features: ['Q2 2024 Mainnet', 'DEX Launch', 'Global Expansion']
    },
    {
      title: 'Team',
      description: 'Meet the visionaries and experts building the future of energy',
      href: '/team',
      icon: Users,
      color: 'orange',
      features: ['Industry Experts', 'Blockchain Veterans', 'Energy Pioneers']
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Explore ENERGY</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Our <span className="text-gradient">Ecosystem</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Dive deeper into the technology, community, and vision driving the renewable energy blockchain revolution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={section.href}>
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 h-full hover:border-green-500/30 transition-all duration-300 group cursor-pointer">
                    <div className={`w-14 h-14 bg-${section.color}-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-7 w-7 text-${section.color}-400`} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {section.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {section.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {section.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-500 text-xs">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-6">
            <Link
              href="/docs"
              className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span>Documentation</span>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <Target className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <UserCheck className="h-5 w-5" />
              <span>Connect Wallet</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExploreSection