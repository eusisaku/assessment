'use client'
import { useState, useEffect } from 'react'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [connected, setConnected] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('/api/ping')
            .then((res) => res.json())
            .then((data) => setConnected(data.status === 'connected'))
            .catch(() => setConnected(false))
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        const data = await res.json()
        setMessage(data.success ? 'Login sukses ✔️' : data.message)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4">
                <h2 className="text-xl font-bold text-center">Login</h2>
                <p className={connected ? 'text-green-500' : 'text-red-500'}>
                    DB: {connected === null ? 'Cek...' : connected ? 'Tersambung' : 'Gagal'}
                </p>
                {message && <div className="text-blue-500">{message}</div>}
                <input className="w-full border p-2 rounded" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input className="w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Login</button>
            </form>
        </div>
    )
}
