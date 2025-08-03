import { db } from '../src/lib/db.js'
import { hashPassword } from '../src/lib/hash.js'

const username = 'admin'
const password = 'admin123'

const hashed = await hashPassword(password)
await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashed])
console.log('✅ User admin berhasil dibuat dengan password ter-hash')
process.exit()
