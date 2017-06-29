var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')


var base_path = process.cwd()
var screens_path = base_path+'/../screens/'

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
  res.json( 
    getDirectories(screens_path)
  );
});

module.exports = router;
