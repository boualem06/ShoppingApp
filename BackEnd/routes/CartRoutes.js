const express=require('express') ;
const router=express.Router() ;
const cartController=require('../Controllers/CartController')
router.get("/getCart",cartController.getCart) ;


module.exports=router ;