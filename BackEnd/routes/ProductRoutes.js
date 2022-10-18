const express=require('express')
const router=express.Router() ;
const ProductController=require('../Controllers/ProductControllers')
router.post('/api/upload',ProductController.uploadImage), 
module.exports=router ;
