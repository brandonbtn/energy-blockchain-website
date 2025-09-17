'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wallet,
  X,
  ChevronRight,
  Shield,
  Check,
  AlertCircle,
  ExternalLink,
  Copy,
  Power,
  TrendingUp,
  Lock,
  Key,
  Globe,
  Zap,
  DollarSign
} from 'lucide-react'

interface WalletConnectProps {
  isOpen: boolean
  onClose: () => void
  onConnect: (wallet: string) => void
}

const WalletConnect: React.FC<WalletConnectProps> = ({ isOpen, onClose, onConnect }) => {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [copiedAddress, setCopiedAddress] = useState(false)

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'Connect using browser extension',
      icon: '🦊',
      installed: true,
      popular: true
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      description: 'Scan QR code to connect',
      icon: '🔗',
      installed: true,
      popular: true
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      description: 'Connect with Coinbase',
      icon: '💙',
      installed: false,
      popular: false
    },
    {
      id: 'trust',
      name: 'Trust Wallet',
      description: 'Mobile crypto wallet',
      icon: '🛡️',
      installed: false,
      popular: false
    },
    {
      id: 'ledger',
      name: 'Ledger',
      description: 'Hardware wallet connection',
      icon: '📱',
      installed: false,
      popular: false
    }
  ]

  const handleWalletConnect = async (walletId: string) => {
    setSelectedWallet(walletId)
    setIsConnecting(true)

    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      setIsConnected(true)
      setWalletAddress('0x7f9e8b2c3a4d5e6f1234567890abcdef12345678')
      onConnect(walletId)
    }, 2000)
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2000)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setSelectedWallet(null)
    setWalletAddress('')
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Wallet className="h-6 w-6 text-green-400 mr-3" />
              {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {!isConnected ? (
              <>
                {!isConnecting ? (
                  <>
                    <p className="text-gray-400 mb-6">
                      Connect your wallet to access the ENERGY blockchain ecosystem
                    </p>

                    {/* Wallet List */}
                    <div className="space-y-3">
                      {wallets.map((wallet) => (
                        <motion.button
                          key={wallet.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleWalletConnect(wallet.id)}
                          className="w-full p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-green-500/50 rounded-xl transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="text-3xl">{wallet.icon}</span>
                              <div className="text-left">
                                <p className="text-white font-medium flex items-center">
                                  {wallet.name}
                                  {wallet.popular && (
                                    <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                                      Popular
                                    </span>
                                  )}
                                </p>
                                <p className="text-gray-500 text-sm">{wallet.description}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {wallet.installed ? (
                                <span className="text-green-400 text-sm">Detected</span>
                              ) : (
                                <span className="text-gray-500 text-sm">Install</span>
                              )}
                              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Security Note */}
                    <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-blue-400 mt-0.5" />
                        <div>
                          <p className="text-white font-medium text-sm mb-1">Secure Connection</p>
                          <p className="text-gray-400 text-xs">
                            Your wallet connection is encrypted and secure. Never share your seed phrase.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Connecting State */
                  <div className="py-12 text-center">
                    <div className="relative inline-flex">
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                        <Wallet className="h-10 w-10 text-green-400 animate-pulse" />
                      </div>
                      <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Connecting to {wallets.find(w => w.id === selectedWallet)?.name}...
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Please confirm the connection in your wallet
                    </p>
                  </div>
                )}
              </>
            ) : (
              /* Connected State */
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Successfully Connected!</h3>
                  <p className="text-gray-400 text-sm">
                    Your wallet is now connected to ENERGY blockchain
                  </p>
                </div>

                {/* Wallet Info */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">Connected Wallet</span>
                    <span className="text-green-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">
                        {wallets.find(w => w.id === selectedWallet)?.icon}
                      </span>
                      <div>
                        <p className="text-white font-medium">
                          {wallets.find(w => w.id === selectedWallet)?.name}
                        </p>
                        <p className="text-gray-500 text-sm font-mono">
                          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyAddress}
                      className="p-2 text-gray-400 hover:text-green-400 transition-colors"
                    >
                      {copiedAddress ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Account Balance */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">ENERGY Balance</span>
                      <Zap className="h-4 w-4 text-yellow-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">12,450.00</p>
                    <p className="text-gray-500 text-sm">≈ $155,625</p>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Network</span>
                      <Globe className="h-4 w-4 text-blue-400" />
                    </div>
                    <p className="text-lg font-medium text-white">ENERGY Mainnet</p>
                    <p className="text-gray-500 text-sm">Chain ID: 2024</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button
                    onClick={handleDisconnect}
                    className="flex-1 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Power className="h-4 w-4" />
                    <span>Disconnect</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl font-medium transition-colors"
                  >
                    Done
                  </button>
                </div>

                {/* Transaction History Link */}
                <a
                  href="/dashboard"
                  className="flex items-center justify-center space-x-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <span>View transaction history</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default WalletConnect