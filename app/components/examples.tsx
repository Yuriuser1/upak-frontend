
"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink, Star } from 'lucide-react'

export default function Examples() {
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

  const examples = [
    {
      title: "Умные часы Apple Watch Series 9",
      category: "Электроника",
      price: "45,990₽",
      rating: 4.8,
      reviews: 1247,
      image: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-graphite-stainless-steel-FineWoven-Magenetic-Link-green-230912_inline.jpg.large_2x.jpg",
      features: ["Датчик кислорода", "GPS + Cellular", "Защита от воды", "45mm корпус"],
      results: {
        views: "+340%",
        conversion: "+85%",
        position: "Топ-5"
      }
    },
    {
      title: "Кроссовки Nike Air Max 270",
      category: "Спорт и отдых",
      price: "12,990₽",
      rating: 4.7,
      reviews: 892,
      image: "https://d2ob0iztsaxy5v.cloudfront.net/product/340919/3409193160m7_zm.jpg",
      features: ["Технология Air Max", "Дышащий материал", "Легкая подошва", "Размеры 36-46"],
      results: {
        views: "+280%",
        conversion: "+95%",
        position: "Топ-3"
      }
    },
    {
      title: "Смартфон Samsung Galaxy S24",
      category: "Мобильные телефоны",
      price: "89,990₽",
      rating: 4.9,
      reviews: 2156,
      image: "https://media.croma.com/image/upload/v1705634974/Croma%20Assets/Communication/Mobiles/Images/303840_rlonbq.png",
      features: ["AI-камера 200MP", "120Hz дисплей", "5000mAh батарея", "256GB память"],
      results: {
        views: "+420%",
        conversion: "+120%",
        position: "Топ-1"
      }
    },
    {
      title: "Кофемашина Delonghi Dinamica",
      category: "Бытовая техника",
      price: "52,990₽",
      rating: 4.6,
      reviews: 634,
      image: "https://cdn.www.kitchenshop.eu/images/thumbs/0187273_espressor-automat-1450w-dinamica-plus-titanium-black-delonghi.jpeg",
      features: ["Автоматический капучинатор", "15 бар", "Керамические жернова", "Цветной дисплей"],
      results: {
        views: "+250%",
        conversion: "+75%",
        position: "Топ-7"
      }
    },
    {
      title: "Планшет iPad Pro 12.9",
      category: "Планшеты",
      price: "129,990₽",
      rating: 4.8,
      reviews: 1089,
      image: "https://netpc.uy/wp-content/uploads/2021/12/2-127.png",
      features: ["M2 чип", "Liquid Retina XDR", "5G поддержка", "1TB хранилище"],
      results: {
        views: "+380%",
        conversion: "+110%",
        position: "Топ-2"
      }
    },
    {
      title: "Беспроводные наушники AirPods Pro",
      category: "Аудио",
      price: "24,990₽",
      rating: 4.7,
      reviews: 1876,
      image: "https://i.pinimg.com/736x/9b/35/3c/9b353c84f8f55ab6dd5d9d6fe4437a8c.jpg",
      features: ["Активное шумоподавление", "Spatial Audio", "MagSafe зарядка", "30 часов работы"],
      results: {
        views: "+290%",
        conversion: "+90%",
        position: "Топ-4"
      }
    }
  ]

  return (
    <section id="examples" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Примеры наших </span>
            <span className="gradient-text">работ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Посмотрите на результаты наших клиентов и убедитесь в эффективности наших карточек
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {examples.map((example, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group hover:shadow-xl hover:shadow-blue-500/10"
              variants={itemVariants}
            >
              <div className="relative aspect-square bg-gray-700">
                <Image
                  src={example.image}
                  alt={example.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                  {example.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 text-sm">{example.rating}</span>
                    <span className="text-gray-500 text-sm">({example.reviews})</span>
                  </div>
                  <span className="text-blue-400 font-semibold">{example.price}</span>
                </div>
                
                <h3 className="font-semibold text-white mb-3 line-clamp-2">{example.title}</h3>
                
                <ul className="space-y-1 mb-4">
                  {example.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-green-400 font-semibold text-sm">{example.results.views}</div>
                      <div className="text-gray-500 text-xs">просмотры</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-semibold text-sm">{example.results.conversion}</div>
                      <div className="text-gray-500 text-xs">конверсия</div>
                    </div>
                    <div>
                      <div className="text-purple-400 font-semibold text-sm">{example.results.position}</div>
                      <div className="text-gray-500 text-xs">позиция</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-300 mb-6">
            Готовы получить такие же результаты для своих товаров?
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
            <ExternalLink className="w-5 h-5 mr-2" />
            Создать карточку
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
