

"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Send, MessageCircle, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в ближайшее время."
      })
      
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами через Telegram.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contacts = [
    {
      icon: MessageCircle,
      title: "Telegram",
      description: "Быстрая связь и поддержка",
      value: "@upak_support",
      action: "Написать"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Для деловых вопросов",
      value: "info@upak.space",
      action: "Отправить"
    },
    {
      icon: Phone,
      title: "Телефон",
      description: "Звонок по России",
      value: "+7 (800) 123-45-67",
      action: "Позвонить"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Свяжитесь с </span>
            <span className="gradient-text">нами</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готовы начать? Обсудим ваши задачи и найдем оптимальное решение для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Отправить сообщение</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Имя *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Тема
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  placeholder="Тема сообщения"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Сообщение *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  placeholder="Расскажите о ваших задачах..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 text-lg font-semibold transition-all duration-200"
              >
                {isSubmitting ? (
                  "Отправляем..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Отправить сообщение
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{contact.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-400 font-medium">{contact.value}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-400 hover:text-blue-300 hover:bg-blue-600/10 p-1 h-auto"
                          onClick={() => {
                            if (contact.title === 'Telegram') {
                              window.open('https://t.me/upak_support', '_blank')
                            } else if (contact.title === 'Email') {
                              window.location.href = `mailto:${contact.value}`
                            } else if (contact.title === 'Телефон') {
                              window.location.href = `tel:${contact.value.replace(/\D/g, '')}`
                            }
                          }}
                        >
                          {contact.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/20">
              <h4 className="text-xl font-bold text-white mb-4">Время работы</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье</span>
                  <span>Выходной</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-500/20">
                <p className="text-blue-400 font-medium">
                  Поддержка в Telegram работает 24/7
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
