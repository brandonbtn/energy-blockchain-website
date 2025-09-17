'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { TrendingUp, Zap, Leaf, Globe, Users, DollarSign } from 'lucide-react'

const Metrics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const metrics = [
    {
      icon: Zap,
      value: 65000,
      suffix: '+',
      label: 'Transactions Per Second',
      description: 'World-class throughput',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    {
      icon: Leaf,
      value: 99.9,
      suffix: '%',
      label: 'Energy Efficiency',
      description: 'vs Traditional Blockchains',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: Globe,
      value: 1000000,
      suffix: '+',
      label: 'Carbon Credits Traded',
      description: 'Verified offsets',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Countries Supported',
      description: 'Global energy network',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: DollarSign,
      value: 100,
      suffix: 'M+',
      label: 'Total Value Locked',
      description: 'In energy contracts',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10'
    },
    {
      icon: TrendingUp,
      value: 500,
      suffix: '+',
      label: 'Energy Producers',
      description: 'Verified validators',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10'
    }
  ]

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>

                  {/* Value */}
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {inView && (
                      <CountUp
                        end={metric.value}
                        duration={2}
                        separator=","
                        suffix={metric.suffix}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs">
                    {metric.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Metrics