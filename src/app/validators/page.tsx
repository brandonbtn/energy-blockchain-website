'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Shield,
  Zap,
  Server,
  Award,
  Users,
  TrendingUp,
  Globe,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign
} from 'lucide-react'
import Link from 'next/link'

export default function ValidatorsPage() {
  const { t } = useTranslation()

  const validatorBenefits = [
    {
      icon: DollarSign,
      title: "Earn Rewards",
      description: "Earn up to 12% APY by validating transactions and securing the network."
    },
    {
      icon: Shield,
      title: "Secure Network",
      description: "Help maintain the security and integrity of the Energy blockchain network."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contribute to the decentralization of renewable energy trading worldwide."
    },
    {
      icon: TrendingUp,
      title: "Growing Ecosystem",
      description: "Be part of the fastest-growing renewable energy blockchain ecosystem."
    },
    {
      icon: Users,
      title: "Community Governance",
      description: "Participate in network governance and decision-making processes."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Gain recognition as a key contributor to sustainable blockchain technology."
    }
  ]

  const networkStats = [
    { label: "Active Validators", value: "1,247", icon: Server },
    { label: "Network Uptime", value: "99.97%", icon: CheckCircle },
    { label: "Total Staked", value: "45.2M ENERGY", icon: Zap },
    { label: "Average APY", value: "11.8%", icon: TrendingUp }
  ]

  const requirements = [
    {
      title: "Minimum Stake",
      description: "50,000 ENERGY tokens required to become a validator",
      status: "required"
    },
    {
      title: "Hardware Requirements",
      description: "8 CPU cores, 32GB RAM, 1TB SSD, 100Mbps internet",
      status: "recommended"
    },
    {
      title: "Technical Knowledge",
      description: "Experience with blockchain nodes and server administration",
      status: "required"
    },
    {
      title: "Uptime Commitment",
      description: "Maintain 99%+ uptime to avoid slashing penalties",
      status: "critical"
    }
  ]

  const topValidators = [
    { rank: 1, name: "SolarNode Pro", stake: "2.1M ENERGY", uptime: "99.98%", commission: "5%" },
    { rank: 2, name: "WindPower Validator", stake: "1.8M ENERGY", uptime: "99.95%", commission: "7%" },
    { rank: 3, name: "HydroStake", stake: "1.6M ENERGY", uptime: "99.97%", commission: "6%" },
    { rank: 4, name: "GreenEnergy Node", stake: "1.4M ENERGY", uptime: "99.94%", commission: "8%" },
    { rank: 5, name: "EcoValidator", stake: "1.2M ENERGY", uptime: "99.96%", commission: "5.5%" }
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
              <Server className="h-16 w-16 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <Server className="h-16 w-16 text-green-400/50" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Validator <span className="text-gradient">Network</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join the Energy blockchain validator network and help secure the world's first
            renewable energy trading platform while earning sustainable rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
              Become a Validator
            </button>
            <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
              Stake with Validators
            </button>
          </div>
        </motion.div>

        {/* Network Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => {
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
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Validator Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Become a Validator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {validatorBenefits.map((benefit, index) => {
              const Icon = benefit.icon
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
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Validator Requirements
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 ${
                      req.status === 'critical' ? 'text-red-400' :
                      req.status === 'required' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {req.status === 'critical' ? <AlertCircle className="h-5 w-5" /> :
                       req.status === 'required' ? <Clock className="h-5 w-5" /> :
                       <CheckCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{req.title}</h3>
                      <p className="text-gray-400">{req.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top Validators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Top Validators
          </h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-6 border-b border-slate-700 text-gray-400 font-semibold">
              <div>Rank</div>
              <div>Validator</div>
              <div>Total Stake</div>
              <div>Uptime</div>
              <div>Commission</div>
            </div>
            {topValidators.map((validator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="grid grid-cols-5 gap-4 p-6 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/30 transition-colors cursor-pointer"
              >
                <div className="text-green-400 font-bold">#{validator.rank}</div>
                <div className="text-white font-semibold">{validator.name}</div>
                <div className="text-white">{validator.stake}</div>
                <div className="text-green-400">{validator.uptime}</div>
                <div className="text-gray-400">{validator.commission}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure the Network?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our growing network of validators and earn rewards while contributing to the
              future of renewable energy trading on blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                Setup Validator Node
              </button>
              <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
                Read Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}