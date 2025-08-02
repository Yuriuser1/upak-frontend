"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

/*
 * Эта страница реализует форму создания карточки товара.
 * Пользователь вводит основные данные о товаре и загружает изображение.
 * После отправки данные отправляются на бэкенд UPAK и возвращается ссылка на оплату.
 */

export default function CreateCardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    imageFile: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentLink, setPaymentLink] = useState<string | null>(null)

  /**
   * Чтение файла изображения и конвертация в base64.
   * Возвращает промис со строкой base64 (без префикса data URI).
   */
  async function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        // Вырезаем префикс 'data:image/*;base64,' если он есть
        const base64 = result.split(',')[1] || result
        resolve(base64)
      }
      reader.onerror = (err) => reject(err)
      reader.readAsDataURL(file)
    })
  }

  /**
   * Обработчик отправки формы. Создаёт заказ через API UPAK,
   * затем вызывает создание оплаты и отображает ссылку.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!formData.imageFile) {
        toast({
          title: 'Требуется изображение',
          description: 'Пожалуйста, загрузите изображение товара',
          variant: 'destructive',
        })
        setIsSubmitting(false)
        return
      }

      // Конвертируем изображение в base64
      const imageBase64 = await fileToBase64(formData.imageFile)

      // Подготовка данных заказа
      const payload = {
        title: formData.title,
        price: formData.price,
        description: formData.description,
        image_data: imageBase64,
      }

      const API_BASE_URL = 'https://api.upak.space'

      // Создание заказа
      const orderRes = await fetch(`${API_BASE_URL}/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!orderRes.ok) {
        throw new Error('Ошибка создания заказа')
      }
      const orderData = await orderRes.json()
      const { payment_id } = orderData
      if (!payment_id) {
        throw new Error('Не удалось получить идентификатор платежа')
      }

      // Создание оплаты и получение ссылки
      const paymentRes = await fetch(`${API_BASE_URL}/create_payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payment_id }),
      })
      if (!paymentRes.ok) {
        throw new Error('Ошибка создания оплаты')
      }
      const paymentData = await paymentRes.json()
      const { payment_url } = paymentData
      if (!payment_url) {
        throw new Error('Не удалось получить ссылку на оплату')
      }
      setPaymentLink(payment_url)
      toast({
        title: 'Заказ создан',
        description: 'Ссылка для оплаты сгенерирована',
      })
    } catch (error: any) {
      console.error(error)
      toast({
        title: 'Ошибка',
        description: error?.message || 'Произошла ошибка',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, imageFile: file }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Создать карточку товара</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div>
            <label className="block text-sm font-medium mb-2">Название товара</label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Введите название"
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Цена</label>
            <Input
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Введите цену"
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Описание</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Краткое описание товара"
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Изображение</label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="bg-gray-700 border-gray-600 text-white file:bg-blue-600 file:text-white file:py-2 file:px-4 file:rounded-md"
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 py-3 text-lg font-semibold">
            {isSubmitting ? 'Отправка...' : 'Создать карточку и оплатить'}
          </Button>
        </form>
        {paymentLink && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ссылка на оплату</h2>
            <p className="mb-4">Скопируйте ссылку ниже или откройте ё в новой вкладке для оплаты:</p>
            <a
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline break-words"
            >
              {paymentLink}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
