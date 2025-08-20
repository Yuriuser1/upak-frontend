


import DashboardLayout from '@/components/dashboard/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { User, Bell, Shield, CreditCard } from 'lucide-react'

export const metadata = {
  title: 'Настройки - UPAK',
  description: 'Настройки аккаунта'
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white mb-8">Настройки</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Профиль */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="w-5 h-5 mr-2" />
                Профиль
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">Имя</Label>
                <Input
                  id="name"
                  defaultValue="Иван Иванов"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="ivan@example.com"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-300">Телефон</Label>
                <Input
                  id="phone"
                  defaultValue="+7 (999) 123-45-67"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-500">
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>

          {/* Уведомления */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Уведомления
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white">Email уведомления</Label>
                  <p className="text-sm text-gray-400">Получать уведомления о заказах на email</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white">SMS уведомления</Label>
                  <p className="text-sm text-gray-400">Получать SMS о готовности карточек</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white">Telegram уведомления</Label>
                  <p className="text-sm text-gray-400">Уведомления в Telegram боте</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Безопасность */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Безопасность
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                Изменить пароль
              </Button>
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                Настроить двухфакторную аутентификацию
              </Button>
              <Button variant="outline" className="w-full border-red-600 text-red-400 hover:bg-red-600 hover:text-white">
                Удалить аккаунт
              </Button>
            </CardContent>
          </Card>

          {/* Платежи */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Платежи
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white">Основная карта</Label>
                <p className="text-gray-400">**** **** **** 1234</p>
              </div>
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                Добавить карту
              </Button>
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                История платежей
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
