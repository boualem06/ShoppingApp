const express=require('express') ;
const router=express.Router() ;
const cartController=require('../Controllers/CartController')
router.get("/getCart/:userId",cartController.getCart) ;
router.post("/addToCart",cartController.addToCart)
router.get("/getAllCarts",cartController.getAllCarts)


module.exports=router ;