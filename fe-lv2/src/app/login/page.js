'use client'
import { useState } from 'react'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })

        const data = await res.json()
        if (data.success) {
            setSuccess(true)
        } else {
            setError(data.message || 'Login gagal')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4">
                <h2 className="text-2xl font-bold">Login</h2>

                {error && <div className="text-red-500">{error}</div>}
                {success && <div className="text-green-500">Login berhasil 🎉</div>}

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    )
}
