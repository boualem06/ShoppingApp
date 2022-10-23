const express=require('express')
const router=express.Router() ;
const ProductController=require('../Controllers/ProductControllers')
router.post('/upload',ProductController.uploadImage), 
router.get('/images',ProductController.getImages) ;
router.post('/PostProduct',ProductController.uploadProduct)
router.get('/getProducts',ProductController.getProduct) ;
router.delete('/deleteProduct',ProductController.deleteProduct) ;
router.post('/EditProduct',ProductController.EditProduct) ;

module.exports=router ;
