import { db } from '@/lib/db'
import { verifyPassword } from '@/lib/hash'

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end()

    const { username, password } = req.body
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])

    if (!rows.length) return res.status(401).json({ success: false, message: 'User not found' })

    const valid = await verifyPassword(password, rows[0].password)
    if (!valid) return res.status(401).json({ success: false, message: 'Wrong password' })

    res.setHeader('Set-Cookie', `user=${rows[0].username}; Path=/; HttpOnly`)
    res.status(200).json({ success: true })
}
