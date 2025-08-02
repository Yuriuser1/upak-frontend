
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'UPAK - Продающие карточки для маркетплейсов с помощью AI',
  description: 'Создавайте профессиональные карточки товаров для Wildberries, Ozon и других маркетплейсов за минуты. AI-генерация контента, обработка изображений, готовые файлы для загрузки.',
  keywords: 'карточки товаров, маркетплейсы, Wildberries, Ozon, AI генерация, продажи',
  openGraph: {
    title: 'UPAK - Продающие карточки для маркетплейсов',
    description: 'Один клик и твоя карточка готова!',
    url: 'https://upak.space',
    siteName: 'UPAK',
    images: [{
      url: '/android-chrome-512x512.png',
      width: 512,
      height: 512,
      alt: 'UPAK Logo'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPAK - Продающие карточки для маркетплейсов',
    description: 'Один клик и твоя карточка готова!',
    images: ['/android-chrome-512x512.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
