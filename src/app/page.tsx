'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Import minimal components for clean homepage
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroEnhanced from '@/components/HeroEnhanced'
import QuickNavigation from '@/components/QuickNavigation'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(34, 197, 94, 0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }} />

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Enhanced Hero Section */}
        <HeroEnhanced />

        {/* Quick Navigation to All Pages */}
        <QuickNavigation />
      </main>

      {/* Footer with Links */}
      <Footer />

      {/* Live Energy Flow Animation Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="energy-flow-animation" />
      </div>
    </div>
  )
}