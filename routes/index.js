var express = require('express');
var router = express.Router();
var path = require('path');
var userHelper = require('../helpers/user_helper');
/* GET home page. */
router.get('/', function (req, res, next) {

  res.status(200).json({ text: 'hi this is the body' })
});
router.get('/login', function (req, res) {
  res.sendFile('login.html', {
    root: path.join(__dirname, '../', 'public')
  });
});
router.get('/register', function (req, res) {
  res.sendFile('register.html', {
    root: path.join(__dirname, '../', 'public')
  });
});

router.get('/:username', (req, res) => {
  if(req.cookies.username == req.params.username){
    res.sendFile('profile.html', {
      root: path.join(__dirname, '../', 'public')
    });
  } else {
    res.redirect(`/`);
  }
})
module.exports = router;
