var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')


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
router.get('/:name', function(req, res, next) {
    var data = {};
    fs.readdir(screens_path+'/'+req.params.name, (err, files) => {
        console.log(err)
        files.forEach((file, index) => {
            if(file){
                data[index] = file;
            }
        });
        res.json( 
            data
        );
    })
   
});

/* GET users listing. */
router.get('/:name/:screen', function(req, res, next) {
    console.log(req.params)
    data = `${screens_path}/${req.params.name}/${req.params.screen}`
    res.json( 
        data
    );
});

module.exports = router;
