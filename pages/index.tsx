import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface PricePlan { code: string; name: string; price_month: number; features: string[] }

export default function Home() {
  const [plans, setPlans] = useState<PricePlan[]>([])
  const [error, setError] = useState<string>("")
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE || ''}api/v1/pricing`
    axios.get(url, { timeout: 4000 })
      .then(r => {
        const data = r.data
        if (Array.isArray(data)) {
          setPlans(data as PricePlan[])
        } else {
          setPlans([])
          setError('API недоступно (прокси не настроен). Временный режим: без тарифов')
        }
      })
      .catch(() => {
        setPlans([])
        setError('API недоступно. Проверьте проксирование /api → backend')
      })
  }, [])
  return (
    <main style={{maxWidth:800,margin:'40px auto',fontFamily:'sans-serif'}}>
      <h1>UPAK — тарифы</h1>
      <p><Link href="/login">Войти</Link> · <Link href="/dashboard">Личный кабинет</Link></p>
      {error && <p style={{color:'tomato'}}>{error}</p>}
      <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
        {plans.map(p => (
          <div key={p.code} style={{border:'1px solid #ddd',borderRadius:8,padding:16}}>
            <h3>{p.name}</h3>
            <p><b>{p.price_month}</b> ₽/мес</p>
            <ul>
              {p.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
