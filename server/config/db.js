const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:8889,
    database:'health-care'
});


module.exports = db;