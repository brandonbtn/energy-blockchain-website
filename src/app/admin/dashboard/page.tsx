'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Users,
  FileText,
  BarChart3,
  Settings,
  AlertTriangle,
  Activity,
  DollarSign,
  TrendingUp,
  UserCheck,
  UserX,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Lock,
  Unlock,
  Mail,
  Bell,
  Database,
  Globe,
  Cpu,
  HardDrive,
  Zap,
  CheckCircle,
  XCircle,
  Clock,
  LogOut,
  ChevronRight,
  MoreVertical,
  Plus,
  Minus,
  Copy,
  ExternalLink,
  Calendar,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  AlertCircle,
  Server,
  Code,
  Layers,
  Terminal
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showUserDetails, setShowUserDetails] = useState<string | null>(null)

  // Check admin authentication
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdminAuthenticated')
    if (isAdmin !== 'true') {
      router.push('/admin/login')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated')
    localStorage.removeItem('adminEmail')
    localStorage.removeItem('adminLoginTime')
    router.push('/admin/login')
  }

  // Mock data for demonstration
  const stats = {
    totalUsers: 50234,
    activeUsers: 12453,
    totalRevenue: 2453000,
    totalTransactions: 145632,
    systemHealth: 98.5,
    serverLoad: 45,
    storageUsed: 67,
    apiCalls: 1234567
  }

  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      wallet: '7xKQ...3nP8',
      status: 'active',
      balance: 15420.50,
      joined: '2024-01-15',
      lastActive: '2 hours ago',
      transactions: 234,
      kycStatus: 'verified'
    },
    {
      id: '2',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      wallet: '9mNR...7kL2',
      status: 'active',
      balance: 8932.25,
      joined: '2024-02-20',
      lastActive: '5 minutes ago',
      transactions: 156,
      kycStatus: 'verified'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      wallet: '3pQT...9mK4',
      status: 'suspended',
      balance: 3241.00,
      joined: '2024-03-10',
      lastActive: '3 days ago',
      transactions: 89,
      kycStatus: 'pending'
    },
    {
      id: '4',
      name: 'Emma Wilson',
      email: 'emma@example.com',
      wallet: '5rSU...2nM6',
      status: 'active',
      balance: 45670.75,
      joined: '2023-12-05',
      lastActive: '1 hour ago',
      transactions: 567,
      kycStatus: 'verified'
    },
    {
      id: '5',
      name: 'David Brown',
      email: 'david@example.com',
      wallet: '8vWT...5pN9',
      status: 'inactive',
      balance: 120.50,
      joined: '2024-04-01',
      lastActive: '2 weeks ago',
      transactions: 12,
      kycStatus: 'unverified'
    }
  ]

  const recentActivities = [
    { type: 'user_register', message: 'New user registration: Alice Cooper', time: '5 min ago', icon: UserCheck },
    { type: 'transaction', message: 'Large transaction: 10,000 ENERGY', time: '15 min ago', icon: DollarSign },
    { type: 'security', message: 'Failed login attempt blocked', time: '30 min ago', icon: Shield },
    { type: 'system', message: 'Database backup completed', time: '1 hour ago', icon: Database },
    { type: 'api', message: 'API rate limit reached for user #3421', time: '2 hours ago', icon: AlertTriangle }
  ]

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const handleUserAction = (action: string, userId: string) => {
    console.log(`Action: ${action}, User: ${userId}`)
    // Implement actual user management actions here
  }

  const handleBulkAction = (action: string) => {
    console.log(`Bulk action: ${action}, Users: ${selectedUsers}`)
    // Implement bulk actions here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-400 text-sm">ENERGY Token Control Panel</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <RefreshCw className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors flex items-center"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-slate-900/50 p-1 rounded-xl w-fit">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'content', label: 'Content', icon: FileText },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'system', label: 'System', icon: Settings }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-8 w-8 text-blue-400" />
                  <span className="text-green-400 text-sm">+12.5%</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stats.totalUsers.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Total Users</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <Activity className="h-8 w-8 text-green-400" />
                  <span className="text-green-400 text-sm">+8.3%</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stats.activeUsers.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Active Users</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="h-8 w-8 text-yellow-400" />
                  <span className="text-green-400 text-sm">+24.7%</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">${(stats.totalRevenue / 1000).toFixed(1)}K</h3>
                <p className="text-gray-400 text-sm">Total Revenue</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <Zap className="h-8 w-8 text-purple-400" />
                  <span className="text-green-400 text-sm">+15.2%</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{(stats.totalTransactions / 1000).toFixed(0)}K</h3>
                <p className="text-gray-400 text-sm">Transactions</p>
              </motion.div>
            </div>

            {/* System Health */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Overall Health</span>
                      <span className="text-green-400 font-semibold">{stats.systemHealth}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: `${stats.systemHealth}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Server Load</span>
                      <span className="text-yellow-400 font-semibold">{stats.serverLoad}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${stats.serverLoad}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Storage Used</span>
                      <span className="text-orange-400 font-semibold">{stats.storageUsed}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-orange-400 h-2 rounded-full" style={{ width: `${stats.storageUsed}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <activity.icon className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-300">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search users by name or email..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
              <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-500 hover:to-orange-500 transition-all">
                <Plus className="h-5 w-5 inline mr-2" />
                Add User
              </button>
            </div>

            {/* Bulk Actions */}
            {selectedUsers.length > 0 && (
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 flex items-center justify-between">
                <p className="text-orange-400">{selectedUsers.length} users selected</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBulkAction('activate')}
                    className="px-4 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-colors"
                  >
                    Activate
                  </button>
                  <button
                    onClick={() => handleBulkAction('suspend')}
                    className="px-4 py-2 bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400 rounded-lg transition-colors"
                  >
                    Suspend
                  </button>
                  <button
                    onClick={() => handleBulkAction('delete')}
                    className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}

            {/* Users Table */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-800/50 border-b border-slate-700">
                    <tr>
                      <th className="px-6 py-4 text-left">
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedUsers(filteredUsers.map(u => u.id))
                            } else {
                              setSelectedUsers([])
                            }
                          }}
                          className="w-4 h-4 bg-slate-700 border-slate-600 rounded"
                        />
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Wallet</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Balance</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">KYC</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Joined</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedUsers.includes(user.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedUsers([...selectedUsers, user.id])
                              } else {
                                setSelectedUsers(selectedUsers.filter(id => id !== user.id))
                              }
                            }}
                            className="w-4 h-4 bg-slate-700 border-slate-600 rounded"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-gray-400 text-sm">{user.email}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-300 font-mono">{user.wallet}</span>
                            <button className="text-gray-400 hover:text-white">
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-white font-medium">${user.balance.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                            user.status === 'inactive' ? 'bg-gray-500/20 text-gray-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            user.kycStatus === 'verified' ? 'bg-blue-500/20 text-blue-400' :
                            user.kycStatus === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {user.kycStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400 text-sm">
                          {user.joined}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setShowUserDetails(user.id)}
                              className="p-1 text-gray-400 hover:text-white transition-colors"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleUserAction('edit', user.id)}
                              className="p-1 text-gray-400 hover:text-white transition-colors"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleUserAction('suspend', user.id)}
                              className="p-1 text-gray-400 hover:text-yellow-400 transition-colors"
                            >
                              {user.status === 'suspended' ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                            </button>
                            <button
                              onClick={() => handleUserAction('delete', user.id)}
                              className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pages */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Website Pages</h3>
                <div className="space-y-3">
                  {['Homepage', 'Technology', 'Ecosystem', 'Roadmap', 'Team', 'Documentation'].map((page) => (
                    <div key={page} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                      <span className="text-gray-300">{page}</span>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-white">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog Posts */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Blog Posts</h3>
                <button className="w-full mb-4 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-500 hover:to-orange-500 transition-all">
                  <Plus className="h-4 w-4 inline mr-2" />
                  New Post
                </button>
                <div className="space-y-3">
                  {['ENERGY Token Launch', 'Staking Rewards Update', 'Q1 2024 Roadmap'].map((post) => (
                    <div key={post} className="p-3 bg-slate-800/30 rounded-lg">
                      <p className="text-gray-300 text-sm mb-1">{post}</p>
                      <p className="text-gray-500 text-xs">Published 2 days ago</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Library */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Media Library</h3>
                <div className="space-y-3">
                  <div className="p-4 border-2 border-dashed border-slate-700 rounded-lg text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Upload files</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-slate-800 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Traffic Overview */}
              <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Traffic Overview</h3>
                <div className="h-64 bg-slate-800/30 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Traffic Chart</p>
                </div>
              </div>

              {/* Top Pages */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Top Pages</h3>
                <div className="space-y-3">
                  {[
                    { page: '/dashboard', views: 15234 },
                    { page: '/trading', views: 12453 },
                    { page: '/', views: 10234 },
                    { page: '/staking', views: 8932 }
                  ].map((item) => (
                    <div key={item.page} className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{item.page}</span>
                      <span className="text-white font-medium">{item.views.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Analytics */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Revenue Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <p className="text-gray-400 text-sm mb-1">Trading Fees</p>
                  <p className="text-xl font-bold text-white">$45,234</p>
                  <p className="text-green-400 text-xs">+12.5%</p>
                </div>
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <p className="text-gray-400 text-sm mb-1">Staking Rewards</p>
                  <p className="text-xl font-bold text-white">$32,120</p>
                  <p className="text-green-400 text-xs">+8.3%</p>
                </div>
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <p className="text-gray-400 text-sm mb-1">Premium Subscriptions</p>
                  <p className="text-xl font-bold text-white">$12,450</p>
                  <p className="text-green-400 text-xs">+15.7%</p>
                </div>
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <p className="text-gray-400 text-sm mb-1">API Access</p>
                  <p className="text-xl font-bold text-white">$8,930</p>
                  <p className="text-green-400 text-xs">+22.1%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            {/* Security Alerts */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-2">Security Alerts</h3>
                  <ul className="space-y-2 text-sm text-red-300">
                    <li>• 3 failed login attempts from IP 192.168.1.100</li>
                    <li>• Unusual activity detected on user account #3421</li>
                    <li>• SSL certificate expires in 15 days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Security Settings</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Two-Factor Authentication', enabled: true },
                    { label: 'IP Whitelisting', enabled: true },
                    { label: 'Session Timeout', enabled: true },
                    { label: 'Brute Force Protection', enabled: true },
                    { label: 'API Rate Limiting', enabled: true }
                  ].map((setting) => (
                    <div key={setting.label} className="flex items-center justify-between">
                      <span className="text-gray-300">{setting.label}</span>
                      <button className={`px-3 py-1 rounded-full text-xs font-medium ${
                        setting.enabled
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {setting.enabled ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit Log */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Audit Log</h3>
                <div className="space-y-3">
                  {[
                    { action: 'User suspended', user: 'Admin', time: '10 min ago' },
                    { action: 'Settings updated', user: 'Admin', time: '1 hour ago' },
                    { action: 'Backup created', user: 'System', time: '3 hours ago' },
                    { action: 'User deleted', user: 'Admin', time: '5 hours ago' }
                  ].map((log, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                      <div>
                        <p className="text-gray-300 text-sm">{log.action}</p>
                        <p className="text-gray-500 text-xs">by {log.user}</p>
                      </div>
                      <span className="text-gray-500 text-xs">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Tab */}
        {activeTab === 'system' && (
          <div className="space-y-6">
            {/* System Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">API Server</h3>
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-400">Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-white">99.99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-white">45ms</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Database</h3>
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type</span>
                    <span className="text-white">PostgreSQL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size</span>
                    <span className="text-white">2.4 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Connections</span>
                    <span className="text-white">234 / 500</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Blockchain</h3>
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network</span>
                    <span className="text-white">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RPC Status</span>
                    <span className="text-green-400">Connected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Block Height</span>
                    <span className="text-white">234,567,890</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System Actions */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">System Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-center transition-colors">
                  <Database className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Backup Database</p>
                </button>
                <button className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-center transition-colors">
                  <RefreshCw className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Clear Cache</p>
                </button>
                <button className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-center transition-colors">
                  <Download className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Export Logs</p>
                </button>
                <button className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-center transition-colors">
                  <Terminal className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Console</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}