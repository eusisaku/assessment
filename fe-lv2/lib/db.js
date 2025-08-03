import mysql from 'mysql2/promise'

export const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Tm4ju4r4#2023',
    database: 'db_risman',
})
