import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const base = process.env.NEXT_PUBLIC_API_BASE || ''

  async function handleSignup() {
    try {
      await axios.post(`${base}auth/signup`, { email, password, name: email.split('@')[0] })
      setMessage('Регистрация успешна, теперь войдите')
    } catch (e: any) {
      setMessage(e?.response?.data?.detail || 'Ошибка регистрации')
    }
  }

  async function handleLogin() {
    try {
      const r = await axios.post(`${base}auth/login`, { email, password })
      localStorage.setItem('token', r.data.access_token)
      setMessage('Вход выполнен')
    } catch (e: any) {
      setMessage(e?.response?.data?.detail || 'Ошибка входа')
    }
  }

  return (
    <main style={{maxWidth:480,margin:'40px auto',fontFamily:'sans-serif'}}>
      <h1>Вход</h1>
      <label>Email<br/><input value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%'}}/></label><br/>
      <label>Пароль<br/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%'}}/></label><br/>
      <button onClick={handleLogin}>Войти</button>
      <button onClick={handleSignup} style={{marginLeft:8}}>Зарегистрироваться</button>
      <p>{message}</p>
    </main>
  )
}
