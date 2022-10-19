const express=require('express')
const router=express.Router() ;
const ProductController=require('../Controllers/ProductControllers')
router.post('/upload',ProductController.uploadImage), 
router.get('/images',ProductController.getImages) ;
router.post('/PostProduct',ProductController.uploadProduct)
router.get('/getProducts',ProductController.getProduct) ;
module.exports=router ;
