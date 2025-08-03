
# 🎉 FE Level 2 - Login App

Aplikasi login sederhana menggunakan **ReactJS + Node.js + MySQL**, dengan:
- 🔐 Keamanan password menggunakan `bcrypt`

---

## 📁 Struktur Project

```
fe-two/
├── client/         # Frontend React (login, main page)
└── server/         # Backend Express (API login)
```

---

## ⚙️ Teknologi yang Digunakan

| Komponen       | Teknologi                   |
|----------------|------------------------------|
| Frontend       | ReactJS + TailwindCSS        |
| Routing        | React Router DOM             |
| HTTP Client    | Axios                        |
| Backend        | Node.js + Express            |
| Database       | MySQL                        |
| Enkripsi       | bcrypt (hashing password)    |
---

## 🚀 Cara Menjalankan Secara Lokal

### 1. Clone Repo
```bash
git clone https://github.com/eusisaku/assessment.git
cd fe-two
```

### 2. Setup Backend
```bash
cd server
npm install
npm run dev
```

> Server berjalan di `http://localhost:3000`

### 3. Setup Frontend
```bash
cd client
npm install
npm start
```

> Akses aplikasi di `http://localhost:3001`

---

## 🛠️ Setup Database (MySQL)

### Struktur Tabel
```sql
CREATE DATABASE db_risman;

USE db_risman;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);
```

### Tambahkan User dengan Password Ter-enkripsi (via bcrypt)
```js
// Di terminal
node server/hashPassword.js
```
admin/admin123
Copy hasil (`$2b$10$...`) ke tabel `users`:
```sql
INSERT INTO users (username, password) VALUES ('admin', '$2b$10$...yourhash...');
```
