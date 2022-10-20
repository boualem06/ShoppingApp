const { cloudinary } = require('../models/Cloudinary');
const Product = require('../models/ProductModel')


const getImages = async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:Test')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
};



const uploadImage = async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'xeww3a1m',
        });
        // console.log(uploadResponse);
        // res.json({ msg: 'yaya' });
        return uploadResponse;
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}

const uploadProduct = async (req, res) => {
    try {
        console.log(req.body)
        // /save the image of the product to cloudinary
        const fileStr = req.body.imageUrl;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'xeww3a1m',
        });

        //save the product with the public_id of the image saved to cloudinary to mongo db 
        const saveProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            imageUrl: uploadResponse.public_id
        })
        saveProduct.save().then((result) => {
            console.log(result);
            res.json(result);
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}


const getProduct=async(req,res)=>{
    Product.find().then((data)=>{
        console.log(data) ;
        res.json(data) ;
    })
}

module.exports = {
    uploadImage,
    getImages,
    uploadProduct,
    getProduct
}



