


import DashboardLayout from '@/components/dashboard/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, Plus, Eye, Download, Edit } from 'lucide-react'

export const metadata = {
  title: 'Мои карточки - UPAK',
  description: 'Управление карточками товаров'
}

export default function CardsPage() {
  const cards = [
    {
      id: 1,
      name: 'Беспроводные наушники AirPods',
      status: 'completed',
      statusText: 'Готово',
      createdAt: '15 августа 2025',
      plan: 'Базовый'
    },
    {
      id: 2,
      name: 'Смартфон iPhone 15',
      status: 'in_progress',
      statusText: 'В работе',
      createdAt: '18 августа 2025',
      plan: 'Премиум'
    }
  ]

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Мои карточки</h1>
          <Button className="bg-blue-600 hover:bg-blue-500">
            <Plus className="w-5 h-5 mr-2" />
            Создать карточку
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-blue-400" />
                  <CardTitle className="text-white text-lg">{card.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Статус:</span>
                    <span className={`font-medium ${
                      card.status === 'completed' ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {card.statusText}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Тариф:</span>
                    <span className="text-white">{card.plan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Создан:</span>
                    <span className="text-white">{card.createdAt}</span>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                      <Eye className="w-4 h-4 mr-1" />
                      Просмотр
                    </Button>
                    {card.status === 'completed' && (
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                        <Download className="w-4 h-4 mr-1" />
                        Скачать
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
