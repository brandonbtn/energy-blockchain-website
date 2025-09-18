'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import '@/lib/i18n-client'
import {
  LayoutDashboard,
  TrendingUp,
  TrendingDown,
  Wallet,
  Battery,
  Zap,
  DollarSign,
  Activity,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Calendar,
  Settings,
  Bell,
  User,
  LogOut,
  Plus,
  RefreshCw,
  Download,
  Upload,
  Shield,
  ChevronRight,
  Sun,
  Wind,
  Droplet,
  Flame
} from 'lucide-react'

const DashboardPage = () => {
  const router = useRouter()
  const { t, ready } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    setMounted(true)
  }, [])
  const [timeframe, setTimeframe] = useState('24h')
  const [portfolioValue, setPortfolioValue] = useState(125430.50)
  const [energyBalance, setEnergyBalance] = useState(15234.67)
  const [userName, setUserName] = useState('User')

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('isLoggedIn')
    if (!isAuth) {
      router.push('/login')
    }
    const name = localStorage.getItem('userName')
    if (name) {
      setUserName(name)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    router.push('/')
  }

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioValue(prev => prev + (Math.random() - 0.5) * 100)
      setEnergyBalance(prev => prev + (Math.random() - 0.5) * 10)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const tabs = [
    { id: 'overview', label: mounted && ready ? t('dashboard.overview') : 'Overview', icon: LayoutDashboard },
    { id: 'portfolio', label: mounted && ready ? t('dashboard.portfolio') : 'Portfolio', icon: Wallet },
    { id: 'trading', label: mounted && ready ? t('dashboard.trading') : 'Trading', icon: Activity },
    { id: 'staking', label: mounted && ready ? t('dashboard.staking') : 'Staking', icon: Shield },
    { id: 'analytics', label: mounted && ready ? t('dashboard.analytics') : 'Analytics', icon: BarChart3 }
  ]

  const portfolioStats = [
    {
      label: mounted && ready ? t('dashboard.totalValue') : 'Total Value',
      value: `$${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      label: mounted && ready ? t('dashboard.energyBalance') : 'ENERGY Balance',
      value: energyBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      change: '+5.3%',
      trend: 'up',
      icon: Zap,
      color: 'blue'
    },
    {
      label: mounted && ready ? t('dashboard.stakingRewards') : 'Staking Rewards',
      value: '$2,340.12',
      change: '+23.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      label: mounted && ready ? t('dashboard.carbonCredits') : 'Carbon Credits',
      value: '450 tons',
      change: '+15 tons',
      trend: 'up',
      icon: Battery,
      color: 'emerald'
    }
  ]

  const energyAssets = [
    {
      type: mounted && ready ? t('dashboard.solarEnergy') : 'Solar Energy',
      icon: Sun,
      amount: '5,234 kWh',
      value: '$428.59',
      change: '+2.4%',
      trend: 'up',
      color: 'yellow'
    },
    {
      type: mounted && ready ? t('dashboard.windEnergy') : 'Wind Energy',
      icon: Wind,
      amount: '3,120 kWh',
      value: '$255.84',
      change: '-1.2%',
      trend: 'down',
      color: 'cyan'
    },
    {
      type: mounted && ready ? t('dashboard.hydroEnergy') : 'Hydro Energy',
      icon: Droplet,
      amount: '1,850 kWh',
      value: '$151.70',
      change: '+0.8%',
      trend: 'up',
      color: 'blue'
    },
    {
      type: mounted && ready ? t('dashboard.naturalGas') : 'Natural Gas',
      icon: Flame,
      amount: '890 kWh',
      value: '$72.98',
      change: '-3.5%',
      trend: 'down',
      color: 'orange'
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      type: 'Buy',
      asset: 'Solar Energy',
      amount: '500 kWh',
      price: '$0.082/kWh',
      total: '$41.00',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      type: 'Sell',
      asset: 'Wind Energy',
      amount: '300 kWh',
      price: '$0.085/kWh',
      total: '$25.50',
      time: '5 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'Stake',
      asset: 'ENERGY Token',
      amount: '1,000 ENERGY',
      price: '$12.45/ENERGY',
      total: '$12,450',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: 4,
      type: 'Buy',
      asset: 'Carbon Credits',
      amount: '50 tons',
      price: '$45/ton',
      total: '$2,250',
      time: '2 days ago',
      status: 'completed'
    }
  ]

  const stakingPools = [
    {
      name: 'Solar Validators Pool',
      apy: '12.5%',
      tvl: '$45.2M',
      userStake: '5,000 ENERGY',
      rewards: '52.3 ENERGY',
      lockPeriod: '30 days'
    },
    {
      name: 'Wind Energy Pool',
      apy: '10.2%',
      tvl: '$32.1M',
      userStake: '3,000 ENERGY',
      rewards: '25.5 ENERGY',
      lockPeriod: '14 days'
    },
    {
      name: 'Carbon Credit Pool',
      apy: '15.8%',
      tvl: '$28.5M',
      userStake: '2,000 ENERGY',
      rewards: '26.3 ENERGY',
      lockPeriod: '60 days'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/10 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-white">
                ENERGY <span className="text-green-400">Dashboard</span>
              </h1>
              <nav className="hidden md:flex items-center space-x-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon

                  // Use Link for portfolio, trading, and analytics pages
                  if (tab.id === 'portfolio' || tab.id === 'trading' || tab.id === 'analytics') {
                    return (
                      <Link
                        key={tab.id}
                        href={`/dashboard/${tab.id}`}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                          activeTab === tab.id
                            ? 'bg-green-500/20 text-green-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </Link>
                    )
                  }

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-green-500/20 text-green-400'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <Link href="/dashboard/settings" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Settings className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-3 px-3 py-2 bg-slate-800 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">{userName.split(' ')[0]}</span>
                <button onClick={handleLogout}>
                  <LogOut className="h-4 w-4 text-gray-400 cursor-pointer hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {portfolioStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 bg-${stat.color}-500/20 rounded-xl flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 text-${stat.color}-400`} />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="h-4 w-4 text-green-400" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-400" />
                      )}
                      <span className={`text-sm font-medium ${
                        stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-gray-500 text-xs">vs last {timeframe}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Portfolio Chart and Energy Assets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Chart Placeholder */}
              <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Portfolio Performance</h3>
                  <div className="flex items-center space-x-2">
                    {['24h', '7d', '30d', '1y'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setTimeframe(period)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                          timeframe === period
                            ? 'bg-green-500/20 text-green-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-64 bg-slate-900/30 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-slate-700" />
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">High</p>
                    <p className="text-white font-semibold">$145,234</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Low</p>
                    <p className="text-white font-semibold">$118,456</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Volume</p>
                    <p className="text-white font-semibold">$2.4M</p>
                  </div>
                </div>
              </div>

              {/* Energy Assets */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Energy Assets</h3>
                  <button className="text-green-400 hover:text-green-300">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {energyAssets.map((asset, index) => {
                    const Icon = asset.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-${asset.color}-500/20 rounded-xl flex items-center justify-center`}>
                            <Icon className={`h-5 w-5 text-${asset.color}-400`} />
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">{asset.type}</p>
                            <p className="text-gray-500 text-xs">{asset.amount}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium text-sm">{asset.value}</p>
                          <p className={`text-xs ${
                            asset.trend === 'up' ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {asset.change}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-medium transition-all duration-200">
                  View All Assets
                </button>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <RefreshCw className="h-4 w-4" />
                  <span className="text-sm">Refresh</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Type</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Asset</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Amount</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Price</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Total</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Time</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((tx) => (
                      <tr key={tx.id} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            tx.type === 'Buy' ? 'bg-green-500/20 text-green-400' :
                            tx.type === 'Sell' ? 'bg-red-500/20 text-red-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {tx.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white">{tx.asset}</td>
                        <td className="py-3 px-4 text-gray-400">{tx.amount}</td>
                        <td className="py-3 px-4 text-gray-400">{tx.price}</td>
                        <td className="py-3 px-4 text-white font-medium">{tx.total}</td>
                        <td className="py-3 px-4 text-gray-500 text-sm">{tx.time}</td>
                        <td className="py-3 px-4">
                          <span className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-green-400 text-sm">{tx.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button className="text-gray-400 hover:text-white transition-colors text-sm">
                  View All Transactions
                </button>
                <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                  <Download className="h-4 w-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'staking' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Staking Pools</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stakingPools.map((pool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 hover:border-green-500/30 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">{pool.name}</h4>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">APY</span>
                        <span className="text-green-400 font-bold text-lg">{pool.apy}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">TVL</span>
                        <span className="text-white font-medium">{pool.tvl}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Your Stake</span>
                        <span className="text-white">{pool.userStake}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Rewards</span>
                        <span className="text-green-400">{pool.rewards}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Lock Period</span>
                        <span className="text-gray-300">{pool.lockPeriod}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg font-medium transition-colors">
                        Stake More
                      </button>
                      <button className="w-full px-4 py-2 bg-slate-600/30 hover:bg-slate-600/50 text-gray-300 rounded-lg font-medium transition-colors">
                        Claim Rewards
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardPage