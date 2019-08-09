const aws = require('aws-sdk')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')
const app = express()

aws.config.update({
  
})
const s3 = new aws.S3({region:'us-west-1'})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
  } else {
      cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
  }
}


const upload = multer({
  fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: 'iterationprojectpopup2',
    acl: 'public-read',
   // acl: 'public-read',
    metadata: function (req, file, cb) {
      //console.log(file);
      cb(null, {fieldName: 'kitty'});
    },
    key: function (req, file, cb) {
        //timestamp of current time
        console.log("in key")
        console.log(file);
      cb(null, Date.now().toString())
    }
  })
})
 
module.exports = upload;