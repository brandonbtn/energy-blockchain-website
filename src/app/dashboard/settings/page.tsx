'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Mail,
  Lock,
  Shield,
  Bell,
  Palette,
  Globe,
  Wallet,
  Key,
  Smartphone,
  Monitor,
  Download,
  Upload,
  Camera,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Moon,
  Sun,
  LogOut,
  Trash2,
  Save,
  Edit,
  QrCode,
  Activity,
  DollarSign,
  Eye,
  EyeOff
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SettingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('profile')
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    trading: true,
    news: true,
    marketing: false
  })
  const [twoFactor, setTwoFactor] = useState(false)
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Trading Bot', created: '2025-09-01', lastUsed: '2025-09-17', status: 'active' },
    { id: 2, name: 'Analytics API', created: '2025-08-15', lastUsed: '2025-09-15', status: 'active' }
  ])

  const [profile, setProfile] = useState({
    name: 'Brandon Wilkinson',
    email: 'brandon@energytoken.io',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    timezone: 'UTC-5',
    language: 'English',
    bio: 'Cryptocurrency trader and renewable energy enthusiast'
  })

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    router.push('/')
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'wallet', label: 'Wallet', icon: Wallet }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                    <Camera className="h-4 w-4 text-white" />
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
                  <p className="text-gray-400">{profile.email}</p>
                  <p className="text-gray-500 text-sm mt-1">Member since September 2024</p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Country</label>
                  <select
                    value={profile.country}
                    onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Timezone</label>
                  <select
                    value={profile.timezone}
                    onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  >
                    <option>UTC-5 (Eastern)</option>
                    <option>UTC-6 (Central)</option>
                    <option>UTC-7 (Mountain)</option>
                    <option>UTC-8 (Pacific)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Language</label>
                  <select
                    value={profile.language}
                    onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-400 text-sm mb-2">Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center">
                <Save className="h-5 w-5 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            {/* Password Change */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Change Password</h3>
              <div className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300">
                  Update Password
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Two-Factor Authentication</h3>
                  <p className="text-gray-400 text-sm mt-1">Add an extra layer of security to your account</p>
                </div>
                <button
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    twoFactor ? 'bg-green-500' : 'bg-slate-600'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    twoFactor ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              {twoFactor && (
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="flex items-center justify-center mb-4">
                    <QrCode className="h-32 w-32 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-center text-sm">
                    Scan this QR code with your authenticator app
                  </p>
                  <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                    <p className="text-gray-500 text-xs mb-2">Manual entry key:</p>
                    <code className="text-green-400 text-sm">ABCD-EFGH-IJKL-MNOP</code>
                  </div>
                </div>
              )}
            </div>

            {/* Active Sessions */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Active Sessions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-slate-700">
                  <div className="flex items-center space-x-4">
                    <Monitor className="h-8 w-8 text-gray-400" />
                    <div>
                      <p className="text-white font-medium">Chrome on Windows</p>
                      <p className="text-gray-400 text-sm">192.168.1.1 · Current session</p>
                    </div>
                  </div>
                  <span className="text-green-400 text-sm">Active now</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-700">
                  <div className="flex items-center space-x-4">
                    <Smartphone className="h-8 w-8 text-gray-400" />
                    <div>
                      <p className="text-white font-medium">Mobile App - iOS</p>
                      <p className="text-gray-400 text-sm">192.168.1.2 · Last seen 2 hours ago</p>
                    </div>
                  </div>
                  <button className="text-red-400 hover:text-red-300 transition-colors">
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Notification Preferences</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-gray-400 text-sm">Receive notifications via email</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, email: !notifications.email })}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      notifications.email ? 'bg-green-500' : 'bg-slate-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      notifications.email ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Push Notifications</p>
                    <p className="text-gray-400 text-sm">Receive push notifications on your devices</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, push: !notifications.push })}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      notifications.push ? 'bg-green-500' : 'bg-slate-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      notifications.push ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Trading Alerts</p>
                    <p className="text-gray-400 text-sm">Get notified about price changes and trades</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, trading: !notifications.trading })}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      notifications.trading ? 'bg-green-500' : 'bg-slate-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      notifications.trading ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">News & Updates</p>
                    <p className="text-gray-400 text-sm">Stay updated with platform news</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, news: !notifications.news })}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      notifications.news ? 'bg-green-500' : 'bg-slate-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      notifications.news ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Marketing Emails</p>
                    <p className="text-gray-400 text-sm">Receive promotional offers and updates</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, marketing: !notifications.marketing })}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      notifications.marketing ? 'bg-green-500' : 'bg-slate-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      notifications.marketing ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'appearance':
        return (
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Theme Settings</h3>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white font-medium">Dark Mode</p>
                  <p className="text-gray-400 text-sm">Use dark theme across the platform</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    darkMode ? 'bg-green-500' : 'bg-slate-600'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform flex items-center justify-center ${
                    darkMode ? 'translate-x-7' : 'translate-x-1'
                  }`}>
                    {darkMode ? <Moon className="h-4 w-4 text-slate-800" /> : <Sun className="h-4 w-4 text-yellow-500" />}
                  </div>
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="p-4 bg-green-500/20 border-2 border-green-500 rounded-lg">
                  <div className="w-full h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded mb-2" />
                  <p className="text-white text-sm">Green</p>
                </button>
                <button className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg hover:border-blue-500 transition-colors">
                  <div className="w-full h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded mb-2" />
                  <p className="text-gray-400 text-sm">Blue</p>
                </button>
                <button className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg hover:border-purple-500 transition-colors">
                  <div className="w-full h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded mb-2" />
                  <p className="text-gray-400 text-sm">Purple</p>
                </button>
                <button className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg hover:border-orange-500 transition-colors">
                  <div className="w-full h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded mb-2" />
                  <p className="text-gray-400 text-sm">Orange</p>
                </button>
              </div>
            </div>
          </div>
        )

      case 'api':
        return (
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">API Keys</h3>
                <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300">
                  Generate New Key
                </button>
              </div>
              <div className="space-y-4">
                {apiKeys.map((key) => (
                  <div key={key.id} className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-white font-medium">{key.name}</p>
                        <p className="text-gray-400 text-sm">Created {key.created}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">
                          {key.status}
                        </span>
                        <button className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors">
                          <Eye className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="p-2 bg-slate-800/50 rounded-lg hover:bg-red-500/20 transition-colors">
                          <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-400" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm">Last used: {key.lastUsed}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'wallet':
        return (
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Connected Wallets</h3>
              <div className="space-y-4">
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Wallet className="h-8 w-8 text-green-400" />
                      <div>
                        <p className="text-white font-medium">Phantom Wallet</p>
                        <p className="text-gray-400 text-sm">Gx2r...4kPL</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">
                        Primary
                      </span>
                      <button className="text-red-400 hover:text-red-300 transition-colors">
                        Disconnect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-4 px-6 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors">
                Connect Another Wallet
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Withdrawal Settings</h3>
              <div className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Daily Withdrawal Limit</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                      placeholder="10000"
                    />
                    <span className="text-gray-400">ENERGY</span>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Whitelist Addresses</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:outline-none resize-none"
                    placeholder="Enter trusted addresses (one per line)"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/10 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                ← Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-white">Settings</h1>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors flex items-center"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-green-500/20 text-green-400'
                          : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                      {activeTab === tab.id && <ChevronRight className="h-4 w-4 ml-auto" />}
                    </button>
                  )
                })}
              </nav>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all">
                  <Download className="h-5 w-5" />
                  <span className="font-medium">Export Data</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-all mt-2">
                  <Trash2 className="h-5 w-5" />
                  <span className="font-medium">Delete Account</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}