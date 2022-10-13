const multer = require("multer");
const express = require('express')
const router = express.Router();
const fs = require("fs");
const imageModel = require("../models/ImageModel");
const path=require('path') ;
// const ImageController=require('../Controllers/ImageController')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./routes/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});


const upload = multer({ storage: storage });

module.exports={upload}