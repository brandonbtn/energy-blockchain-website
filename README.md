# ENERGY Blockchain Website

Official website for ENERGY Blockchain - The world's first renewable energy blockchain platform with 65,000+ TPS, carbon credits, and sustainable DeFi protocols.

## 🌟 Features

- **Modern Design**: Sleek, responsive design with smooth animations
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **Interactive Elements**: Framer Motion animations and scroll-triggered effects
- **Accessibility**: WCAG compliant and screen reader friendly
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Fonts**: Inter and JetBrains Mono

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/energy-blockchain/website.git
   cd energy-blockchain-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features showcase
│   ├── Technology.tsx     # Technology overview
│   ├── Ecosystem.tsx      # Ecosystem section
│   ├── Metrics.tsx        # Key metrics
│   ├── Roadmap.tsx        # Development roadmap
│   ├── Team.tsx           # Team members
│   ├── Partners.tsx       # Partner organizations
│   ├── Newsletter.tsx     # Newsletter signup
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
├── utils/                 # Helper utilities
├── hooks/                 # Custom React hooks
└── data/                  # Static data
```

## 🎨 Design System

### Colors
- **Energy Green**: `#22c55e` - Primary brand color
- **Carbon Gray**: `#64748b` - Secondary neutral
- **Solar Yellow**: `#fbbf24` - Accent color
- **Gradients**: Custom energy-themed gradients

### Typography
- **Headings**: Inter (700-900 weight)
- **Body**: Inter (400-600 weight)
- **Code**: JetBrains Mono

### Components
- Consistent spacing scale (4px base)
- Rounded corners (8px, 16px, 24px)
- Glass morphism effects
- Hover animations and transitions

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Large tap targets and intuitive interactions

## ⚡ Performance

- **Next.js Optimization**: Automatic code splitting and optimization
- **Image Optimization**: Next.js Image component with WebP support
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size
- **Lighthouse Score**: 95+ performance score target

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag setup
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: Auto-generated XML sitemap

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `out`
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run export
```

The static files will be generated in the `out/` directory.

## 📊 Analytics

- Google Analytics integration ready
- Conversion tracking setup
- Performance monitoring
- User behavior analysis

## 🛠️ Development

### Code Style
- ESLint configuration included
- Prettier for code formatting
- TypeScript strict mode enabled

### Git Workflow
1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and commit: `git commit -m "Add new feature"`
3. Push to branch: `git push origin feature/new-feature`
4. Create pull request

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [ENERGY Blockchain Docs](https://docs.energyblockchain.org)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Documentation**: [docs.energyblockchain.org](https://docs.energyblockchain.org)
- **Community**: [Discord](https://discord.gg/energyblockchain)
- **Email**: [support@energyblockchain.org](mailto:support@energyblockchain.org)
- **Twitter**: [@energyblockchain](https://twitter.com/energyblockchain)

## 🌱 About ENERGY Blockchain

ENERGY Blockchain is the world's first renewable energy blockchain platform featuring:

- **65,000+ TPS** through Proof of History consensus
- **Proof of Energy** validation requiring renewable energy production
- **Carbon Credit Marketplace** with verified international standards
- **Energy Trading DEX** for real-time P2P energy trading
- **Sustainable DeFi** protocols for green finance

Join the energy revolution at [energyblockchain.org](https://energyblockchain.org)

---

Built with 💚 by the ENERGY Blockchain team