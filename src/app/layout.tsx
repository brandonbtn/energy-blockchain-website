import type { Metadata } from 'next'
import './globals.css'
import I18nProvider from '@/components/I18nProvider'

export const metadata: Metadata = {
  title: 'ENERGY Token - Powering Soltolaria\'s Decentralized Energy Marketplace',
  description: 'ENERGY is the native utility token of Soltolaria. Trade renewable energy, earn rewards, and participate in the future of sustainable power distribution on blockchain.',
  keywords: [
    'ENERGY token',
    'Soltolaria',
    'renewable energy token',
    'energy trading cryptocurrency',
    'Solana token',
    'DeFi energy',
    'utility token',
    'decentralized energy',
    'green cryptocurrency',
    'sustainable blockchain'
  ],
  authors: [{ name: 'ENERGY Blockchain Team' }],
  creator: 'ENERGY Blockchain',
  publisher: 'ENERGY Blockchain',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://energyblockchain.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ENERGY Token - Soltolaria\'s Native Currency',
    description: 'The utility token powering Soltolaria\'s decentralized energy marketplace. Trade, stake, and govern the future of renewable energy.',
    url: 'https://energytoken.io',
    siteName: 'ENERGY Token',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ENERGY Blockchain Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENERGY Blockchain - Renewable Energy Trading Platform',
    description: 'The world\'s first renewable energy blockchain with 65,000+ TPS, carbon credits, and sustainable DeFi protocols.',
    images: ['/twitter-image.png'],
    creator: '@energyblockchain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#22c55e" />
        <meta name="msapplication-TileColor" content="#22c55e" />
        <meta name="theme-color" content="#22c55e" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <I18nProvider>
          <div id="root">
            {children}
          </div>
        </I18nProvider>

        {/* Energy particles background effect */}
        <div className="energy-particles">
          {/* Particles will be generated via JavaScript */}
        </div>

        {/* Analytics and tracking scripts would go here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Create floating energy particles
              function createEnergyParticles() {
                const container = document.querySelector('.energy-particles');
                if (!container) return;

                const particleCount = 50;

                for (let i = 0; i < particleCount; i++) {
                  const particle = document.createElement('div');
                  particle.className = 'energy-particle';
                  particle.style.left = Math.random() * 100 + '%';
                  particle.style.animationDelay = Math.random() * 8 + 's';
                  particle.style.animationDuration = (8 + Math.random() * 4) + 's';
                  container.appendChild(particle);
                }
              }

              // Initialize particles when page loads
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', createEnergyParticles);
              } else {
                createEnergyParticles();
              }
            `,
          }}
        />
      </body>
    </html>
  )
}