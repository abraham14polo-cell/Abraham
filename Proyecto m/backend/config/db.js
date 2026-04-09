const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inmobiliaria'
});

db.connect(err => {
    if (err) {
        console.error("❌ Error BD:", err);
        return;
    }
    console.log("✅ BD conectada");
});

module.exports = db;