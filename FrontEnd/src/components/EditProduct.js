import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEdit } from "../features/EditElement";
const EditProduct = ({ add, setAdd }) => {
    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [Product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const EditElement = useSelector((state) => state.EditElement.value);

    
    const submitForm=async()=>{
        let response = await fetch("http://localhost:5000/EditProduct", {
            method: "POST",
            body:JSON.stringify({
                name:Product.name,
                price:parseInt(Product.price),
                description:Product.description,
                id:EditElement._id
                
            }),
            headers: { "Content-Type": "application/json" },
        });
    }
   


    const dispatch = useDispatch();
    useEffect(() => {
        setProduct(EditElement);
    }, [EditElement])

    return (
        <div

            className=" m-2 border-2  border-orange-600 rounded-md px-4 py-2"
        >
            <div className="w-full flex justify-end items-center"><button onClick={() => {  dispatch(setEdit(false)); }} className="px-2 font-bold text-xl  text-white bg-orange-600 hover:bg-orange-700  rounded-full ">  X </button></div>
            <form onSubmit={(e)=>{e.preventDefault();submitForm();console.log(Product)}}>


                <div className="grid grid-cols1 sm:grid-cols-2 gap-4">
                    <div>
                        <div className="font-bold">Name of the Product </div>
                        <input
                            value={Product.name}
                            name="name"
                            onChange={(e) => { setProduct({ ...Product, name: e.target.value }); }}
                            className="w-full border px-2 py-1 rounded-md border-orange-600"
                            placeholder="Product Name"
                        ></input>
                    </div>

                    <div>
                        <div className="font-bold">Price of the Product </div>
                        <input
                            value={Product.price}
                            onChange={(e) => { setProduct({ ...Product, price: e.target.value }); }}
                            className="w-full border px-2 py-1 rounded-md border-orange-600"
                            placeholder="Product Price $"
                        ></input>
                    </div>

                    <div className="w-full">
                        <div className="font-bold">description of the Product </div>
                        <textarea
                            value={Product.description}
                            onChange={(e) => { setProduct({ ...Product, description: e.target.value }); }}
                            rows="2"
                            className="w-full border px-2 py-2 rounded-md border-orange-600"
                            placeholder="Product description "
                        ></textarea>
                    </div>
                </div>


                <div className="w-full mt-4 flex justify-center items-center">
                    <button
                        type="submit"
                        className="bg-orange-600 hover:bg-orange-700 hover:font-bold text-white shadow-md px-10 py-2 rounded-md"
                    >
                        {loading ? <div>Submiting ...</div> : <div>Submit </div>}
                    </button>
                </div>


            </form>
        </div>
    );
};
export default EditProduct;
