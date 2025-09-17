'use client'

import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n-client'
import { useEffect, useState } from 'react'

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize i18n on client side
    const savedLanguage = localStorage.getItem('preferredLanguage')
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage)
    }
    setIsInitialized(true)
  }, [])

  // Don't render until i18n is initialized to prevent hydration issues
  if (!isInitialized) {
    return <>{children}</>
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}