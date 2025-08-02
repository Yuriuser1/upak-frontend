
"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bot, Camera, FileText, Clock, Zap, Target } from 'lucide-react'

export default function Services() {
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

  const services = [
    {
      icon: Bot,
      title: "AI-генерация контента",
      description: "Автоматическое создание заголовков, SEO-оптимизированных описаний и списка преимуществ товара",
      features: [
        "Заголовки товаров",
        "SEO-описания",
        "Характеристики",
        "Техническое задание"
      ]
    },
    {
      icon: Camera,
      title: "Обработка изображений",
      description: "AI-обработка фотографий, удаление фона, оптимизация под требования маркетплейсов",
      features: [
        "Улучшение качества фото",
        "Удаление фона",
        "Добавление брендинга",
        "Генерация через DALL-E"
      ]
    },
    {
      icon: FileText,
      title: "Готовые файлы для загрузки",
      description: "Создание PDF-карточек и Excel-файлов, готовых для прямой загрузки на маркетплейсы",
      features: [
        "PDF-карточки",
        "Excel для массовой загрузки",
        "Адаптация под WB/Ozon",
        "Файлы для Яндекс.Маркет"
      ]
    }
  ]

  const features = [
    {
      icon: Clock,
      title: "Быстрое создание",
      description: "От 5 минут до готовой карточки"
    },
    {
      icon: Zap,
      title: "Автоматизация",
      description: "Минимум ручной работы"
    },
    {
      icon: Target,
      title: "Точность",
      description: "Соответствие требованиям площадок"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Наши </span>
            <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Полный спектр услуг для создания продающих карточек товаров
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-800/80 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group hover:shadow-xl hover:shadow-blue-500/10"
              variants={itemVariants}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20 text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
