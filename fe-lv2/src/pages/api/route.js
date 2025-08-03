// src/app/api/login/route.js
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

export async function POST(req) {
    const form = await req.formData();
    const username = form.get("username");
    const password = form.get("password");

    const connection = await mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "db_risman",
    });

    const [rows] = await connection.execute(
        "SELECT * FROM users WHERE username = ? LIMIT 1",
        [username]
    );

    if (rows.length === 0) {
        return Response.json({ success: false, message: "User not found" }, { status: 401 });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return Response.json({ success: false, message: "Wrong password" }, { status: 401 });
    }

    return Response.json({ success: true, message: "Login successful" });
}
