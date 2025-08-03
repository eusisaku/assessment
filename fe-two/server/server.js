const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_risman'
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM users WHERE username = ?";

    db.query(sql, [username], (err, result) => {
        if (err) return res.status(500).send('Server error');
        if (result.length === 0) return res.status(401).send('User not found');

        const hashedPassword = result[0].password;

        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) return res.status(500).send('Error comparing');
            if (isMatch) return res.status(200).send('Login success');
            else return res.status(401).send('Wrong password');
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
