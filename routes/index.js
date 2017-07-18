var express = require('express');
var router = express.Router();

var base_path = process.cwd()
console.log(base_path);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.render('index', { title: 'Express' });
});

module.exports = router;