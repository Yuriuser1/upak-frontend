

"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

export default function Reviews() {
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

  const reviews = [
    {
      name: "Анна Козлова",
      role: "Основатель магазина детской одежды",
      avatar: "https://i.pinimg.com/originals/f9/f4/a9/f9f4a9ab04a9e13aaac330a0e4d2c438.jpg",
      rating: 5,
      text: "UPAK полностью изменил мой подход к маркетплейсам. Продажи выросли на 300% за первые два месяца! Теперь мои карточки всегда в топе поиска.",
      results: "Рост продаж: +300%"
    },
    {
      name: "Максим Петров",
      role: "Селлер электроники",
      avatar: "https://i.pinimg.com/originals/21/76/78/217678f7eb0ebcae251430dda3529ff0.jpg",
      rating: 5,
      text: "Раньше на создание одной карточки уходило 2-3 дня. Теперь получаю готовый результат за 5 минут. Качество на высоте, поддержка отличная.",
      results: "Экономия времени: 95%"
    },
    {
      name: "Елена Смирнова",
      role: "Владелица бренда косметики",
      avatar: "https://i.pinimg.com/originals/9e/c4/a7/9ec4a7d81442d0183cf332ce959dc310.jpg",
      rating: 5,
      text: "Премиум-тариф окупился за первую неделю. Персональный менеджер помог настроить всю линейку товаров. Результат превзошел ожидания!",
      results: "ROI: 400%"
    },
    {
      name: "Дмитрий Волков",
      role: "Директор по маркетингу",
      avatar: "https://static.vecteezy.com/system/resources/previews/052/249/512/non_2x/professional-headshot-of-a-businessman-in-suit-for-corporate-use-on-transparent-background-png.png",
      rating: 5,
      text: "Использую UPAK для всех наших брендов. AI-генерация контента просто фантастическая - тексты получаются лучше, чем у копирайтеров.",
      results: "Конверсия: +150%"
    },
    {
      name: "Ольга Фёдорова",
      role: "Селлер товаров для дома",
      avatar: "https://i.pinimg.com/736x/16/68/ee/1668eed8bf54340959857db749565108.jpg?nii=t",
      rating: 5,
      text: "Благодаря UPAK мои товары попали в рекомендации Wildberries. Это был прорыв! Теперь рекомендую всем коллегам.",
      results: "Трафик: +450%"
    },
    {
      name: "Александр Новиков",
      role: "Основатель спортивного магазина",
      avatar: "https://i.pinimg.com/originals/a1/e0/ef/a1e0ef437819696fdf265f7109ad553b.jpg",
      rating: 5,
      text: "Пробовал много сервисов, но UPAK - это другой уровень. Особенно впечатляет обработка изображений. Фото стали выглядеть профессионально.",
      results: "Позиции: Топ-5"
    }
  ]

  return (
    <section id="reviews" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Отзывы наших </span>
            <span className="gradient-text">клиентов</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Узнайте, как UPAK помог тысячам селлеров увеличить продажи и выйти в топ
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-900/80 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group hover:shadow-xl hover:shadow-blue-500/10 relative"
              variants={itemVariants}
            >
              <div className="absolute top-4 right-4 text-blue-400/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                "{review.text}"
              </p>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="text-center">
                  <div className="text-blue-400 font-semibold text-sm">{review.results}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-400">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15,000+</div>
              <div className="text-gray-400">созданных карточек</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2.5x</div>
              <div className="text-gray-400">рост продаж в среднем</div>
            </div>
          </div>
          <p className="text-gray-300">
            Присоединяйтесь к успешным селлерам, которые уже выбрали UPAK
          </p>
        </motion.div>
      </div>
    </section>
  )
}
