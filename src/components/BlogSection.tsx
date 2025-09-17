'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  FileText,
  Tag,
  User,
  BookOpen,
  ChevronRight
} from 'lucide-react'

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Articles', count: 24 },
    { id: 'news', label: 'News', count: 8 },
    { id: 'tutorials', label: 'Tutorials', count: 6 },
    { id: 'updates', label: 'Platform Updates', count: 5 },
    { id: 'research', label: 'Research', count: 5 }
  ]

  const featuredArticle = {
    title: 'ENERGY Blockchain Achieves 65,000+ TPS in Latest Testnet',
    excerpt: 'Our revolutionary Proof of Energy consensus mechanism has successfully demonstrated unprecedented transaction speeds while maintaining carbon neutrality.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'news',
    image: '/blog/featured.jpg',
    tags: ['Testnet', 'Performance', 'Milestone']
  }

  const articles = [
    {
      id: 1,
      title: 'Understanding Proof of Energy: A Deep Dive',
      excerpt: 'Learn how our innovative consensus mechanism combines renewable energy verification with blockchain security.',
      author: 'Michael Torres',
      date: '2024-01-14',
      readTime: '8 min read',
      category: 'tutorials',
      tags: ['Technology', 'Consensus', 'Tutorial']
    },
    {
      id: 2,
      title: 'Q1 2024 Roadmap Update: Mainnet Launch Preparations',
      excerpt: 'Key milestones achieved and upcoming developments as we approach our mainnet launch.',
      author: 'Emily Zhang',
      date: '2024-01-13',
      readTime: '4 min read',
      category: 'updates',
      tags: ['Roadmap', 'Mainnet', 'Updates']
    },
    {
      id: 3,
      title: 'Carbon Credits Marketplace Surpasses $10M in Trading Volume',
      excerpt: 'Our decentralized carbon marketplace reaches new heights with institutional adoption.',
      author: 'James Wilson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'news',
      tags: ['Carbon Credits', 'Marketplace', 'Milestone']
    },
    {
      id: 4,
      title: 'Building Your First dApp on ENERGY Blockchain',
      excerpt: 'Step-by-step guide to deploying smart contracts and building applications on our platform.',
      author: 'Alex Kumar',
      date: '2024-01-11',
      readTime: '12 min read',
      category: 'tutorials',
      tags: ['Development', 'dApps', 'Tutorial']
    },
    {
      id: 5,
      title: 'Research Paper: Energy-Efficient Consensus Mechanisms',
      excerpt: 'Our latest research on optimizing blockchain consensus for minimal energy consumption.',
      author: 'Prof. Lisa Anderson',
      date: '2024-01-10',
      readTime: '15 min read',
      category: 'research',
      tags: ['Research', 'Academic', 'Sustainability']
    },
    {
      id: 6,
      title: 'Partnership Announcement: Global Renewable Energy Alliance',
      excerpt: 'Strategic partnership to integrate 500+ renewable energy producers into the network.',
      author: 'David Park',
      date: '2024-01-09',
      readTime: '3 min read',
      category: 'news',
      tags: ['Partnership', 'Renewable Energy', 'Growth']
    }
  ]

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory)

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-green-900/10 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <FileText className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Blog & News</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-gradient">Updates & Insights</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed with the latest news, tutorials, and research from the ENERGY blockchain ecosystem
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-green-500/30 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    {featuredArticle.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="group flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="h-64 lg:h-auto bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="h-32 w-32 text-green-500/30" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  article.category === 'news' ? 'bg-blue-500/20 text-blue-400' :
                  article.category === 'tutorials' ? 'bg-purple-500/20 text-purple-400' :
                  article.category === 'updates' ? 'bg-green-500/20 text-green-400' :
                  article.category === 'research' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {article.category}
                </span>
                <BookOpen className="h-5 w-5 text-gray-600 group-hover:text-green-400 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-400 mb-4 line-clamp-2">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-slate-700/50 text-gray-500 text-xs rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-2">
                  <User className="h-3 w-3" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{article.date}</span>
                <button className="text-green-400 hover:text-green-300 transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection