const express = require('express')
const router = express.Router();

const Product=require('../models/ProductModel')
const ImageModel=require('../models/ImageModel')
const ProdutController=require('../Controllers/ProductController')
const {upload}=require('../midleware/imageMidleware')
router.post("/AddProduct",upload.single("testImage"),ProdutController.addProduct) ;
router.get('/getProducts',ProdutController.getProducts)
    

    // const newImage= new ImageModel()
    // const newProduct=new Product({
        
    // })


module.exports=router ;

