'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Energy DEX', href: '/dex' },
      { name: 'Carbon Marketplace', href: '/carbon' },
      { name: 'Validator Network', href: '/validators' },
      { name: 'API Documentation', href: '/docs' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
    ],
    resources: [
      { name: 'Whitepaper', href: '/whitepaper' },
      { name: 'Technical Docs', href: '/docs' },
      { name: 'Developer Guide', href: '/developers' },
      { name: 'Community', href: '/community' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' },
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/energyblockchain', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/energy-blockchain', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/energy-blockchain', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@energyblockchain.org', label: 'Email' },
  ]

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
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

            <p className="text-gray-400 mb-6 leading-relaxed">
              The world's first renewable energy blockchain with 65,000+ TPS,
              carbon credits, and sustainable DeFi protocols. Building the future
              of clean energy trading.
            </p>

            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Global Network • Decentralized</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay Updated with ENERGY Blockchain
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on our mainnet launch, new features, and ecosystem developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} ENERGY Blockchain. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with sustainable technology</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Network Status: Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer