
"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, X, Crown } from 'lucide-react'

export default function Comparison() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const features = [
    {
      category: "Скорость создания",
      items: [
        { feature: "Время создания карточки", upak: "5 минут", competitors: "2-3 дня", freelancers: "1-2 дня" },
        { feature: "Готовность к загрузке", upak: "Сразу", competitors: "После доработок", freelancers: "После правок" }
      ]
    },
    {
      category: "Качество контента",
      items: [
        { feature: "AI-генерация текстов", upak: "Продвинутый AI", competitors: "Базовые шаблоны", freelancers: "Ручная работа" },
        { feature: "SEO-оптимизация", upak: "Автоматическая", competitors: "Частичная", freelancers: "Зависит от опыта" },
        { feature: "Обработка изображений", upak: "AI-обработка", competitors: "Базовая", freelancers: "Ручная" }
      ]
    },
    {
      category: "Стоимость и поддержка",
      items: [
        { feature: "Цена за карточку", upak: "От 1,490₽", competitors: "От 2,500₽", freelancers: "От 1,000₽" },
        { feature: "Поддержка", upak: "24/7", competitors: "Рабочие часы", freelancers: "Ограничена" },
        { feature: "Гарантия качества", upak: "100%", competitors: "Ограничена", freelancers: "Нет" }
      ]
    },
    {
      category: "Функциональность",
      items: [
        { feature: "Соответствие требованиям WB/Ozon", upak: "Полное", competitors: "Частичное", freelancers: "Зависит от опыта" },
        { feature: "Пакетная обработка", upak: "Доступна", competitors: "Ограничена", freelancers: "Нет" },
        { feature: "Аналитика и отчеты", upak: "Подробные", competitors: "Базовые", freelancers: "Нет" }
      ]
    }
  ]

  const getStatusIcon = (value: string, isUpak: boolean) => {
    if (isUpak) {
      return <Crown className="w-5 h-5 text-yellow-400" />
    }
    
    if (value.includes("Нет") || value.includes("Ограничена") || value.includes("Частичное")) {
      return <X className="w-5 h-5 text-red-400" />
    }
    
    return <Check className="w-5 h-5 text-green-400" />
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Сравнение с </span>
            <span className="gradient-text">конкурентами</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Посмотрите, почему UPAK превосходит другие решения для создания карточек товаров
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            className="min-w-full bg-gray-900 rounded-xl border border-gray-700 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-800 border-b border-gray-700">
              <div className="text-white font-semibold">Критерии</div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">UPAK</span>
                </div>
              </div>
              <div className="text-center text-gray-300 font-medium">Конкуренты</div>
              <div className="text-center text-gray-300 font-medium">Фрилансеры</div>
            </div>

            {/* Content */}
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <motion.div
                  className="px-6 py-4 bg-gray-800/50 border-b border-gray-700"
                  variants={itemVariants}
                >
                  <h3 className="font-semibold text-blue-400">{category.category}</h3>
                </motion.div>
                
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="grid grid-cols-4 gap-4 p-4 border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors"
                    variants={itemVariants}
                  >
                    <div className="text-gray-300 font-medium">{item.feature}</div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(item.upak, true)}
                        <span className="text-white font-semibold">{item.upak}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(item.competitors, false)}
                        <span className="text-gray-300">{item.competitors}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(item.freelancers, false)}
                        <span className="text-gray-300">{item.freelancers}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Выбор очевиден
          </h3>
          <p className="text-gray-300 mb-6">
            UPAK объединяет лучшие качества всех решений: скорость автоматизации, 
            качество профессиональной работы и доступную стоимость
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center">
                <Crown className="w-4 h-4 text-yellow-400 mr-2" />
                <span>Премиум качество</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-400 mr-2" />
                <span>Доступная цена</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-blue-400 mr-2" />
                <span>Молниеносная скорость</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
