'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import '@/lib/i18n-client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TokenUtilities from '@/components/TokenUtilities'
import TokenBenefits from '@/components/TokenBenefits'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const { t, ready } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
            {mounted && ready ? t('common.back') : 'Back to Home'}
          </Link>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 pb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Token <span className="text-gradient">{mounted && ready ? t('pages.features') : 'Features'}</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {mounted && ready ? t('features.title') : 'Discover how ENERGY powers the Soltolaria ecosystem with exclusive utilities and benefits'}
          </p>
        </motion.div>

        {/* Token Utilities */}
        <TokenUtilities />

        {/* Token Benefits */}
        <TokenBenefits />
      </main>

      <Footer />
    </div>
  )
}