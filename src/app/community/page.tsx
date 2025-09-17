'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Calendar,
  Twitter,
  Github,
  Linkedin,
  Mail,
  Globe,
  Video,
  Megaphone,
  Award,
  ExternalLink,
  Heart,
  Zap,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

export default function CommunityPage() {
  const { t } = useTranslation()

  const socialPlatforms = [
    {
      name: "Discord",
      description: "Join our developer community for real-time discussions",
      members: "12,500+",
      icon: MessageSquare,
      link: "https://discord.gg/energyblockchain",
      bgColor: "bg-indigo-500/20",
      textColor: "text-indigo-400"
    },
    {
      name: "Twitter",
      description: "Follow us for the latest updates and announcements",
      members: "45,000+",
      icon: Twitter,
      link: "https://twitter.com/energyblockchain",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400"
    },
    {
      name: "GitHub",
      description: "Contribute to our open-source projects and repositories",
      members: "8,200+",
      icon: Github,
      link: "https://github.com/energy-blockchain",
      bgColor: "bg-gray-500/20",
      textColor: "text-gray-400"
    },
    {
      name: "LinkedIn",
      description: "Connect with our professional network and team",
      members: "15,000+",
      icon: Linkedin,
      link: "https://linkedin.com/company/energy-blockchain",
      bgColor: "bg-blue-600/20",
      textColor: "text-blue-400"
    },
    {
      name: "Telegram",
      description: "Real-time updates and community discussions",
      members: "28,000+",
      icon: MessageSquare,
      link: "https://t.me/energyblockchain",
      bgColor: "bg-cyan-500/20",
      textColor: "text-cyan-400"
    },
    {
      name: "Reddit",
      description: "Join discussions about renewable energy and blockchain",
      members: "18,500+",
      icon: MessageSquare,
      link: "https://reddit.com/r/energyblockchain",
      bgColor: "bg-orange-500/20",
      textColor: "text-orange-400"
    }
  ]

  const upcomingEvents = [
    {
      title: "Energy DeFi Summit 2024",
      date: "November 15, 2024",
      type: "Conference",
      location: "San Francisco, CA",
      description: "Annual conference bringing together energy and DeFi leaders"
    },
    {
      title: "Developer Workshop: Smart Contracts",
      date: "October 28, 2024",
      type: "Workshop",
      location: "Virtual",
      description: "Learn to build energy trading smart contracts from our core team"
    },
    {
      title: "Community AMA with Founders",
      date: "October 20, 2024",
      type: "AMA",
      location: "Discord",
      description: "Monthly Ask Me Anything session with the founding team"
    },
    {
      title: "Hackathon: Build for Sustainability",
      date: "December 1-3, 2024",
      type: "Hackathon",
      location: "Global (Virtual)",
      description: "48-hour hackathon focused on sustainable energy solutions"
    }
  ]

  const communityPrograms = [
    {
      icon: Award,
      title: "Ambassador Program",
      description: "Represent Energy Blockchain in your local community and earn rewards",
      benefits: ["Exclusive access to events", "Monthly token rewards", "Direct team access"],
      status: "Applications Open"
    },
    {
      icon: Users,
      title: "Developer Grants",
      description: "Funding for innovative projects building on Energy Blockchain",
      benefits: ["Up to $50k funding", "Technical mentorship", "Marketing support"],
      status: "Q4 2024"
    },
    {
      icon: TrendingUp,
      title: "Bug Bounty Program",
      description: "Help secure our network and earn rewards for finding vulnerabilities",
      benefits: ["Up to $10k rewards", "Recognition on leaderboard", "Security researcher badge"],
      status: "Active"
    },
    {
      icon: Heart,
      title: "Sustainability Champions",
      description: "Lead initiatives to promote renewable energy adoption",
      benefits: ["Impact measurement tools", "Networking opportunities", "Sustainability certification"],
      status: "Coming Soon"
    }
  ]

  const communityStats = [
    { label: "Community Members", value: "125,000+", icon: Users },
    { label: "Countries Represented", value: "85+", icon: Globe },
    { label: "Monthly Events", value: "15+", icon: Calendar },
    { label: "Open Source Contributors", value: "450+", icon: Github }
  ]

  const newsletters = [
    {
      title: "Weekly Digest",
      description: "Weekly roundup of development updates, community highlights, and market insights",
      frequency: "Every Monday"
    },
    {
      title: "Developer Newsletter",
      description: "Technical updates, new API releases, and developer community spotlights",
      frequency: "Bi-weekly"
    },
    {
      title: "Sustainability Report",
      description: "Monthly impact reports and renewable energy adoption metrics",
      frequency: "Monthly"
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
              <Users className="h-16 w-16 text-green-400" />
              <div className="absolute inset-0 animate-pulse">
                <Users className="h-16 w-16 text-green-400/50" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Connect with developers, energy enthusiasts, and sustainability advocates from around the world.
            Together, we're building the future of renewable energy trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
              Join Discord
            </button>
            <button className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200">
              Follow on Twitter
            </button>
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
                >
                  <Icon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Social Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Connect With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPlatforms.map((platform, index) => {
              const Icon = platform.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-12 h-12 ${platform.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${platform.textColor}`} />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                      {platform.name}
                    </h3>
                    <span className="text-sm text-gray-400">{platform.members}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <span>Join Community</span>
                    <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Upcoming Events
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-green-400 font-medium px-2 py-1 bg-green-500/20 rounded">
                        {event.type}
                      </span>
                      <span className="text-sm text-gray-400">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{event.description}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-green-500 text-green-400 rounded-lg text-sm font-medium hover:bg-green-500/10 transition-all duration-200">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Community Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityPrograms.map((program, index) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{program.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          program.status === 'Active' || program.status === 'Applications Open'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {program.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{program.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Stay Updated
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {newsletters.map((newsletter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{newsletter.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{newsletter.description}</p>
                  <span className="text-green-400 text-xs font-medium">{newsletter.frequency}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest updates, technical insights, and community highlights delivered to your inbox.
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
              Ready to Get Involved?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're a developer, energy professional, or sustainability advocate,
              there's a place for you in the Energy Blockchain community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                Join Our Discord
              </button>
              <Link
                href="/developers"
                className="px-8 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
              >
                Start Building
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}