

const multer = require("multer");
const express = require('express')
const router = express.Router();
const fs = require("fs");
const imageModel = require("../models/ImageModel");
const path=require('path') ;
const {upload}=require('../midleware/imageMidleware')


router.post("/postimage", upload.single("testImage"), (req, res) => {
  // router.get("/", (req, res) => {
    // res.json({"message":" added "})
  const saveImage =  imageModel({
    name: req.body.name,
    img: {
      data: fs.readFileSync("./routes/uploads/" + req.file.originalname),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
});





router.get('/',async (req,res)=>{
  const allData = await imageModel.findOne()
  res.send(allData)
})


// // app.listen(port, () => {
// //   console.log("server running successfully");
// // });

module.exports=router ;