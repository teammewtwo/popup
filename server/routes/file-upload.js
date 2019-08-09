
const express = require("express");
const router = express.Router();

const upload = require('../services/file-upload');

//sending image on request to server
const singleUpload = upload.single('image');

router.post('/', function(req, res) {
   console.log('in route')
//   upload.single('image');
//  // console.log(req)
//   return res.json({'imageUrl': req.file.location});
  singleUpload(req, res, function(err) {
    console.log("in singleUPload")
    if (err) {
      return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }
    console.log("inside post request")
    return res.json({'imageUrl': req.file.location});
  });
});

module.exports = router;