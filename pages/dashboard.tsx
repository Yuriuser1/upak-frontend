import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [me, setMe] = useState<any>(null)
  const [error, setError] = useState('')
  const base = process.env.NEXT_PUBLIC_API_BASE || ''

  useEffect(() => {
    const t = localStorage.getItem('token')
    if (!t) { setError('Необходим вход'); return }
    axios.get(`${base}me`, { headers: { Authorization: `Bearer ${t}` }})
      .then(r => setMe(r.data))
      .catch(e => setError(e?.response?.data?.detail || 'Ошибка'))
  }, [])

  return (
    <main style={{maxWidth:800,margin:'40px auto',fontFamily:'sans-serif'}}>
      <h1>Личный кабинет</h1>
      {error && <p style={{color:'red'}}>{error}</p>}
      {me && (
        <div>
          <p><b>Email:</b> {me.email}</p>
          <p><b>Имя:</b> {me.name}</p>
        </div>
      )}
    </main>
  )
}
