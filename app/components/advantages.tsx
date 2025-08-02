
"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, Clock, Users, Target, Award } from 'lucide-react'

export default function Advantages() {
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

  const advantages = [
    {
      icon: Zap,
      title: "Скорость создания",
      description: "Получите готовую карточку за 5 минут вместо нескольких дней",
      benefit: "Экономия времени 95%"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Соответствие всем требованиям маркетплейсов и SEO-стандартам",
      benefit: "100% соответствие"
    },
    {
      icon: Clock,
      title: "Поддержка 24/7",
      description: "Круглосуточная помощь экспертов и быстрое решение любых вопросов",
      benefit: "Всегда на связи"
    },
    {
      icon: Users,
      title: "Персонализация",
      description: "Адаптация под специфику вашего бренда и целевую аудиторию",
      benefit: "Индивидуальный подход"
    },
    {
      icon: Target,
      title: "Результативность",
      description: "Карточки созданы для максимальной конверсии и роста продаж",
      benefit: "Рост продаж +250%"
    },
    {
      icon: Award,
      title: "Экспертность",
      description: "Опыт работы с топовыми брендами и знание лучших практик",
      benefit: "5+ лет опыта"
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
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
            <span className="gradient-text">преимущества</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Почему более 10,000 селлеров выбирают UPAK для создания карточек товаров
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-800/80 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group hover:shadow-xl hover:shadow-blue-500/10 text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 mx-auto mb-6">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">{advantage.description}</p>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="text-blue-400 font-semibold text-sm">{advantage.benefit}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готовы увеличить продажи?
            </h3>
            <p className="text-gray-300 mb-6">
              Присоединяйтесь к успешным селлерам, которые уже используют UPAK для создания продающих карточек
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">Гарантия результата</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm">Быстрый старт</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-sm">Поддержка 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
