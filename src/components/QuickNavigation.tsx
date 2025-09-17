'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import {
  Cpu,
  Network,
  Map,
  Users,
  FileText,
  LayoutDashboard,
  Zap,
  Leaf,
  BarChart3,
  Shield,
  Newspaper,
  Mail,
  ArrowRight
} from 'lucide-react'

const QuickNavigation = () => {
  const { t, ready } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const mainLinks = [
    {
      title: mounted && ready ? t('nav.technology') : 'Technology',
      description: mounted && ready ? t('quicknav.techDesc') : 'Blockchain architecture',
      href: '/technology',
      icon: Cpu,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: mounted && ready ? t('nav.ecosystem') : 'Ecosystem',
      description: mounted && ready ? t('quicknav.ecoDesc') : 'Network participants',
      href: '/ecosystem',
      icon: Network,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: mounted && ready ? t('nav.roadmap') : 'Roadmap',
      description: mounted && ready ? t('quicknav.roadmapDesc') : 'Development timeline',
      href: '/roadmap',
      icon: Map,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: mounted && ready ? t('nav.team') : 'Team',
      description: mounted && ready ? t('quicknav.teamDesc') : 'Meet our experts',
      href: '/team',
      icon: Users,
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  const platformLinks = [
    {
      title: mounted && ready ? t('quicknav.liveStats') : 'Live Stats',
      description: mounted && ready ? t('quicknav.liveStatsDesc') : 'Real-time metrics',
      href: '/live-stats',
      icon: BarChart3,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: mounted && ready ? t('quicknav.energyTrading') : 'Energy Trading',
      description: mounted && ready ? t('quicknav.energyTradingDesc') : 'Trade renewable energy',
      href: '/energy-trading',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      title: mounted && ready ? t('quicknav.carbonCredits') : 'Carbon Credits',
      description: mounted && ready ? t('quicknav.carbonCreditsDesc') : 'Offset emissions',
      href: '/carbon-marketplace',
      icon: Leaf,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: mounted && ready ? t('quicknav.features') : 'Features',
      description: mounted && ready ? t('quicknav.featuresDesc') : 'Platform capabilities',
      href: '/features',
      icon: Shield,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: mounted && ready ? t('nav.dashboard') : 'Dashboard',
      description: mounted && ready ? t('quicknav.dashboardDesc') : 'Manage portfolio',
      href: '/dashboard',
      icon: LayoutDashboard,
      gradient: 'from-pink-500 to-rose-600'
    }
  ]

  const resourceLinks = [
    {
      title: mounted && ready ? t('nav.documentation') : 'Documentation',
      description: mounted && ready ? t('quicknav.docsDesc') : 'Developer guides',
      href: '/docs',
      icon: FileText,
      gradient: 'from-slate-500 to-slate-700'
    },
    {
      title: mounted && ready ? t('quicknav.blog') : 'Blog',
      description: mounted && ready ? t('quicknav.blogDesc') : 'Latest updates',
      href: '/blog',
      icon: Newspaper,
      gradient: 'from-emerald-500 to-green-700'
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/50 to-slate-900/50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {mounted && ready ? t('quick.explore') : 'Explore ENERGY Blockchain'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href}>
                    <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

                      <Icon className="h-8 w-8 text-green-400 mb-4" />

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {link.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4">
                        {link.description}
                      </p>

                      <div className="flex items-center text-green-400 group-hover:text-green-300">
                        <span className="text-sm">Explore</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Platform Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href}>
                    <div className="group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 p-5 hover:bg-slate-800/50 hover:border-green-500/30 transition-all duration-300 cursor-pointer h-full">
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>

                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">
                            {link.title}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {resourceLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link key={index} href={link.href}>
                  <div className="group flex items-center space-x-3 px-6 py-3 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-xl hover:bg-slate-800/50 hover:border-green-500/30 transition-all duration-300 cursor-pointer">
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    <div>
                      <p className="text-white font-medium group-hover:text-green-400 transition-colors">
                        {link.title}
                      </p>
                      <p className="text-gray-500 text-xs">{link.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuickNavigation