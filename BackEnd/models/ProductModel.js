const  mongoose  = require('mongoose') ;
const Schema=mongoose.Schema  ;
const ProductSchema=new Schema({
    name:{
        type:String,
        required:[true,'please add a name']
    },
    price:{
        type:String,
        required:[true,'please add an email']
    },
    discription:{
        type:String,
        required:[true,'please add a password']
    },
    ImageId:{
        type:String,
        required:[true,'please add a name']
    },
    
},{timestamps:true})

const Product=mongoose.model('Product',ProductSchema) ;
module.exports=Product ;