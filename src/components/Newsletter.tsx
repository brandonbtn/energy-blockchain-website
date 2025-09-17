'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, CheckCircle } from 'lucide-react'

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
            <Mail className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Stay Connected</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join the Energy <span className="text-gradient">Revolution</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Be the first to know about mainnet launch, ecosystem updates,
            and exclusive opportunities in the renewable energy blockchain space.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200 transform hover:scale-105 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center space-x-3 text-green-400"
            >
              <CheckCircle className="h-8 w-8" />
              <span className="text-xl font-semibold">Thank you for subscribing!</span>
            </motion.div>
          )}

          <p className="text-gray-400 text-sm mt-6">
            Join 50,000+ energy pioneers already part of our community.
            Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter