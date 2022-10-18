const { cloudinary } = require('../models/Cloudinary');



// app.get('/api/images', async (req, res) => {
//     const { resources } = await cloudinary.search
//         .expression('folder:dev_setups')
//         .sort_by('public_id', 'desc')
//         .max_results(30)
//         .execute();

//     const publicIds = resources.map((file) => file.public_id);
//     res.send(publicIds);
// });
const uploadImage=async(req,res)=>{
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'xeww3a1m',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}

module.exports={
    uploadImage
}



