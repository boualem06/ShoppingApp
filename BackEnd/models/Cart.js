const  mongoose  = require('mongoose') ;
const Schema=mongoose.Schema  ;
const CartSchema=new Schema({
    userId:{
        type:String,
        required:[true,'please add a userId']
    },
    elements:{
        type:Array
    }
        

    // price:{
    //     type:Number,
    //     required:[true,'please add a price']
    // },
    // description:{
    //     type:String,
    //     required:[true,'please add a description']
    // },
    // imageUrl:{
    //     type:String,
    //     required:[true,'please add a url of the image']
    // }
    
},{timestamps:true})

const Cart=mongoose.model('CartSchema',CartSchema) ;
module.exports=Cart ;