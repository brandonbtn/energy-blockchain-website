'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Import all components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroEnhanced from '@/components/HeroEnhanced'
import LiveStats from '@/components/LiveStats'
import Features from '@/components/Features'
import Metrics from '@/components/Metrics'
import Ecosystem from '@/components/Ecosystem'
import Technology from '@/components/Technology'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Partners from '@/components/Partners'
import Newsletter from '@/components/Newsletter'
import EnergyTrading from '@/components/EnergyTrading'
import CarbonMarketplace from '@/components/CarbonMarketplace'
import SecurityFeatures from '@/components/SecurityFeatures'
import CompetitiveAdvantage from '@/components/CompetitiveAdvantage'
import BlogSection from '@/components/BlogSection'

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
        {/* Enhanced Hero Section with Web3 Features */}
        <HeroEnhanced />

        {/* Live Blockchain Statistics */}
        <LiveStats />

        {/* Live Network Metrics Dashboard */}
        <Metrics />

        {/* Energy Trading Platform Section */}
        <EnergyTrading />

        {/* Carbon Credits Marketplace */}
        <CarbonMarketplace />

        {/* Core Features Grid */}
        <Features />

        {/* Technology Deep Dive */}
        <Technology />

        {/* Competitive Advantages */}
        <CompetitiveAdvantage />

        {/* Security & Compliance */}
        <SecurityFeatures />

        {/* Ecosystem Overview */}
        <Ecosystem />

        {/* Development Roadmap */}
        <Roadmap />

        {/* Team Section */}
        <Team />

        {/* Strategic Partners */}
        <Partners />

        {/* Blog & News Section */}
        <BlogSection />

        {/* Newsletter & Community */}
        <Newsletter />
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