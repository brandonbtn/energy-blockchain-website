'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Book,
  Code,
  FileText,
  Rocket,
  Terminal,
  Database,
  Shield,
  Zap,
  ChevronRight,
  Search,
  Copy,
  Check,
  ExternalLink,
  GitBranch,
  Package,
  Settings,
  Cloud,
  Key,
  Globe
} from 'lucide-react'

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      items: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'quick-start', label: 'Quick Start' },
        { id: 'installation', label: 'Installation' },
        { id: 'configuration', label: 'Configuration' }
      ]
    },
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      icon: Book,
      items: [
        { id: 'proof-of-energy', label: 'Proof of Energy' },
        { id: 'consensus', label: 'Consensus Mechanism' },
        { id: 'tokenomics', label: 'Tokenomics' },
        { id: 'governance', label: 'Governance' }
      ]
    },
    {
      id: 'developers',
      title: 'For Developers',
      icon: Code,
      items: [
        { id: 'sdk', label: 'SDK Overview' },
        { id: 'smart-contracts', label: 'Smart Contracts' },
        { id: 'api-reference', label: 'API Reference' },
        { id: 'examples', label: 'Code Examples' }
      ]
    },
    {
      id: 'validators',
      title: 'For Validators',
      icon: Shield,
      items: [
        { id: 'validator-setup', label: 'Validator Setup' },
        { id: 'staking', label: 'Staking Guide' },
        { id: 'rewards', label: 'Rewards System' },
        { id: 'best-practices', label: 'Best Practices' }
      ]
    },
    {
      id: 'trading',
      title: 'Energy Trading',
      icon: Zap,
      items: [
        { id: 'marketplace', label: 'Marketplace Overview' },
        { id: 'trading-api', label: 'Trading API' },
        { id: 'carbon-credits', label: 'Carbon Credits' },
        { id: 'defi-protocols', label: 'DeFi Protocols' }
      ]
    }
  ]

  const codeExamples = {
    'quick-start': `# Install ENERGY CLI
npm install -g @energy/cli

# Initialize new project
energy init my-energy-dapp

# Deploy to testnet
energy deploy --network testnet`,
    'smart-contract': `// ENERGY Smart Contract Example
pragma solidity ^0.8.0;

contract EnergyTrading {
    mapping(address => uint256) public energyBalance;

    event EnergyTraded(
        address indexed from,
        address indexed to,
        uint256 amount
    );

    function tradeEnergy(address to, uint256 amount) public {
        require(energyBalance[msg.sender] >= amount, "Insufficient balance");
        energyBalance[msg.sender] -= amount;
        energyBalance[to] += amount;
        emit EnergyTraded(msg.sender, to, amount);
    }
}`,
    'api-call': `// Connect to ENERGY Blockchain
import { EnergyClient } from '@energy/sdk';

const client = new EnergyClient({
  network: 'mainnet',
  apiKey: process.env.ENERGY_API_KEY
});

// Get current energy price
const price = await client.getEnergyPrice();
console.log(\`Current price: $\${price.usd}/kWh\`);

// Submit energy transaction
const tx = await client.submitTransaction({
  from: '0x...',
  to: '0x...',
  amount: 1000, // kWh
  type: 'solar'
});`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/10 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-white">
                ENERGY <span className="text-green-400">Docs</span>
              </h1>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">API</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              </nav>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 w-64"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <div key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center space-x-3 w-full px-4 py-2 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-green-500/20 text-green-400'
                          : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{section.title}</span>
                    </button>

                    {activeSection === section.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="ml-8 mt-2 space-y-1"
                      >
                        {section.items.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="block px-4 py-2 text-sm text-gray-500 hover:text-green-400 transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {activeSection === 'getting-started' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Getting Started</h2>
                  <p className="text-gray-400 mb-8">
                    Welcome to the ENERGY Blockchain documentation. Get up and running with our platform in minutes.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Terminal className="h-5 w-5 text-green-400 mr-2" />
                        Quick Start Guide
                      </h3>
                      <div className="bg-slate-900/50 rounded-xl p-4 relative">
                        <button
                          onClick={() => handleCopyCode(codeExamples['quick-start'], 'quick-start')}
                          className="absolute top-4 right-4 text-gray-500 hover:text-green-400 transition-colors"
                        >
                          {copiedCode === 'quick-start' ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                          <code>{codeExamples['quick-start']}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Prerequisites</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Node.js 16.0 or higher</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span>npm or yarn package manager</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Basic understanding of blockchain concepts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <Package className="h-5 w-5 text-green-400" />
                          <div>
                            <p className="text-white font-medium">SDK Documentation</p>
                            <p className="text-gray-500 text-sm">Complete SDK reference</p>
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                      </a>

                      <a
                        href="#"
                        className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <GitBranch className="h-5 w-5 text-green-400" />
                          <div>
                            <p className="text-white font-medium">GitHub Examples</p>
                            <p className="text-gray-500 text-sm">Sample projects & code</p>
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Installation Section */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Installation</h3>

                  <div className="space-y-6">
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                      <div className="flex items-start space-x-3">
                        <Settings className="h-5 w-5 text-blue-400 mt-0.5" />
                        <div>
                          <p className="text-white font-medium mb-1">System Requirements</p>
                          <p className="text-gray-400 text-sm">Minimum 8GB RAM, 100GB SSD, Ubuntu 20.04 or higher</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Option 1: Docker Installation</h4>
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <pre className="text-green-400 font-mono text-sm">
                          <code>{`docker pull energy/node:latest
docker run -d -p 9944:9944 energy/node:latest`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Option 2: Build from Source</h4>
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <pre className="text-green-400 font-mono text-sm">
                          <code>{`git clone https://github.com/energy-blockchain/node
cd node && cargo build --release
./target/release/energy-node --chain mainnet`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'developers' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Developer Documentation</h2>
                  <p className="text-gray-400 mb-8">
                    Build decentralized applications on the ENERGY blockchain with our comprehensive developer tools.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Smart Contract Example</h3>
                      <div className="bg-slate-900/50 rounded-xl p-4 relative">
                        <button
                          onClick={() => handleCopyCode(codeExamples['smart-contract'], 'smart-contract')}
                          className="absolute top-4 right-4 text-gray-500 hover:text-green-400 transition-colors"
                        >
                          {copiedCode === 'smart-contract' ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                          <code>{codeExamples['smart-contract']}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">API Integration</h3>
                      <div className="bg-slate-900/50 rounded-xl p-4 relative">
                        <button
                          onClick={() => handleCopyCode(codeExamples['api-call'], 'api-call')}
                          className="absolute top-4 right-4 text-gray-500 hover:text-green-400 transition-colors"
                        >
                          {copiedCode === 'api-call' ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                          <code>{codeExamples['api-call']}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-slate-700/30 rounded-xl">
                        <Database className="h-8 w-8 text-green-400 mb-3" />
                        <h4 className="text-white font-medium mb-1">RPC Endpoints</h4>
                        <p className="text-gray-500 text-sm">Connect to our nodes</p>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl">
                        <Key className="h-8 w-8 text-green-400 mb-3" />
                        <h4 className="text-white font-medium mb-1">API Keys</h4>
                        <p className="text-gray-500 text-sm">Manage your access</p>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl">
                        <Cloud className="h-8 w-8 text-green-400 mb-3" />
                        <h4 className="text-white font-medium mb-1">Webhooks</h4>
                        <p className="text-gray-500 text-sm">Real-time events</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* API Reference */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">API Reference</h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded">GET</span>
                        <code className="text-white font-mono">/api/v1/energy/price</code>
                      </div>
                      <p className="text-gray-400 text-sm">Get current energy trading price</p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">POST</span>
                        <code className="text-white font-mono">/api/v1/transactions/submit</code>
                      </div>
                      <p className="text-gray-400 text-sm">Submit energy trading transaction</p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded">WS</span>
                        <code className="text-white font-mono">/api/v1/ws/subscribe</code>
                      </div>
                      <p className="text-gray-400 text-sm">Subscribe to real-time blockchain events</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Additional sections can be added here */}
          </main>
        </div>
      </div>
    </div>
  )
}

export default DocsPage