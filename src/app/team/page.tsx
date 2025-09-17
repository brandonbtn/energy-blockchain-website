'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Team from '@/components/Team'
import { ArrowLeft, Linkedin, Twitter, Github, Globe } from 'lucide-react'
import Link from 'next/link'

export default function TeamPage() {
  const additionalTeam = [
    {
      category: 'Advisory Board',
      members: [
        {
          name: 'Prof. Robert Chen',
          role: 'Energy Economics Advisor',
          bio: 'Former World Bank energy consultant with 25 years in renewable energy policy',
          image: '/team/advisor1.jpg',
          social: {
            linkedin: '#',
            twitter: '#'
          }
        },
        {
          name: 'Maria Rodriguez',
          role: 'Regulatory Compliance Advisor',
          bio: 'International energy law expert, previously at UN Climate Change secretariat',
          image: '/team/advisor2.jpg',
          social: {
            linkedin: '#',
            twitter: '#'
          }
        },
        {
          name: 'Dr. James Wu',
          role: 'Technical Advisor',
          bio: 'MIT professor specializing in distributed systems and cryptography',
          image: '/team/advisor3.jpg',
          social: {
            linkedin: '#',
            twitter: '#'
          }
        }
      ]
    },
    {
      category: 'Development Team',
      members: [
        {
          name: 'Alex Kumar',
          role: 'Lead Backend Engineer',
          bio: 'Substrate core contributor, 8+ years in blockchain development',
          image: '/team/dev1.jpg',
          social: {
            github: '#',
            linkedin: '#'
          }
        },
        {
          name: 'Sophie Chen',
          role: 'Smart Contract Developer',
          bio: 'Solidity expert, audited 50+ DeFi protocols',
          image: '/team/dev2.jpg',
          social: {
            github: '#',
            twitter: '#'
          }
        },
        {
          name: 'Marcus Johnson',
          role: 'Frontend Lead',
          bio: 'Web3 UI/UX specialist, created interfaces for major DeFi platforms',
          image: '/team/dev3.jpg',
          social: {
            github: '#',
            linkedin: '#'
          }
        }
      ]
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

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 pb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visionary leaders and experts driving the renewable energy blockchain revolution
          </p>
        </motion.div>

        {/* Core Team Component */}
        <Team />

        {/* Additional Team Members */}
        <section className="container mx-auto px-6 py-20">
          {additionalTeam.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white text-center mb-12"
              >
                {category.category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                        <p className="text-green-400 text-sm">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                    <div className="flex items-center space-x-3">
                      {'linkedin' in member.social && member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {'twitter' in member.social && member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {'github' in member.social && member.social.github && (
                        <a
                          href={member.social.github}
                          className="text-gray-500 hover:text-gray-300 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Join the Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Join Our Team</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals passionate about renewable energy and blockchain technology
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="#"
                  className="px-8 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700"
                >
                  Submit Resume
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}