export const i18nConfig = {
  locales: ['en', 'fr', 'es', 'pt', 'de', 'zh', 'ja', 'ko', 'ar', 'hi', 'ru', 'fne', 'cr', 'oj'],
  defaultLocale: 'en',
  localeDetection: false,
} as const

export type Locale = (typeof i18nConfig)['locales'][number]