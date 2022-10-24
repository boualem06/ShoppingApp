const Cart = require('../models/Cart');
const userControllers = require('./userControllers')


const getCart = async (req, res) => {
    Cart.find({ userId: req.body.id }).then((data) => {
        res.send(data);
    })
}



const addToCart = async (req, res) => {
    let data = [];
    
    await Cart.find({ userId: req.body.id }).then((result) => {
        data = result;
    })
    
    if (data.length !== 0) {
        let cartId=((data[0])._id.toString()) ;
        Cart.updateOne({_id:cartId}, { $set: { userProducts: req.body.userProducts } }, (err, result) => {
            if (err) return console.log(err)
            res.json(result);
            
        })
    }
    else {
        const cart = new Cart({
            userId: req.body.id,
            userProducts: req.body.userProducts
        });
        cart.save().then((result) => {
            res.json(result);
        })
    }
    
}



module.exports = {
    getCart,
    addToCart
}