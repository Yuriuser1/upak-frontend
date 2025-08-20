
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'
import Hero from '../../app/components/hero'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>
  }
}))

describe('Hero Component', () => {
  it('renders main heading', () => {
    render(<Hero />)
    
    expect(screen.getByText('Продающие карточки для')).toBeInTheDocument()
    expect(screen.getByText('маркетплейсов с помощью AI')).toBeInTheDocument()
  })
  
  it('renders main description', () => {
    render(<Hero />)
    
    expect(screen.getByText('Один клик и твоя карточка готова!')).toBeInTheDocument()
    expect(screen.getByText(/Создавайте профессиональные карточки товаров/)).toBeInTheDocument()
  })
  
  it('renders action buttons', () => {
    render(<Hero />)
    
    expect(screen.getByText('Создать карточку')).toBeInTheDocument()
    expect(screen.getByText('Начать в Telegram')).toBeInTheDocument()
  })
  
  it('renders key metrics', () => {
    render(<Hero />)
    
    expect(screen.getByText('5 мин')).toBeInTheDocument()
    expect(screen.getByText('время создания')).toBeInTheDocument()
    expect(screen.getByText('1,490₽')).toBeInTheDocument()
    expect(screen.getByText('от стоимости')).toBeInTheDocument()
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('поддержка')).toBeInTheDocument()
  })
})
