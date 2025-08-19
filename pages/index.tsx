import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface PricePlan { code: string; name: string; price_month: number; features: string[] }

export default function Home() {
  const [plans, setPlans] = useState<PricePlan[]>([])
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE || ''}api/v1/pricing`).then(r => setPlans(r.data)).catch(() => {})
  }, [])
  return (
    <main style={{maxWidth:800,margin:'40px auto',fontFamily:'sans-serif'}}>
      <h1>UPAK — тарифы</h1>
      <p><Link href="/login">Войти</Link> · <Link href="/dashboard">Личный кабинет</Link></p>
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
