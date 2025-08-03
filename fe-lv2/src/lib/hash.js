import bcrypt from 'bcrypt'

export async function hashPassword(plainPassword) {
    return await bcrypt.hash(plainPassword, 10)
}

export async function verifyPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword)
}
