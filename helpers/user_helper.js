const conn = require('./db_initialize');
const constantFile = require('../CONSTANT'); 

getUser = (username) => {
    return new Promise((resolve, reject) => {
        sql = constantFile.GET_USER_SQL;
        conn.query(sql, [username], (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
getAllUsers = () => {
    return new Promise((resolve, reject) => {
        sql = constantFile.GET_ALL_USER_SQL;
        conn.query(sql, (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

createUser = (user) => {
    return new Promise((resolve, reject) => {
        sql = constantFile.CREATE_USER_SQL;
        conn.query(sql, [user.username, user.name, user.password, user.email], (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve("user created");
            }
        });
    });
}



module.exports = {
    getAllUsers: getAllUsers,
    getUser: getUser,
    createUser: createUser
}