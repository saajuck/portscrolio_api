var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')
const env = require('../env')
const paths = require('../paths')

console.log(`env : ${env}`)
const { screensPath } = paths

function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(
      file => {
        if(!file.startsWith('.')){
          cur =  fs.lstatSync(path.join(srcpath, file)).isDirectory();
          return cur;
        }
      }
    )
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  setTimeout((function() {
    res.json(
      getDirectories(screensPath)
    );
  }), 2000);

});

module.exports = router;
