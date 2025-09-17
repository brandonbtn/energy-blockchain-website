'use client'

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

export const translations = {
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
      'hero.title': 'L\'avenir du commerce d\'énergie durable',
      'hero.subtitle': 'Token ENERGY - Alimenter l\'écosystème Soltolaria',
      'hero.description': 'Échangez, misez et gagnez avec la plateforme blockchain d\'énergie renouvelable la plus avancée au monde',
      'hero.launchApp': 'Lancer l\'application',
      'hero.learnMore': 'En savoir plus',
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
      'hero.subtitle': 'Token ENERGY - Impulsando el ecosistema Soltolaria',
    }
  },
  pt: {
    translation: {
      'nav.technology': 'Tecnologia',
      'nav.ecosystem': 'Ecossistema',
      'nav.roadmap': 'Roteiro',
      'nav.team': 'Equipe',
      'nav.documentation': 'Documentação',
      'nav.dashboard': 'Painel',
      'nav.signin': 'Entrar',
      'nav.getStarted': 'Começar',
      'hero.title': 'O futuro do comércio de energia sustentável',
      'hero.subtitle': 'Token ENERGY - Alimentando o ecossistema Soltolaria',
    }
  },
  de: {
    translation: {
      'nav.technology': 'Technologie',
      'nav.ecosystem': 'Ökosystem',
      'nav.roadmap': 'Roadmap',
      'nav.team': 'Team',
      'nav.documentation': 'Dokumentation',
      'nav.dashboard': 'Dashboard',
      'nav.signin': 'Anmelden',
      'nav.getStarted': 'Loslegen',
      'hero.title': 'Die Zukunft des nachhaltigen Energiehandels',
      'hero.subtitle': 'ENERGY Token - Antrieb des Soltolaria-Ökosystems',
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
      'hero.subtitle': 'ENERGY代币 - 为Soltolaria生态系统提供动力',
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
      'hero.subtitle': 'ENERGYトークン - Soltolariaエコシステムを支える',
    }
  },
  ko: {
    translation: {
      'nav.technology': '기술',
      'nav.ecosystem': '생태계',
      'nav.roadmap': '로드맵',
      'nav.team': '팀',
      'nav.documentation': '문서',
      'nav.dashboard': '대시보드',
      'nav.signin': '로그인',
      'nav.getStarted': '시작하기',
      'hero.title': '지속 가능한 에너지 거래의 미래',
      'hero.subtitle': 'ENERGY 토큰 - Soltolaria 생태계 구동',
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
      'hero.subtitle': 'رمز ENERGY - تشغيل نظام Soltolaria البيئي',
    }
  },
  hi: {
    translation: {
      'nav.technology': 'प्रौद्योगिकी',
      'nav.ecosystem': 'पारिस्थितिकी तंत्र',
      'nav.roadmap': 'रोडमैप',
      'nav.team': 'टीम',
      'nav.documentation': 'दस्तावेज़',
      'nav.dashboard': 'डैशबोर्ड',
      'nav.signin': 'साइन इन करें',
      'nav.getStarted': 'शुरू करें',
      'hero.title': 'टिकाऊ ऊर्जा व्यापार का भविष्य',
      'hero.subtitle': 'ENERGY टोकन - Soltolaria पारिस्थितिकी तंत्र को शक्ति प्रदान करना',
    }
  },
  ru: {
    translation: {
      'nav.technology': 'Технология',
      'nav.ecosystem': 'Экосистема',
      'nav.roadmap': 'Дорожная карта',
      'nav.team': 'Команда',
      'nav.documentation': 'Документация',
      'nav.dashboard': 'Панель управления',
      'nav.signin': 'Войти',
      'nav.getStarted': 'Начать',
      'hero.title': 'Будущее устойчивой торговли энергией',
      'hero.subtitle': 'Токен ENERGY - Питание экосистемы Soltolaria',
    }
  },
  fne: {
    translation: {
      'nav.technology': 'Technology',
      'nav.ecosystem': 'Ecosystem',
      'nav.roadmap': 'Journey Path',
      'nav.team': 'Our People',
      'nav.documentation': 'Teachings',
      'nav.dashboard': 'Dashboard',
      'nav.signin': 'Sign In',
      'nav.getStarted': 'Begin Journey',
      'hero.title': 'The Future of Mother Earth\'s Energy Trading',
      'hero.subtitle': 'ENERGY Token - Powering the Sacred Soltolaria Circle',
    }
  },
  cr: {
    translation: {
      'nav.technology': 'ᒪᐢᑭᐦᑖᐃᐧᐣ',
      'nav.ecosystem': 'ᐊᐢᑭᕀ',
      'nav.roadmap': 'ᒣᐢᑲᓇᐤ',
      'nav.team': 'ᐃᔨᓂᐊᐧᐠ',
      'nav.documentation': 'ᒪᓯᓇᐦᐃᑲᓇ',
      'nav.dashboard': 'ᓇᓇᑲᒋᐦᑖᐃᐧᐣ',
      'nav.signin': 'ᐱᐦᑐᑫ',
      'nav.getStarted': 'ᒫᒋᐦᑖ',
      'hero.title': 'ᑳ ᐅᒌ ᐊᑎᐢᑫᕀᐣ ᐊᐧᐢᑯᒡ',
      'hero.subtitle': 'ENERGY ᓯᐦᑐᐢᑲᐣ - Soltolaria ᐊᐢᑭᕀ',
    }
  },
  oj: {
    translation: {
      'nav.technology': 'ᑭᑭᓄᐦᐊᒪᑫᐃᐧᐣ',
      'nav.ecosystem': 'ᐊᑭ',
      'nav.roadmap': 'ᒥᑲᓇ',
      'nav.team': 'ᐊᓂᔑᓈᐯᐠ',
      'nav.documentation': 'ᒪᓯᓇᐦᐃᑲᐣ',
      'nav.dashboard': 'ᑲᓇᐗᐸᒋᑲᑌᐠ',
      'nav.signin': 'ᐱᐣᑎᑫ',
      'nav.getStarted': 'ᒪᒋᑖ',
      'hero.title': 'ᑲᐃᔑᐱᒪᑎᓯᒪᑲᐠ ᐊᓄᑭᐃᐧᐣ',
      'hero.subtitle': 'ENERGY ᔓᓂᔭ - Soltolaria ᐊᑭ',
    }
  }
}

// Initialize i18n only on client side
if (typeof window !== 'undefined') {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: translations,
      fallbackLng: 'en',
      debug: false,
      interpolation: {
        escapeValue: false
      },
      detection: {
        order: ['localStorage', 'cookie', 'navigator'],
        caches: ['localStorage', 'cookie']
      }
    })
}

export default i18n