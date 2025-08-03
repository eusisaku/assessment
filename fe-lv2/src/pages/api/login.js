import { db } from '@/lib/db'

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' })

    const { username, password } = req.body

    try {
        const [rows] = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password])

        if (rows.length > 0) {
            return res.status(200).json({ success: true, user: rows[0] })
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials' })
        }
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message })
    }
}
