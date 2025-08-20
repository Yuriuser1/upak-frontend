

"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Check, Star, Crown } from 'lucide-react'

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const plans = [
    {
      name: "Базовый",
      price: "1,990₽",
      period: "за карточку",
      description: "Идеально для тестирования и небольших объемов",
      features: [
        "Генерация текста + 3 изображения",
        "Базовое SEO оптимизация",
        "3 часа на выполнение",
        "PDF-карточка",
        "Техническое задание",
        "Поддержка 24/7"
      ],
      icon: Star,
      popular: false
    },
    {
      name: "Премиум",
      price: "3,990₽",
      period: "за карточку",
      description: "Для максимального результата и быстрого выполнения",
      features: [
        "Расширенный контент + 10 изображений",
        "Продвинутое SEO + A/B тесты",
        "1 час на выполнение",
        "Приоритетная обработка",
        "Расширенная AI-генерация",
        "Персональный менеджер",
        "Аналитика и отчеты"
      ],
      icon: Crown,
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Выберите </span>
            <span className="gradient-text">тариф</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Гибкие условия для любых потребностей вашего бизнеса
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-gray-900 rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-blue-500/50 hover:border-blue-400/70 shadow-lg shadow-blue-500/10' 
                  : 'border-gray-700 hover:border-blue-500/30'
              }`}
              variants={itemVariants}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 ${
                  plan.popular ? 'bg-blue-600' : 'bg-gray-700'
                } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 text-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
                onClick={() => {
                  window.open('https://t.me/SellEasyBot', '_blank')
                }}
              >
                {plan.popular ? 'Начать сейчас' : 'Выбрать тариф'}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-300 mb-4">
            <span className="text-blue-400 font-semibold">Бесплатное тестирование</span> - создайте первую карточку и убедитесь в качестве нашего сервиса
          </p>
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
            onClick={() => {
              window.open('https://t.me/SellEasyBot', '_blank')
            }}
          >
            Попробовать бесплатно
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
