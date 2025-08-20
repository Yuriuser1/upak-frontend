import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  const plans = [
    {
      name: 'Базовый',
      price: '299₽',
      period: '/месяц',
      features: [
        'Доступ к базовым функциям UPAK',
        '5 запросов в день к AI',
        'Базовая поддержка',
        'Экспорт данных в CSV'
      ],
      popular: false
    },
    {
      name: 'Стандарт',
      price: '799₽',
      period: '/месяц',
      features: [
        'Все функции Базового плана',
        '50 запросов в день к AI',
        'Приоритетная поддержка',
        'Экспорт в Excel и PDF',
        'Интеграция с Telegram',
        'API доступ'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '1999₽',
      period: '/месяц',
      features: [
        'Все функции Стандартного плана',
        'Неограниченные запросы к AI',
        'Персональный менеджер',
        'Кастомные интеграции',
        'Белый лейбл',
        'Приоритетная разработка'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>UPAK - Умная Платформа Автоматизации и Контроля</title>
        <meta name="description" content="UPAK - инновационная платформа для автоматизации бизнес-процессов с интеграцией AI и Telegram" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1.6 }}>
        {/* Header */}
        <header style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '2rem 0',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>
              UPAK
            </h1>
            <p style={{ fontSize: '1.5rem', margin: '0 0 2rem 0', opacity: 0.9 }}>
              Умная Платформа Автоматизации и Контроля
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/login" style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}>
                Войти
              </a>
              <a href="/dashboard" style={{
                background: 'white',
                color: '#667eea',
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}>
                Личный кабинет
              </a>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '0 0 3rem 0', color: '#1a202c' }}>
              Возможности платформы
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#667eea', margin: '0 0 1rem 0' }}>🤖 AI Интеграция</h3>
                <p>Интеграция с Yandex GPT для автоматической генерации контента и анализа данных</p>
              </div>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#667eea', margin: '0 0 1rem 0' }}>📱 Telegram Bot</h3>
                <p>Удобное управление через Telegram с уведомлениями и быстрыми командами</p>
              </div>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#667eea', margin: '0 0 1rem 0' }}>🔒 Безопасность</h3>
                <p>HMAC-SHA256 подписи, JWT токены и защищенные API endpoints</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section style={{ padding: '4rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '0 0 3rem 0', color: '#1a202c' }}>
              Тарифные планы
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'start'
            }}>
              {plans.map((plan, index) => (
                <div key={index} style={{
                  background: plan.popular ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                  color: plan.popular ? 'white' : '#1a202c',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: plan.popular ? '0 8px 25px rgba(102, 126, 234, 0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
                  border: plan.popular ? 'none' : '2px solid #e2e8f0',
                  position: 'relative',
                  transform: plan.popular ? 'scale(1.05)' : 'none'
                }}>
                  {plan.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#fbbf24',
                      color: '#1a202c',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      Популярный
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', textAlign: 'center' }}>
                    {plan.name}
                  </h3>
                  <div style={{ textAlign: 'center', margin: '0 0 2rem 0' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>{plan.price}</span>
                    <span style={{ fontSize: '1rem', opacity: 0.8 }}>{plan.period}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        padding: '0.5rem 0',
                        borderBottom: featureIndex < plan.features.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ marginRight: '0.5rem', color: '#10b981' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href="/login" style={{
                      background: plan.popular ? 'white' : '#667eea',
                      color: plan.popular ? '#667eea' : 'white',
                      padding: '0.75rem 2rem',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-block',
                      transition: 'all 0.3s ease'
                    }}>
                      Выбрать план
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ 
          background: '#1a202c',
          color: 'white',
          padding: '2rem 0',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <p style={{ margin: '0 0 1rem 0' }}>
              © 2025 UPAK - Умная Платформа Автоматизации и Контроля
            </p>
            <p style={{ margin: 0, opacity: 0.7, fontSize: '0.875rem' }}>
              Версия 1.1.0 | MVP Live
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IndexPage;
