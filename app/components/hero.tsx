

"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-8"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">Продающие карточки для</span>
            <br />
            <span className="gradient-text">маркетплейсов с помощью AI</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-blue-400 font-semibold">Один клик и твоя карточка готова!</span>
            <br />
            Создавайте профессиональные карточки товаров для Wildberries, Ozon и других маркетплейсов за минуты.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              onClick={() => {
                const pricingSection = document.getElementById('pricing')
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Создать карточку
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
              onClick={() => {
                window.open('https://t.me/SellEasyBot', '_blank')
              }}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Начать в Telegram
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold gradient-text"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                5 мин
              </motion.div>
              <div className="text-gray-400 text-sm uppercase tracking-wider mt-2">время создания</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold gradient-text"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                1,490₽
              </motion.div>
              <div className="text-gray-400 text-sm uppercase tracking-wider mt-2">от стоимости</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold gradient-text"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                24/7
              </motion.div>
              <div className="text-gray-400 text-sm uppercase tracking-wider mt-2">поддержка</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
