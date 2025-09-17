'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from '@/lib/i18n-client'

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    setMounted(true)
    setCurrentLang(i18n.language || 'en')
  }, [i18n.language])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('preferredLanguage', lng)
    setCurrentLang(lng)
    setIsOpen(false)

    // Update HTML lang attribute
    document.documentElement.lang = lng
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
  }

  // Group languages by family
  const LANGUAGE_FAMILIES = {
    indigenous: ['fne', 'cr', 'oj'],
    european: ['en', 'fr', 'es', 'pt', 'de'],
    asian: ['zh', 'ja', 'ko', 'hi'],
    middleEastern: ['ar'],
    slavic: ['ru']
  }

  const groupedLanguages = Object.entries(SUPPORTED_LANGUAGES).reduce((acc, [code, name]) => {
    let family = 'other'
    for (const [familyName, codes] of Object.entries(LANGUAGE_FAMILIES)) {
      if (codes.includes(code)) {
        family = familyName
        break
      }
    }
    if (!acc[family]) acc[family] = []
    acc[family].push({ code, name: name as string })
    return acc
  }, {} as Record<string, Array<{ code: string; name: string }>>)

  const getFlagEmoji = (langCode: string) => {
    const flags: Record<string, string> = {
      en: '🇬🇧',
      fr: '🇫🇷',
      es: '🇪🇸',
      pt: '🇵🇹',
      de: '🇩🇪',
      zh: '🇨🇳',
      ja: '🇯🇵',
      ko: '🇰🇷',
      ar: '🇸🇦',
      hi: '🇮🇳',
      ru: '🇷🇺',
      fne: '🌲', // Tree for First Nations
      cr: '🦅', // Eagle for Cree
      oj: '🐻' // Bear for Ojibwe
    }
    return flags[langCode] || '🌍'
  }

  const getFamilyLabel = (family: string) => {
    const labels: Record<string, string> = {
      indigenous: 'Indigenous Languages',
      european: 'European Languages',
      asian: 'Asian Languages',
      middleEastern: 'Middle Eastern',
      slavic: 'Slavic Languages',
      other: 'Other Languages'
    }
    return labels[family] || family
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="relative">
        <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white">
          <Globe className="h-4 w-4 text-green-400" />
          <span className="hidden sm:block text-sm font-medium">English</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-white transition-all duration-200 group"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 text-green-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:block text-sm font-medium">
          {getFlagEmoji(currentLang)} {SUPPORTED_LANGUAGES[currentLang as keyof typeof SUPPORTED_LANGUAGES] || 'English'}
        </span>
        <span className="sm:hidden text-sm font-medium">
          {getFlagEmoji(currentLang)}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl z-50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900"
          >
            <div className="p-2">
              {/* Quick access to popular languages */}
              <div className="mb-2 p-2 border-b border-slate-800">
                <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wider">Popular</p>
                <div className="grid grid-cols-2 gap-2">
                  {['en', 'fr', 'es', 'zh'].map(code => (
                    <button
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors ${
                        currentLang === code ? 'bg-green-500/20 text-green-400' : 'text-gray-300'
                      }`}
                    >
                      <span className="text-lg">{getFlagEmoji(code)}</span>
                      <span className="text-sm">{SUPPORTED_LANGUAGES[code as keyof typeof SUPPORTED_LANGUAGES]}</span>
                      {currentLang === code && <Check className="h-3 w-3 ml-auto" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* All languages grouped by family */}
              {Object.entries(groupedLanguages).map(([family, languages]) => (
                <div key={family} className="mb-3">
                  <p className="text-xs text-gray-400 mb-2 px-2 font-semibold uppercase tracking-wider">
                    {getFamilyLabel(family)}
                  </p>
                  <div className="space-y-1">
                    {languages.map(({ code, name }) => (
                      <button
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition-all duration-200 group ${
                          currentLang === code ? 'bg-green-500/20 text-green-400' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform">
                          {getFlagEmoji(code)}
                        </span>
                        <span className="flex-1 text-left text-sm font-medium">{name}</span>
                        {currentLang === code && (
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Language info */}
              <div className="mt-3 p-3 bg-slate-800/50 rounded-lg">
                <p className="text-xs text-gray-400">
                  <span className="text-green-400">✨</span> AI-powered translations available for all languages
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}