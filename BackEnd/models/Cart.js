const  mongoose  = require('mongoose') ;
const Schema=mongoose.Schema  ;
const CartSchema=new Schema({
    userId:{
        type:String,
        required:[true,'please add a userId']
    },
    userProducts:{
        type:Array
    }
    
},{timestamps:true})

const Cart=mongoose.model('Cart',CartSchema) ;
module.exports=Cart ;