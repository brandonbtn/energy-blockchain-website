'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Code,
  Terminal,
  BookOpen,
  Github,
  Zap,
  Cpu,
  Shield,
  Globe,
  Users,
  ExternalLink,
  Play,
  Download,
  FileText,
  Puzzle
} from 'lucide-react'
import Link from 'next/link'

export default function DevelopersPage() {
  const { t } = useTranslation()

  const quickStartSteps = [
    {
      icon: Terminal,
      title: "Install SDK",
      description: "Install the Energy Blockchain SDK via npm or yarn",
      code: "npm install @energy-blockchain/sdk"
    },
    {
      icon: Code,
      title: "Initialize Client",
      description: "Connect to the Energy blockchain network",
      code: "const client = new EnergyClient({ network: 'mainnet' })"
    },
    {
      icon: Zap,
      title: "Execute Transaction",
      description: "Send your first energy trading transaction",
      code: "await client.tradeEnergy({ amount: 100, price: 0.05 })"
    }
  ]

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/energy/markets",
      description: "Get all available energy markets and trading pairs"
    },
    {
      method: "POST",
      endpoint: "/api/v1/energy/trade",
      description: "Execute an energy trading transaction"
    },
    {
      method: "GET",
      endpoint: "/api/v1/validators/stats",
      description: "Get current validator network statistics"
    },
    {
      method: "GET",
      endpoint: "/api/v1/carbon/credits",
      description: "Retrieve carbon credit marketplace data"
    },
    {
      method: "POST",
      endpoint: "/api/v1/energy/mint",
      description: "Mint energy tokens from renewable sources"
    }
  ]

  const sdkFeatures = [
    {
      icon: Zap,
      title: "Energy Trading",
      description: "Built-in functions for peer-to-peer energy trading",
      languages: ["JavaScript", "Python", "Rust", "Go"]
    },
    {
      icon: Shield,
      title: "Smart Contracts",
      description: "Deploy and interact with energy smart contracts",
      languages: ["Solidity", "Rust", "Move"]
    },
    {
      icon: Users,
      title: "Validator Tools",
      description: "Utilities for running and managing validator nodes",
      languages: ["Rust", "Go", "Docker"]
    },
    {
      icon: Globe,
      title: "Cross-Chain Bridge",
      description: "Bridge assets between Energy and other blockchains",
      languages: ["JavaScript", "Python", "Rust"]
    }
  ]

  const resources = [
    {
      title: "API Documentation",
      description: "Complete REST API reference and WebSocket documentation",
      icon: BookOpen,
      link: "/docs/api"
    },
    {
      title: "SDK Reference",
      description: "Comprehensive SDK documentation for all supported languages",
      icon: Code,
      link: "/docs/sdk"
    },
    {
      title: "Smart Contract Examples",
      description: "Sample contracts for energy trading and carbon credits",
      icon: FileText,
      link: "/docs/contracts"
    },
    {
      title: "Tutorials & Guides",
      description: "Step-by-step tutorials for building on Energy blockchain",
      icon: Play,
      link: "/docs/tutorials"
    },
    {
      title: "GitHub Repository",
      description: "Open-source code, examples, and community contributions",
      icon: Github,
      link: "https://github.com/energy-blockchain"
    },
    {
      title: "Developer Tools",
      description: "Testing frameworks, debuggers, and development utilities",
      icon: Terminal,
      link: "/docs/tools"
    }
  ]

  const codeExamples = [
    {
      title: "Energy Trading",
      language: "JavaScript",
      code: `// Trade renewable energy tokens
const trade = await energyClient.createTrade({
  energyType: 'SOLAR',
  amount: 1000, // kWh
  price: 0.05, // per kWh
  location: 'grid-region-1'
});

console.log('Trade executed:', trade.txHash);`
    },
    {
      title: "Carbon Credits",
      language: "Python",
      code: `# Verify and trade carbon credits
carbon_client = CarbonClient(api_key='your-key')

credit = carbon_client.verify_credit({
    'project_id': 'reforestation-001',
    'tons_co2': 100,
    'verification_standard': 'VCS'
})

trade_result = carbon_client.trade_credit(credit.id, price=25)`
    },
    {
      title: "Validator Node",
      language: "Rust",
      code: `// Start validator node
use energy_blockchain::validator::Node;

let config = ValidatorConfig {
    stake_amount: 50000,
    commission_rate: 0.05,
    rpc_endpoint: "https://rpc.energy.blockchain"
};

let validator = Node::new(config)?;
validator.start().await?;`
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

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 pb-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Code className="h-16 w-16 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <Code className="h-16 w-16 text-green-400/50" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Developer <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Build the future of renewable energy trading with our comprehensive developer tools,
            APIs, and SDKs. Join the growing ecosystem of Energy blockchain developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
              Get Started
            </button>
            <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
              View Documentation
            </button>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Start Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickStartSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 relative"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                  <div className="bg-slate-900 border border-slate-600 rounded-lg p-3">
                    <code className="text-green-400 text-sm font-mono">{step.code}</code>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* SDK Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            SDK Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sdkFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.languages.map((lang, langIndex) => (
                      <span
                        key={langIndex}
                        className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-md"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* API Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            API Endpoints
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-slate-700 last:border-b-0 p-6 hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className={`px-2 py-1 text-xs font-mono rounded ${
                      endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <div className="flex-1">
                      <code className="text-white font-mono text-sm">{endpoint.endpoint}</code>
                      <p className="text-gray-400 text-sm mt-2">{endpoint.description}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-green-400 transition-colors cursor-pointer" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Code Examples
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                    <span className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {example.language}
                    </span>
                  </div>
                  <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                    <Download className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="p-4 bg-slate-900/50">
                  <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Developer Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <span>Explore</span>
                    <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Building Today
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building the future of renewable energy trading.
              Get started with our comprehensive documentation and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                Read Documentation
              </button>
              <Link
                href="/community"
                className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
              >
                Join Community
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}