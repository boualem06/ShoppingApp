// import React, { useState } from 'react';


// export default function Upload() {
//     const [fileInputState, setFileInputState] = useState('');
//     const [previewSource, setPreviewSource] = useState('');
//     const [selectedFile, setSelectedFile] = useState();
//     const [successMsg, setSuccessMsg] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const handleFileInputChange = (e) => {
//         const file = e.target.files[0];
//         previewFile(file);
//         setSelectedFile(file);
//         setFileInputState(e.target.value);
//     };

//     const previewFile = (file) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             console.log(reader.result) ;
//             setPreviewSource(reader.result);
//         };
//     };

//     const handleSubmitFile = (e) => {
//         e.preventDefault();
//         if (!selectedFile) return;
//         const reader = new FileReader();
//         reader.readAsDataURL(selectedFile);
//         reader.onloadend = () => {
//              uploadImage(reader.result);
//         };
//         reader.onerror = () => {
//             console.error('AHHHHHHHH!!');
//             setErrMsg('something went wrong!');
//         };
//     };

//     const uploadImage = async (base64EncodedImage) => {
//         try {
//             await fetch('http://localhost:5000/api/PostProduct', {
//                 method: 'POST',
//                 body: JSON.stringify({ data: base64EncodedImage }),
//                 headers: { 'Content-Type': 'application/json' },
//             });
//             setFileInputState('');
//             setPreviewSource('');
//             setSuccessMsg('Image uploaded successfully');
//         } catch (err) {
//             console.error(err);
//             setErrMsg('Something went wrong!');
//         }
//     };
//     return (
//         <div>
//             <h1 className="title">Upload an Image</h1>
//             {/* <Alert msg={errMsg} type="danger" />
//             <Alert msg={successMsg} type="success" /> */}
//             <form onSubmit={handleSubmitFile} className="form">
//                 <input
//                     id="fileInput"
//                     type="file"
//                     name="image"
//                     onChange={handleFileInputChange}
//                     value={fileInputState}
//                     className="form-input"
//                 />
//                 <button className="btn" type="submit">
//                     Submit
//                 </button>
//             </form>
//             {previewSource && (
//                 <img
//                     src={previewSource}
//                     alt="chosen"
//                     style={{ height: '300px' }}
//                 />
//             )}
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {
    const [Products, setProducts] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('http://localhost:5000/getProducts');
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, []);
    return (
        <div>
            <h1 className="title">Cloudinary Gallery</h1>
            <div className="gallery">
                {Products &&
                    Products.map((Prod, index) => (
                    <div key={index}>
                          <h1> {Prod.name}</h1>
                          <h2>{Prod.price}</h2>
                          <h3>{Prod.description}</h3>
                       <Image
                           key={index}
                           cloudName={"dc7suzbrg"}
                           publicId={Prod.imageUrl}
                           width="300"
                           crop="scale"
                       /> </div>
                     
                    ))}
            </div>
        </div>
    );
}

