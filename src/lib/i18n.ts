import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const SUPPORTED_LANGUAGES = {
  en: 'English',
  fr: 'Français',
  fne: 'First Nations English',
  cr: 'ᓀᐦᐃᔭᐍᐏᐣ (Cree)',
  oj: 'ᐊᓂᔑᓈᐯᒧᐎᓐ (Ojibwe)',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
  hi: 'हिन्दी',
  ru: 'Русский'
}

export const SYLLABIC_LANGUAGES = ['cr', 'oj']

export const LANGUAGE_FAMILIES = {
  indigenous: ['fne', 'cr', 'oj'],
  european: ['en', 'fr', 'es', 'pt', 'de'],
  asian: ['zh', 'ja', 'ko', 'hi'],
  middleEastern: ['ar'],
  slavic: ['ru']
}

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.technology': 'Technology',
      'nav.ecosystem': 'Ecosystem',
      'nav.roadmap': 'Roadmap',
      'nav.team': 'Team',
      'nav.documentation': 'Documentation',
      'nav.dashboard': 'Dashboard',
      'nav.signin': 'Sign In',
      'nav.getStarted': 'Get Started',
      
      // Homepage Hero
      'hero.title': 'The Future of Sustainable Energy Trading',
      'hero.subtitle': 'ENERGY Token - Powering the Soltolaria Ecosystem',
      'hero.description': 'Trade, stake, and earn with the world\'s most advanced renewable energy blockchain platform',
      'hero.launchApp': 'Launch App',
      'hero.learnMore': 'Learn More',
      
      // Features
      'features.title': 'Why Choose ENERGY Token?',
      'features.instant': 'Instant Transactions',
      'features.instantDesc': 'Lightning-fast trades on the Solana blockchain',
      'features.sustainable': 'Sustainable Future',
      'features.sustainableDesc': 'Supporting renewable energy projects worldwide',
      'features.rewards': 'Staking Rewards',
      'features.rewardsDesc': 'Earn up to 25% APY through our staking program',
      'features.secure': 'Bank-Grade Security',
      'features.secureDesc': 'Multi-signature wallets and advanced encryption',
      
      // Stats
      'stats.price': 'Token Price',
      'stats.marketCap': 'Market Cap',
      'stats.holders': 'Token Holders',
      'stats.totalStaked': 'Total Staked',
      
      // Footer
      'footer.quickLinks': 'Quick Links',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.cookies': 'Cookie Policy',
      'footer.followUs': 'Follow Us',
      'footer.newsletter': 'Newsletter',
      'footer.newsletterDesc': 'Get the latest updates on ENERGY token',
      'footer.subscribe': 'Subscribe',
      'footer.allRights': 'All rights reserved',
      
      // Login/Signup
      'auth.welcomeBack': 'Welcome Back',
      'auth.signInDesc': 'Sign in to access your ENERGY dashboard',
      'auth.email': 'Email Address',
      'auth.password': 'Password',
      'auth.rememberMe': 'Remember me',
      'auth.forgotPassword': 'Forgot password?',
      'auth.signIn': 'Sign In',
      'auth.noAccount': "Don't have an account?",
      'auth.signUp': 'Sign up',
      'auth.createAccount': 'Create Your Account',
      'auth.joinDesc': 'Join thousands of traders on ENERGY platform',
      
      // Dashboard
      'dashboard.portfolio': 'Portfolio',
      'dashboard.trading': 'Trading',
      'dashboard.analytics': 'Analytics',
      'dashboard.staking': 'Staking',
      'dashboard.settings': 'Settings',
      'dashboard.totalBalance': 'Total Balance',
      'dashboard.availableBalance': 'Available Balance',
      'dashboard.stakedAmount': 'Staked Amount',
      'dashboard.rewards': 'Rewards',
      
      // Admin
      'admin.dashboard': 'Admin Dashboard',
      'admin.users': 'Users',
      'admin.content': 'Content',
      'admin.security': 'Security',
      'admin.system': 'System',
      'admin.restrictedAccess': 'Restricted Access',
      'admin.adminOnly': 'This area is for authorized administrators only'
    }
  },
  fr: {
    translation: {
      // Navigation
      'nav.technology': 'Technologie',
      'nav.ecosystem': 'Écosystème',
      'nav.roadmap': 'Feuille de route',
      'nav.team': 'Équipe',
      'nav.documentation': 'Documentation',
      'nav.dashboard': 'Tableau de bord',
      'nav.signin': 'Se connecter',
      'nav.getStarted': 'Commencer',
      
      // Homepage Hero
      'hero.title': "L'avenir du commerce d'énergie durable",
      'hero.subtitle': "Token ENERGY - Alimenter l'écosystème Soltolaria",
      'hero.description': "Échangez, misez et gagnez avec la plateforme blockchain d'énergie renouvelable la plus avancée au monde",
      'hero.launchApp': "Lancer l'application",
      'hero.learnMore': 'En savoir plus',
      
      // Features
      'features.title': 'Pourquoi choisir le Token ENERGY?',
      'features.instant': 'Transactions instantanées',
      'features.instantDesc': 'Échanges ultra-rapides sur la blockchain Solana',
      'features.sustainable': 'Avenir durable',
      'features.sustainableDesc': "Soutenir les projets d'énergie renouvelable dans le monde",
      'features.rewards': 'Récompenses de staking',
      'features.rewardsDesc': "Gagnez jusqu'à 25% APY grâce à notre programme de staking",
      'features.secure': 'Sécurité bancaire',
      'features.secureDesc': 'Portefeuilles multi-signatures et cryptage avancé',
      
      // Stats
      'stats.price': 'Prix du Token',
      'stats.marketCap': 'Capitalisation',
      'stats.holders': 'Détenteurs',
      'stats.totalStaked': 'Total Misé',
      
      // Footer
      'footer.quickLinks': 'Liens rapides',
      'footer.legal': 'Légal',
      'footer.privacy': 'Politique de confidentialité',
      'footer.terms': "Conditions d'utilisation",
      'footer.cookies': 'Politique de cookies',
      'footer.followUs': 'Suivez-nous',
      'footer.newsletter': 'Infolettre',
      'footer.newsletterDesc': 'Recevez les dernières nouvelles du token ENERGY',
      'footer.subscribe': "S'abonner",
      'footer.allRights': 'Tous droits réservés'
    }
  },
  es: {
    translation: {
      'nav.technology': 'Tecnología',
      'nav.ecosystem': 'Ecosistema',
      'nav.roadmap': 'Hoja de ruta',
      'nav.team': 'Equipo',
      'nav.documentation': 'Documentación',
      'nav.dashboard': 'Panel',
      'nav.signin': 'Iniciar sesión',
      'nav.getStarted': 'Empezar',
      'hero.title': 'El futuro del comercio de energía sostenible',
      'hero.subtitle': 'Token ENERGY - Impulsando el ecosistema Soltolaria'
    }
  },
  zh: {
    translation: {
      'nav.technology': '技术',
      'nav.ecosystem': '生态系统',
      'nav.roadmap': '路线图',
      'nav.team': '团队',
      'nav.documentation': '文档',
      'nav.dashboard': '仪表板',
      'nav.signin': '登录',
      'nav.getStarted': '开始',
      'hero.title': '可持续能源交易的未来',
      'hero.subtitle': 'ENERGY代币 - 为Soltolaria生态系统提供动力'
    }
  },
  ja: {
    translation: {
      'nav.technology': 'テクノロジー',
      'nav.ecosystem': 'エコシステム',
      'nav.roadmap': 'ロードマップ',
      'nav.team': 'チーム',
      'nav.documentation': 'ドキュメント',
      'nav.dashboard': 'ダッシュボード',
      'nav.signin': 'サインイン',
      'nav.getStarted': '始める',
      'hero.title': '持続可能なエネルギー取引の未来',
      'hero.subtitle': 'ENERGYトークン - Soltolariaエコシステムを支える'
    }
  },
  ar: {
    translation: {
      'nav.technology': 'التكنولوجيا',
      'nav.ecosystem': 'النظام البيئي',
      'nav.roadmap': 'خريطة الطريق',
      'nav.team': 'الفريق',
      'nav.documentation': 'الوثائق',
      'nav.dashboard': 'لوحة القيادة',
      'nav.signin': 'تسجيل الدخول',
      'nav.getStarted': 'ابدأ',
      'hero.title': 'مستقبل تداول الطاقة المستدامة',
      'hero.subtitle': 'رمز ENERGY - تشغيل نظام Soltolaria البيئي'
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie']
    }
  })

// Language change handler
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.documentElement.dir = ['ar'].includes(lng) ? 'rtl' : 'ltr'
  
  // Store language preference
  localStorage.setItem('preferredLanguage', lng)
  
  // Load special fonts for syllabic languages
  if (SYLLABIC_LANGUAGES.includes(lng)) {
    loadSyllabicFonts()
  }
})

function loadSyllabicFonts() {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Canadian+Aboriginal&display=swap'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}

export default i18n