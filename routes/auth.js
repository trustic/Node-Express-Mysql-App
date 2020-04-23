var express = require('express');
var authHelper = require('../helpers/auth_helper');
var router = express.Router();

router.post('/auth', (req, res, next) => {
    authHelper.authenicateUser(req.body)
        .then(result => {
            if (result.length === 0) {
                res.send("Invalid Username or password");
            } else {
                var usernameCookie = req.cookies.username;
                if (usernameCookie) {
                    res.status(200).json({result:"CookieExists"});
                } else {
                    let randomNumber = (Math.random() * 10000).toString().substring(0, 4);
                    let newAuthtoken = `${result[0].username}#${randomNumber}`;
                    res.cookie('username', result[0].username);
                    res.cookie('auth_token', newAuthtoken, { maxAge: 90000000000, httpOnly: true });
                    res.status(200).json({ result:result[0],success:true});
                }

            }
        }).catch(err => {
            console.log(err);
        });
});

module.exports = router;