'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Shield,
  Lock,
  Key,
  Fingerprint,
  Eye,
  AlertTriangle,
  CheckCircle,
  Cpu,
  Globe,
  Zap
} from 'lucide-react'

const SecurityFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const securityLayers = [
    {
      icon: Shield,
      title: 'Byzantine Fault Tolerance',
      description: 'Enterprise-grade consensus with 99.99% uptime guarantee',
      features: ['33% fault tolerance', 'Automated slashing', 'Reputation system']
    },
    {
      icon: Lock,
      title: 'Quantum-Resistant Cryptography',
      description: 'Future-proof security against quantum computing threats',
      features: ['Post-quantum algorithms', 'Lattice-based crypto', 'Hash-based signatures']
    },
    {
      icon: Fingerprint,
      title: 'Multi-Factor Authentication',
      description: 'Advanced identity verification for all transactions',
      features: ['Biometric support', 'Hardware keys', 'Time-based OTP']
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: 'AI-powered threat detection and response system',
      features: ['24/7 monitoring', 'Anomaly detection', 'Automated response']
    }
  ]

  const complianceStandards = [
    { name: 'ISO 27001', status: 'certified' },
    { name: 'SOC 2 Type II', status: 'certified' },
    { name: 'GDPR', status: 'compliant' },
    { name: 'CCPA', status: 'compliant' },
    { name: 'Energy Grid Standards', status: 'certified' },
    { name: 'Financial Regulations', status: 'compliant' }
  ]

  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Shield className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Military-Grade Security</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unbreakable <span className="text-gradient">Security</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multi-layered security architecture protecting your energy assets
            with quantum-resistant encryption and real-time threat monitoring.
          </p>
        </motion.div>

        {/* Security Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityLayers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{layer.title}</h3>
                    <p className="text-gray-400 mb-4">{layer.description}</p>
                    <ul className="space-y-2">
                      {layer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Compliance & Certifications
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center ${
                  standard.status === 'certified'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p className="text-white font-medium text-sm">{standard.name}</p>
                <p className={`text-xs mt-1 ${
                  standard.status === 'certified' ? 'text-green-400' : 'text-blue-400'
                }`}>
                  {standard.status}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: 'Uptime', value: '99.99%', icon: Zap },
            { label: 'Security Audits', value: '12/year', icon: Eye },
            { label: 'Threat Response', value: '< 1s', icon: AlertTriangle },
            { label: 'Encryption', value: '256-bit', icon: Key }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30"
              >
                <Icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SecurityFeatures