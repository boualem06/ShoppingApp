const Cart=require('../models/Cart') ;

const getCart=async(req,res)=>{
    Cart.find().then((data)=>{
        console.log(data) ;
        res.send(data) ;
    })
}

module.exports={
    getCart
}