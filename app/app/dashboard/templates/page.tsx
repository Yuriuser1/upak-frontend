


import DashboardLayout from '@/components/dashboard/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Plus, Eye, Download } from 'lucide-react'

export const metadata = {
  title: 'Шаблоны - UPAK',
  description: 'Шаблоны для создания карточек'
}

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: 'Электроника',
      description: 'Шаблон для товаров из категории электроника',
      usedCount: 12,
      category: 'Популярный'
    },
    {
      id: 2,
      name: 'Одежда',
      description: 'Шаблон для одежды и аксессуаров',
      usedCount: 8,
      category: 'Стандартный'
    },
    {
      id: 3,
      name: 'Дом и сад',
      description: 'Шаблон для товаров дома и сада',
      usedCount: 5,
      category: 'Новый'
    }
  ]

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Шаблоны</h1>
          <Button className="bg-blue-600 hover:bg-blue-500">
            <Plus className="w-5 h-5 mr-2" />
            Создать шаблон
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <CardTitle className="text-white text-lg">{template.name}</CardTitle>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    template.category === 'Популярный' 
                      ? 'bg-green-400/10 text-green-400'
                      : template.category === 'Новый'
                      ? 'bg-blue-400/10 text-blue-400'
                      : 'bg-gray-400/10 text-gray-400'
                  }`}>
                    {template.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-400 text-sm">{template.description}</p>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Использован:</span>
                    <span className="text-white">{template.usedCount} раз</span>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      Просмотр
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-500">
                      Использовать
                    </Button>
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
