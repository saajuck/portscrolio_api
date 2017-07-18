var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')

console.log('env :')
console.log(process.env.basePath)

var base_path = process.env.basePath
var screens_path = process.env.screensPath

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
      getDirectories(screens_path)
    );
  }), 2000);
  
});

module.exports = router;
