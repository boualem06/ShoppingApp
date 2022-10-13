const ProductModel = require('../models/ProductModel')
const multer = require("multer");
const express = require('express')
const router = express.Router();
const fs = require("fs");
const ImageModel = require("../models/ImageModel");
const path = require('path');
const { upload } = require('../midleware/imageMidleware');
//adding an image 




// const asyncHandler=require('express-async-handler') ;

const addProduct = async (req, res) => {
    const saveImage = ImageModel({
        name: req.body.name,
        img: {
            data: fs.readFileSync("./routes/uploads/" + req.file.originalname),
            contentType: "image/png",
        },
    });
    //save the image first then save the product with the id of the image
    saveImage
        .save()
        .then((ress) => {
            const saveProduct = ProductModel({
                name: "Product one",
                price: "20",
                discription: "this is the discription of product one",
                ImageId: ress.id
            })
            saveProduct.save().then((ress) => {
                //the product is saved
                res.send(ress);
            })
        })
        .catch((err) => {
            console.log(err, "error has occur");
        });
}


//get all the products
const getProducts=async(req,res)=>{
     ProductModel.find().then((ress)=>{
        res.send(ress) ;
     })
    
}

//get the actuell user

module.exports = {
    addProduct,
    getProducts

}
