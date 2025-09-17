'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Shield,
  FileCheck,
  Globe,
  Building,
  AlertCircle,
  CheckCircle,
  Scale,
  UserCheck,
  Zap,
  Lock,
  Award,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

export default function CompliancePage() {
  const { t } = useTranslation()

  const complianceAreas = [
    {
      title: "Anti-Money Laundering (AML)",
      icon: Shield,
      status: "Compliant",
      description: "Comprehensive AML policies and procedures to prevent money laundering and terrorist financing",
      details: [
        "Customer Due Diligence (CDD) procedures",
        "Enhanced Due Diligence (EDD) for high-risk customers",
        "Ongoing monitoring of customer transactions",
        "Suspicious Activity Report (SAR) filing procedures",
        "Regular AML training for all staff members"
      ]
    },
    {
      title: "Know Your Customer (KYC)",
      icon: UserCheck,
      status: "Compliant",
      description: "Robust identity verification and customer onboarding processes",
      details: [
        "Identity verification through government-issued documents",
        "Address verification and proof of residence",
        "Beneficial ownership identification for corporate entities",
        "Ongoing customer information updates",
        "Risk-based customer categorization"
      ]
    },
    {
      title: "Securities Regulations",
      icon: Scale,
      status: "Monitoring",
      description: "Compliance with applicable securities laws and regulations",
      details: [
        "Token classification analysis and legal opinions",
        "Registration exemptions where applicable",
        "Disclosure requirements for token offerings",
        "Market manipulation prevention measures",
        "Regular consultation with securities law experts"
      ]
    },
    {
      title: "Energy Market Regulations",
      icon: Zap,
      status: "Compliant",
      description: "Adherence to energy market regulations and trading requirements",
      details: [
        "Energy market participant registration",
        "Renewable energy certificate compliance",
        "Grid interconnection standards",
        "Energy trading license requirements",
        "Environmental impact assessments"
      ]
    },
    {
      title: "Data Protection",
      icon: Lock,
      status: "Compliant",
      description: "Comprehensive data protection and privacy compliance framework",
      details: [
        "GDPR compliance for European users",
        "CCPA compliance for California residents",
        "Data minimization and purpose limitation",
        "Right to be forgotten implementation",
        "Regular data protection impact assessments"
      ]
    },
    {
      title: "Financial Licensing",
      icon: Building,
      status: "In Progress",
      description: "Obtaining necessary financial services licenses and registrations",
      details: [
        "Money transmission license applications",
        "Virtual asset service provider registrations",
        "Financial conduct authority approvals",
        "Cross-border payment service licenses",
        "Regulatory sandbox participation"
      ]
    }
  ]

  const jurisdictions = [
    {
      country: "United States",
      status: "Registered",
      licenses: ["FinCEN MSB", "State Money Transmitter Licenses"],
      regulators: ["FinCEN", "SEC", "CFTC", "State Regulators"]
    },
    {
      country: "European Union",
      status: "Compliant",
      licenses: ["GDPR Compliance", "MiCA Preparation"],
      regulators: ["National Competent Authorities", "ECB", "ESMA"]
    },
    {
      country: "United Kingdom",
      status: "Registered",
      licenses: ["FCA Registration"],
      regulators: ["FCA", "HMRC"]
    },
    {
      country: "Canada",
      status: "Compliant",
      licenses: ["MSB Registration"],
      regulators: ["FINTRAC", "Provincial Regulators"]
    },
    {
      country: "Singapore",
      status: "In Progress",
      licenses: ["DPT License Application"],
      regulators: ["MAS"]
    },
    {
      country: "Australia",
      status: "Registered",
      licenses: ["AUSTRAC Registration"],
      regulators: ["AUSTRAC", "ASIC"]
    }
  ]

  const certifications = [
    {
      name: "SOC 2 Type II",
      issuer: "Independent Auditor",
      status: "Certified",
      expires: "December 2024",
      scope: "Security, availability, and confidentiality controls"
    },
    {
      name: "ISO 27001",
      issuer: "International Organization for Standardization",
      status: "In Progress",
      expires: "Target: Q2 2025",
      scope: "Information security management systems"
    },
    {
      name: "PCI DSS Level 1",
      issuer: "PCI Security Standards Council",
      status: "Compliant",
      expires: "March 2025",
      scope: "Payment card industry data security standards"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
      case 'Registered':
      case 'Certified':
        return 'text-green-400 bg-green-500/20'
      case 'In Progress':
        return 'text-yellow-400 bg-yellow-500/20'
      case 'Monitoring':
        return 'text-blue-400 bg-blue-500/20'
      default:
        return 'text-gray-400 bg-gray-500/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Compliant':
      case 'Registered':
      case 'Certified':
        return CheckCircle
      case 'In Progress':
      case 'Monitoring':
        return AlertCircle
      default:
        return AlertCircle
    }
  }

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
          className="container mx-auto px-6 pb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <FileCheck className="h-16 w-16 text-green-400" />
                <div className="absolute inset-0 animate-pulse">
                  <FileCheck className="h-16 w-16 text-green-400/50" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              Compliance & <span className="text-gradient">Regulatory</span>
            </h1>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
              <p className="text-gray-400 text-center mb-4">
                Energy Blockchain is committed to maintaining the highest standards of regulatory compliance
                and legal adherence across all jurisdictions where we operate.
              </p>
              <p className="text-gray-400 text-center">
                Our comprehensive compliance program ensures we meet all applicable laws, regulations,
                and industry standards while fostering innovation in the renewable energy sector.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Compliance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Compliance Framework
          </h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {complianceAreas.map((area, index) => {
              const Icon = area.icon
              const StatusIcon = getStatusIcon(area.status)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                        <p className="text-gray-400">{area.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusIcon className="h-5 w-5" />
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${getStatusColor(area.status)}`}>
                        {area.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {area.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Jurisdictional Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Global Compliance Status
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-slate-700 text-gray-400 font-semibold">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Jurisdiction
                </div>
                <div>Status</div>
                <div>Licenses</div>
                <div>Regulators</div>
              </div>
              {jurisdictions.map((jurisdiction, index) => {
                const StatusIcon = getStatusIcon(jurisdiction.status)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="grid grid-cols-4 gap-4 p-6 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="text-white font-semibold">{jurisdiction.country}</div>
                    <div className="flex items-center gap-2">
                      <StatusIcon className="h-4 w-4" />
                      <span className={`text-sm font-medium px-2 py-1 rounded ${getStatusColor(jurisdiction.status)}`}>
                        {jurisdiction.status}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {jurisdiction.licenses.map((license, licenseIndex) => (
                        <div key={licenseIndex} className="text-gray-400 text-sm">
                          {license}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {jurisdiction.regulators.map((regulator, regulatorIndex) => (
                        <div key={regulatorIndex} className="text-gray-400 text-sm">
                          {regulator}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Security Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-6 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Security Certifications
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {certifications.map((cert, index) => {
              const StatusIcon = getStatusIcon(cert.status)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Award className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                          <div className="flex items-center gap-2">
                            <StatusIcon className="h-4 w-4" />
                            <span className={`text-sm font-medium px-2 py-1 rounded ${getStatusColor(cert.status)}`}>
                              {cert.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                        <p className="text-gray-500 text-sm mb-2">{cert.scope}</p>
                        <p className="text-green-400 text-sm font-medium">Expires: {cert.expires}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Regulatory Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-8 w-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Regulatory Monitoring</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  We continuously monitor regulatory developments across all jurisdictions where we operate.
                  Our legal and compliance teams work closely with regulators and industry bodies to ensure
                  ongoing compliance and to shape the regulatory landscape for blockchain-based energy trading.
                </p>
                <p>
                  Key regulatory developments we're tracking include:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>EU Markets in Crypto-Assets (MiCA) regulation implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>US digital asset regulatory framework development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Energy market deregulation and renewable certificate standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Global carbon credit verification and trading regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="container mx-auto px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <Scale className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Compliance Inquiries</h2>
              <p className="text-gray-400 mb-6">
                For regulatory inquiries, compliance questions, or to report concerns,
                please contact our compliance team or regulatory affairs department.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Compliance Team</h3>
                  <p className="text-gray-400">Email: compliance@energyblockchain.org</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Regulatory Affairs</h3>
                  <p className="text-gray-400">Email: regulatory@energyblockchain.org</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-200">
                  Contact Compliance Team
                </button>
                <button className="px-6 py-3 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200 flex items-center gap-2">
                  Download Compliance Report
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}