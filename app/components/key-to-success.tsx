

"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Target, Users, Award } from 'lucide-react'

export default function KeyToSuccess() {
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

  const stats = [
    {
      icon: TrendingUp,
      number: "700,000",
      title: "селлеров конкурируют",
      description: "на крупных площадках к концу 2024 года. Выделиться можно только грамотной подачей товара."
    },
    {
      icon: Target,
      number: "20%",
      title: "лучших карточек",
      description: "генерируют 80% продаж в своей нише. Попадание в лидеры — результат профессионального подхода."
    },
    {
      icon: Users,
      number: "Миллионы",
      title: "позиций товаров",
      description: "покупатели выбирают именно те, чьи страницы оформлены наиболее привлекательно и информативно."
    },
    {
      icon: Award,
      number: "Топ-карточка",
      title: "требует комплексной работы",
      description: "аналитика ниши, SEO-оптимизация, высококачественные фото/видео и инфографика."
    }
  ]

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
            <span className="text-white">Ключ к успешным </span>
            <span className="gradient-text">продажам</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Высокое качество карточки товара на маркетплейсе – необходимое условие для успешных продаж
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl p-8 hover:bg-gray-900/80 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold gradient-text mb-2">{stat.number}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{stat.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-300">
            В условиях жесткой конкуренции исследования показывают, что
            <span className="text-blue-400 font-semibold"> лишь качественный подход к созданию карточек </span>
            позволяет выделиться среди сотен тысяч продавцов и получить желаемый результат.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
