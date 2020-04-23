const conn = require('./db_initialize');
const constantFile = require('../CONSTANT'); 

getAllPosts = (username) => {
    return new Promise((resolve, reject) => {
        sql = constantFile.GET_ALL_POST_SQL;
        conn.query(sql,[username], (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

createPost = (post) => {
    return new Promise((resolve, reject) => {
        sql = constantFile.CREATE_POST_SQL;
        conn.query(sql, [post.username, post.content], (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve("user created");
            }
        });
    });
}



module.exports = {
    getAllPosts: getAllPosts,
    createPost: createPost
}