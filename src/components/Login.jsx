import React, { useState } from 'react'
import { login } from '../api'
import { ADMIN_EMAIL, ADMIN_PASSWORD } from '../config'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [err, setErr] = useState(null)

  const submit = async () => {
    // bypass pour tester vite fait
    if (email == ADMIN_EMAIL && pwd == ADMIN_PASSWORD) {
      props.onLogin({ name: 'admin', role: 'admin' })
      return
    }
    try {
      const u = await login(email, pwd)
      props.onLogin(u)
    } catch (e) {
      setErr(e.response.data.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" onChange={(e) => setPwd(e.target.value)} />
      <button className="btn" onClick={submit}>Go</button>
      {err && <div className="error" dangerouslySetInnerHTML={{ __html: err }} />}
    </div>
  )
}
