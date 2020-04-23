const PASSWORD_REGEX = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const AUTH_SQL = `SELECT * FROM user WHERE username= ? AND password= ?`;
const GET_ALL_POST_SQL = `SELECT * FROM posts where username=?`;
const CREATE_POST_SQL = `INSERT INTO posts (username, content) VALUES (?,?)`;
const GET_USER_SQL = `SELECT * FROM user WHERE username= ?`;
const GET_ALL_USER_SQL = `SELECT * FROM user`;
const CREATE_USER_SQL = `INSERT INTO user (username,name,password,email) VALUES (?,?,?,?)`;

module.exports = {
    PASSWORD_REGEX:PASSWORD_REGEX,
    EMAIL_REGEX:EMAIL_REGEX,
    AUTH_SQL:AUTH_SQL,
    GET_ALL_POST_SQL:GET_ALL_POST_SQL,
    CREATE_POST_SQL:CREATE_POST_SQL,
    GET_USER_SQL:GET_USER_SQL,
    GET_ALL_USER_SQL:GET_ALL_USER_SQL,
    CREATE_USER_SQL:CREATE_USER_SQL
}