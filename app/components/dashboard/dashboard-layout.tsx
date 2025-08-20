


"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  User, 
  ShoppingCart, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Home,
  Package
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Обзор', href: '/dashboard', active: true },
    { icon: Package, label: 'Мои карточки', href: '/dashboard/cards' },
    { icon: ShoppingCart, label: 'Заказы', href: '/dashboard/orders' },
    { icon: FileText, label: 'Шаблоны', href: '/dashboard/templates' },
    { icon: Settings, label: 'Настройки', href: '/dashboard/settings' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 z-50 w-full bg-gray-900 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <Image
                src="/upak_logo.png"
                alt="UPAK Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold gradient-text">UPAK</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 z-40 h-full w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 lg:transform-none ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <Image
                src="/upak_logo.png"
                alt="UPAK Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold gradient-text">UPAK</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    item.active 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">Иван Иванов</p>
              <p className="text-sm text-gray-400">ivan@example.com</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link href="/" className="flex-1">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Home className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="lg:ml-64">
        <div className="pt-16 lg:pt-0">
          {children}
        </div>
      </div>
    </div>
  )
}
