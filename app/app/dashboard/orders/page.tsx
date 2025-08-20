


import DashboardLayout from '@/components/dashboard/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Package, Clock, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Заказы - UPAK',
  description: 'История заказов'
}

export default function OrdersPage() {
  const orders = [
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle
      case 'in_progress':
        return Clock
      case 'pending':
        return Package
      default:
        return Package
    }
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white mb-8">Заказы</h1>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">История заказов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order, index) => {
                const StatusIcon = getStatusIcon(order.status)
                return (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-700"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                          <StatusIcon className="w-5 h-5 text-gray-400" />
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
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
