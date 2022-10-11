

const multer = require("multer");
const express = require('express')
const router = express.Router();
const fs = require("fs");
const imageModel = require("./models");



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});


const upload = multer({ storage: storage });

router.post("/", upload.single("testImage"), (req, res) => {
    res.json({"message":" added "})
//   const saveImage =  imageModel({
//     name: req.body.name,
//     img: {
//       data: fs.readFileSync("uploads/" + req.file.filename),
//       contentType: "image/png",
//     },
//   });
//   saveImage
//     .save()
//     .then((res) => {
//       console.log("image is saved");
//     })
//     .catch((err) => {
//       console.log(err, "error has occur");
//     });
//     res.send('image is saved')
});


// app.get('/',async (req,res)=>{
//   const allData = await imageModel.find()
//   res.json(allData)
// })

// app.listen(port, () => {
//   console.log("server running successfully");
// });

module.exports=router ;