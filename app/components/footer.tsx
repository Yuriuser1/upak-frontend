

"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src="/upak_logo.png"
                  alt="UPAK Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold gradient-text">UPAK</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Создавайте продающие карточки товаров для маркетплейсов с помощью AI. 
              Быстро, качественно и по доступной цене.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Telegram
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6">Навигация</h3>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Тарифы
              </button>
              <button 
                onClick={() => scrollToSection('examples')}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Примеры работ
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Отзывы
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Контакты</h3>
            <div className="space-y-3">
              <div className="text-gray-400">
                <div className="font-medium">Telegram:</div>
                <div className="text-blue-400">@SellEasyBot</div>
              </div>
              <div className="text-gray-400">
                <div className="font-medium">Email:</div>
                <div className="text-blue-400">info@upak.space</div>
              </div>
              <div className="text-gray-400">
                <div className="font-medium">Поддержка:</div>
                <div>24/7 в Telegram</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <div className="mb-2">
                <strong>ИП Миронов Юрий Владимирович</strong>
              </div>
              <div className="space-y-1">
                <div>ОГРНИП: 325784700226614</div>
                <div>ИНН: 781402794644</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-semibold">15,000+</div>
                <div>карточек создано</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">98%</div>
                <div>довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">24/7</div>
                <div>поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 UPAK. Все права защищены. Создание продающих карточек для маркетплейсов.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
