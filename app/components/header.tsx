
"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Тарифы
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Примеры работ
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Контакты
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              Создать карточку
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200">
              <ExternalLink className="w-4 h-4 mr-2" />
              Telegram
            </Button>
            
            <button 
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              Тарифы
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              Примеры работ
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              Контакты
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
