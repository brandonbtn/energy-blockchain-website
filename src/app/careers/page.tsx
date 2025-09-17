'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Globe,
  TrendingUp,
  Coffee,
  Laptop,
  Shield,
  GraduationCap,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function CareersPage() {
  const { t } = useTranslation()

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support"
    },
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere in the world with flexible hours and async communication"
    },
    {
      icon: TrendingUp,
      title: "Equity & Growth",
      description: "Competitive equity packages and clear career advancement paths"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, sabbaticals, and respect for personal time boundaries"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs"
    },
    {
      icon: Laptop,
      title: "Top-Tier Equipment",
      description: "Latest MacBooks, monitors, and home office setup allowance"
    }
  ]

  const openPositions = [
    {
      title: "Senior Blockchain Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of our core blockchain infrastructure and consensus mechanisms."
    },
    {
      title: "Frontend Developer (React/Next.js)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful and intuitive user interfaces for our energy trading platform."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Scale our infrastructure to handle millions of energy transactions securely."
    },
    {
      title: "Product Manager - Energy Markets",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Drive product strategy for our renewable energy marketplace and trading features."
    },
    {
      title: "Business Development Manager",
      department: "Business",
      location: "Hybrid",
      type: "Full-time",
      description: "Build partnerships with energy providers and expand our global marketplace."
    },
    {
      title: "Content Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling content about blockchain, renewable energy, and sustainability."
    },
    {
      title: "Smart Contract Security Auditor",
      department: "Security",
      location: "Remote",
      type: "Contract",
      description: "Audit and secure our smart contracts handling millions in energy transactions."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive experiences for energy traders and blockchain newcomers alike."
    }
  ]

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We encourage experimentation and embrace new ideas that push boundaries."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe the best solutions come from diverse teams working together."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Open communication, honest feedback, and transparent decision-making."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Everything we do is aimed at creating positive change for our planet."
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
              <Briefcase className="h-16 w-16 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <Briefcase className="h-16 w-16 text-green-400/50" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-gradient">Mission</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Help us build the future of renewable energy trading. Join a team of passionate innovators
            working to create sustainable solutions that will impact the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
              View Open Positions
            </button>
            <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
              Learn About Our Culture
            </button>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why You'll Love Working Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                        {position.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-400">{position.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              Don't see a role that fits? We're always looking for exceptional talent.
            </p>
            <button className="px-6 py-2 border border-green-500 text-green-400 rounded-lg font-medium hover:bg-green-500/10 transition-all duration-200">
              Send Us Your Resume
            </button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing how the world trades renewable energy. Together, we can build
              a more sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                Apply Now
              </button>
              <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
                Learn More About Us
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}