'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, ChevronDown, Wallet } from 'lucide-react'
import Link from 'next/link'
import WalletConnect from './WalletConnect'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, ready } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated')
    setIsAuthenticated(auth === 'true')
    setMounted(true)
  }, [])

  const navigationItems = [
    { name: mounted && ready ? t('nav.technology') : 'Technology', href: '/technology' },
    { name: mounted && ready ? t('nav.ecosystem') : 'Ecosystem', href: '/ecosystem' },
    { name: mounted && ready ? t('nav.roadmap') : 'Roadmap', href: '/roadmap' },
    { name: mounted && ready ? t('nav.team') : 'Team', href: '/team' },
    { name: mounted && ready ? t('nav.documentation') : 'Documentation', href: '/docs' },
    { name: mounted && ready ? t('nav.dashboard') : 'Dashboard', href: '/dashboard' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-green-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="h-8 w-8 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <Zap className="h-8 w-8 text-green-400/50" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">
              ENERGY
              <span className="text-green-400 ml-1">Blockchain</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
              >
                {mounted && ready ? t('nav.dashboard') : 'Dashboard'}
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-6 py-2 text-white hover:text-green-400 transition-colors font-semibold"
                >
                  {mounted && ready ? t('nav.signin') : 'Sign In'}
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
                >
                  {mounted && ready ? t('nav.getStarted') : 'Get Started'}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-700"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <LanguageSelector />
                  <Link
                    href="/dashboard"
                    className="px-6 py-2 text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {mounted && ready ? t('nav.dashboard') : 'Dashboard'}
                  </Link>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsWalletModalOpen(true)
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-400 hover:to-emerald-500 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Wallet className="h-4 w-4" />
                    <span>{connectedWallet ? 'Connected' : 'Connect Wallet'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Wallet Connect Modal */}
      <WalletConnect
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onConnect={(wallet) => {
          setConnectedWallet(wallet)
          console.log('Connected to wallet:', wallet)
        }}
      />
    </motion.header>
  )
}

export default Header