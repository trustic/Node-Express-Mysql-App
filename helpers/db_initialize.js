var mysql = require('mysql');


var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'nodejs'
});

conn.connect(function (err) {
    if (err) throw err;
});


module.exports = conn;
