const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inmobiliaria2'
});

db.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log('MYSQL OK');
    }
});

module.exports = db;