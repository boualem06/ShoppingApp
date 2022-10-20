import { useState } from "react";

const NewProduct = ({ add, setAdd }) => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [Product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
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
      setProduct({ ...Product, imageUrl: reader.result });
      console.log(Product)
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      setProduct({ ...Product, imageUrl: reader.result });
      uploadImage();
      // uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async () => {
    try {
      setLoading(true)
      await fetch("http://localhost:5000/PostProduct", {
        method: "POST",
        body: JSON.stringify(Product),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        setLoading(false);
        console.log(res);
      });
      setAdd(false);
      setFileInputState("");
      setPreviewSource("");
      setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };



  return (
    <div
      
      className=" m-2 border-2  border-orange-600 rounded-md px-4 py-2"
    >
      <div className="w-full flex justify-end items-center"><button onClick={()=>{setAdd(false)}} className="px-2 font-bold text-xl  text-white bg-orange-600  rounded-full ">  X </button></div>
      <form onSubmit={handleSubmitFile}>


        <div className="grid grid-cols1 sm:grid-cols-2 gap-4">
          <div>
            <div className="font-bold">Name of the Product </div>
            <input
              name="name"
              onChange={(e) => { setProduct({ ...Product, name: e.target.value }); }}
              className="w-full border px-2 py-1 rounded-md border-orange-600"
              placeholder="Product Name"
            ></input>
          </div>

          <div>
            <div className="font-bold">Price of the Product </div>
            <input
              onChange={(e) => { setProduct({ ...Product, price: parseInt(e.target.value) }); }}
              className="w-full border px-2 py-1 rounded-md border-orange-600"
              placeholder="Product Price $"
            ></input>
          </div>

          <div className="w-full">
            <div className="font-bold">description of the Product </div>
            <textarea
              onChange={(e) => { setProduct({ ...Product, description: e.target.value }); }}
              rows="2"
              className="w-full border px-2 py-2 rounded-md border-orange-600"
              placeholder="Product description "
            ></textarea>
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


        <div className="w-full mt-4 flex justify-center items-center">
          <button
            type="submit"
            className="bg-orange-600 text-white shadow-md px-10 py-2 rounded-md"
          >
            {loading ? <div>Submiting ...</div> : <div>Submit </div>}
          </button>
        </div>


      </form>
    </div>
  );
};
export default NewProduct;
