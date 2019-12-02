const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const article = require('../models/article');
const db = "mongodb+srv://spaxxkey:91408916B.c@cluster0-jss1i.mongodb.net/test?retryWrites=true"

mongoose.Promise = global.Promise;
mongoose.connect(db , function (err) {
  if (err) {
    console.log('Error connecting');
  }
});

router.get('/all', function (req, res) {
  article.find({})
    .exec(function (err, aricles) {
      if (err) {
        console.log('Error getting the articles');
      } else {
        console.log(aricles);
        res.json(articles);
      }
    });
});

module.exports = router;
