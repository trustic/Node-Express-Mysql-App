var express = require('express');
var postHelper = require('../helpers/post_helper');
var router = express.Router();

/* GET users listing. */
router.get('/posts', (req, res, next) => {
  if (req.cookies.username) {
    postHelper.getAllPosts(req.cookies.username).then(result => {
      res.status(200).json({message:"All posts",success:true, result:result});
    }).catch(err => {
      res.status(500).json({ message: "internal server error", success: false });
    });
  } else {
    res.status(401).json({ message: "UNAUTHORIZED ACCESS", success: false });
  }

});

/* POST create post. */
router.post('/posts/new', (req, res, next) => {
  if (req.body.content.length > 0 && req.body.username === req.cookies.username) {
    postHelper.createPost(req.body).then(result => {
      res.status(200).json({ message: "post-created", success: true });
    }).catch(err => {
      res.status(500).json({ message: "internal server error", success: false });
    });
  } else {
    if (req.body.content.length < 0) {
      res.status(400).json({ message: "content not present", success: false });
    } else {
      res.status(401).json({ message: "UNAUTHORIZED ACCESS", success: false });
    }
  }

});





module.exports = router;