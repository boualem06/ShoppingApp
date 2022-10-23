const Cart=require('../models/Cart') ;

const getCart=async(req,res)=>{
    Cart.find().then((data)=>{
        console.log(data) ;
        res.send(data) ;
    })
}

const addToCart=async(req,res)=>{
    // const Product=new Cart({
    //     description: "this the description product 4000",
    //     name: "this the name product 500",
    //     price: 2000,
    //     imagUrl
    // })
    // Cart.find().then((data)=>{
    //     console.log(data) ;
    //     res.send(data) ;
    // })
}



module.exports={
    getCart,
    addToCart
}