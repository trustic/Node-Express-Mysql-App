const conn = require('./db_initialize');
const constantFile = require('../CONSTANT'); 
authenicateUser = (user) => {
    return new Promise((resolve, reject) => {
        sql = constantFile.AUTH_SQL;
        conn.query(sql, [user.username,user.password], (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports ={
    authenicateUser:authenicateUser
}

