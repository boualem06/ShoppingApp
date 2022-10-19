import { useState } from "react";

const NewProduct = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('http://localhost:5000/api/PostProduct', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };

    return (
        <div style={{ "box-shadow": "1px 1px 15px #F43911" }} className=" m-2  border-orange-600 rounded-md px-4 py-2">
            <form >
                <div className="grid grid-cols1 sm:grid-cols-2 gap-4">
                    <div>
                        <div className="font-bold">Name of the Product </div>
                        <input className="w-full border px-2 py-1 rounded-md border-orange-600" placeholder="Product Name"></input>
                    </div>

                    <div>
                        <div className="font-bold">Price of the Product </div>
                        <input className="w-full border px-2 py-1 rounded-md border-orange-600" placeholder="Product Price $"></input>
                    </div>

                    <div className="w-full">
                        <div className="font-bold">description of the Product </div>
                        <textarea rows="2" className="w-full border px-2 py-2 rounded-md border-orange-600" placeholder="Product description " ></textarea>
                    </div>
                    <div>
                        <div className="font-bold">Image of the Product </div>
                        <input
                            id="fileInput"
                            type="file"
                            name="image"
                            className="w-full h-16 border px-4 py-4 rounded-md border-orange-600"
                            onChange={handleFileInputChange}
                            value={fileInputState}
                        />
                    </div>
                </div>
                <div className="mt-2 w-full flex justify-center items-center ">
                    {previewSource && (
                        <img
                            style={{ width: 200, height: 200 }}
                            src={previewSource}
                            className=" border px-2 py-1 rounded-md border-orange-600"
                            alt="chosen"

                        />
                    )}
                </div>

            </form>
        </div>
    )
}
export default NewProduct;