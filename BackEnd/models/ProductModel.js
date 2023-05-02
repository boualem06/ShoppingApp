const  mongoose  = require('mongoose') ;
const Schema=mongoose.Schema  ;
const ProductSchema=new Schema({
    name:{
        type:String,
        required:[true,'please add a name']
    },
    price:{
        type:Number,
        required:[true,'please add a price']
    },
    description:{
        type:String,
        required:[true,'please add a description']
    },
    imageUrl:{
        type:String,
        required:[true,'please add a url of the image']
    }
    
},{timestamps:true})

const Product=mongoose.model('Product',ProductSchema) ;
module.exports=Product ;