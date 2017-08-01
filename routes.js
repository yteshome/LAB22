var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Quotes by famous people');
});

router.get('/mlk', function(req, res) {
  res.send('Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that!');
});

router.get('/mandella', function(req, res) {
  res.send(' Education is the most powerful weapon which you can use to change the world.');
});

router.get('/armstrong', function(req, res) {
  res.send('"That is one small step for man, one giant leap for mankind!');
});

router.get('/gandhi', function(req, res) {
  res.send('You must be the change you wish to see in the world!');
});

module.exports = router;
