import { db } from '@/lib/db'

export default async function handler(req, res) {
    try {
        await db.query('SELECT 1')
        res.status(200).json({ status: 'connected' })
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
}
