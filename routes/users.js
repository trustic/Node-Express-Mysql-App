var express = require('express');
var userHelper = require('../helpers/user_helper');
var router = express.Router();
var constant_file = require('../CONSTANT');

/* GET users listing. */
router.get('/users', (req, res, next) => {
  userHelper.getAllUsers().then(result => {
    res.status(200).json({message:"All users", data: result, success:true});
  }).catch(err => {
    console.log(err);
  })
});


/* POST create user.*/
router.post('/user/create', (req, res, next) => {
  if (req.body.name.length > 3 && constant_file.PASSWORD_REGEX.test(req.body.password) && constant_file.EMAIL_REGEX.test(req.body.email) && req.body.username.length > 3) {
    userHelper.createUser(req.body).then(result => {
      res.status(200).json({ message: "user created", success: true });
    }).catch(err => {
      console.log(err);
    });
  } else {
    res.status(400).json({ message: "User not created", success: false })
  }
});

//GET single user 

router.get('/user', (req, res, next) => {
  if(req.cookies.username.length>0){
    userHelper.getUser(req.cookies.username).then(result => {
      if (result.length) {
        res.status(200).json({ result: result, message: "user found", success: true });
      } else {
        res.status(400).json({ message: "User Not Found", success: false });
      }
    }).catch(err => {
      res.status(400).json({ message: "User Not Found", success: false });
    });
  } else {
    res.status(401).json({message:"Not Authorized"});
  }
  
});


module.exports = router;
