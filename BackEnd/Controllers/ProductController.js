const ProductModel=require('../models/ProductModel')
const multer = require("multer");
const express = require('express')
const router = express.Router();
const fs = require("fs");
const ImageModel = require("../models/ImageModel");
const path=require('path') ;
const { upload } =require('../midleware/imageMidleware') ;
//adding an image 




// const asyncHandler=require('express-async-handler') ;

const addProduct=async(req,res)=>{
    const saveImage =  ImageModel({
        name: req.body.name,
        img: {
          data: fs.readFileSync("./routes/uploads/" + req.file.originalname),
          contentType: "image/png",
        },
      });
      const data=await saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });

      console.log(data) ;

       res.send('image is saved')
  

    const newProduct=new ProductModel({})
}


//get the actuell user

module.exports={
    addProduct
    
}
