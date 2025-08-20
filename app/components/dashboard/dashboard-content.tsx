


"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Plus, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Package,
  ShoppingCart,
  TrendingUp,
  Star
} from 'lucide-react'

export default function DashboardContent() {
  const stats = [
    {
      title: 'Всего карточек',
      value: '24',
      change: '+3',
      changeType: 'positive',
      icon: Package
    },
    {
      title: 'В процессе',
      value: '5',
      change: '+1',
      changeType: 'neutral',
      icon: Clock
    },
    {
      title: 'Завершено',
      value: '19',
      change: '+2',
      changeType: 'positive',
      icon: CheckCircle
    },
    {
      title: 'Успешность',
      value: '95%',
      change: '+5%',
      changeType: 'positive',
      icon: TrendingUp
    }
  ]

  const recentOrders = [
    {
      id: '#001',
      product: 'Беспроводные наушники AirPods',
      status: 'completed',
      statusText: 'Завершено',
      date: '15 августа 2025',
      price: '1,990₽',
      plan: 'Базовый'
    },
    {
      id: '#002', 
      product: 'Смартфон iPhone 15',
      status: 'in_progress',
      statusText: 'В процессе',
      date: '18 августа 2025',
      price: '3,990₽',
      plan: 'Премиум'
    },
    {
      id: '#003',
      product: 'Ноутбук MacBook Air',
      status: 'pending',
      statusText: 'Ожидает',
      date: '19 августа 2025',
      price: '3,990₽',
      plan: 'Премиум'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/10'
      case 'in_progress':
        return 'text-blue-400 bg-blue-400/10'
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10'
      default:
        return 'text-gray-400 bg-gray-400/10'
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Добро пожаловать, Иван!
          </h1>
          <p className="text-gray-400">
            Управляйте своими карточками товаров и отслеживайте прогресс
          </p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-wrap gap-4">
          <Button className="bg-blue-600 hover:bg-blue-500 text-white">
            <Plus className="w-5 h-5 mr-2" />
            Создать карточку
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <FileText className="w-5 h-5 mr-2" />
            Мои шаблоны
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-400' : 
                    stat.changeType === 'negative' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {stat.change} за месяц
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span>Последние заказы</span>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Посмотреть все
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-700"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{order.product}</h4>
                        <p className="text-sm text-gray-400">
                          {order.id} • {order.date} • {order.plan}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-semibold">{order.price}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.statusText}
                    </span>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      Подробнее
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
