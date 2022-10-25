const  mongoose  = require('mongoose') ;
const Schema=mongoose.Schema  ;
const CartSchema=new Schema({

    userName:{
        type:String,
        required:[true,'please add a userName'] 
    },
    total:{
        type:Number,
        required:[true,'please add a Total'] 
    },
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