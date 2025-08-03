const bcrypt = require('bcrypt');

const password = 'admin123'; // ganti sesuai kebutuhan

bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log('Hashed password:', hash);
});
