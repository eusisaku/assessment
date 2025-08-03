// 'use client'
// import { useState, useEffect } from 'react'

// export default function LoginPage() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [connected, setConnected] = useState(null)
//     const [message, setMessage] = useState('')

//     useEffect(() => {
//         fetch('/api/ping')
//             .then((res) => res.json())
//             .then((data) => setConnected(data.status === 'connected'))
//             .catch(() => setConnected(false))
//     }, [])

//     const handleLogin = async (e) => {
//         e.preventDefault()
//         const res = await fetch('/api/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password }),
//         })
//         const data = await res.json()
//         setMessage(data.success ? 'Login sukses ✔️' : data.message)
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50">
//             <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4">
//                 <h2 className="text-xl font-bold text-center">Login</h2>
//                 <p className={connected ? 'text-green-500' : 'text-red-500'}>
//                     DB: {connected === null ? 'Cek...' : connected ? 'Tersambung' : 'Gagal'}
//                 </p>
//                 {message && <div className="text-blue-500">{message}</div>}
//                 <input className="w-full border p-2 rounded" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
//                 <input className="w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
//                 <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Login</button>
//             </form>
//         </div>
//     )
// }

// src/app/login/page.js
"use client";

export default function LoginPage() {
    return (
        <div className="bg-sky-100 flex justify-center items-center h-screen">
            {/* Left: Image */}
            <div className="w-1/2 h-screen hidden lg:block">
                <img
                    src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
                    alt="Placeholder Image"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right: Login Form */}
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>

                <form method="POST" action="/api/login">
                    {/* Username Input */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            className="text-red-500"
                        />
                        <label htmlFor="remember" className="text-green-900 ml-2">
                            Remember Me
                        </label>
                    </div>

                    {/* Forgot Password */}
                    <div className="mb-6 text-blue-500">
                        <a href="#" className="hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        Login
                    </button>
                </form>

                
                {/* <div className="mt-6 text-green-500 text-center">
                    <a href="#" className="hover:underline">
                        Sign up Here
                    </a>
                </div> */}
            </div>
        </div>
    );
}

