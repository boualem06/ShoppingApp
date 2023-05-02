import ProductTable from "./ProductTable";
import OrdersTable from "./OrdersTable";
import NavbarResp from "./NavbarResp";
import NewProduct from "./NewProduct";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import EditProduct from "./EditProduct";
const Admin = ({cart}) => {
    const edit = useSelector((state) => state.EditElement.edit);
    const EditElement = useSelector((state) => state.EditElement.value);
    const [add,setAdd]=useState(false) ;

    useEffect(()=>{
        console.log(edit) ;
        console.log(EditElement)
    },[edit])
    // const [edit,setEdit]=useState(false) ;
    return (
        <div>
            <NavbarResp cart={cart}/>
             <div className="px-4 grid gap-4 grid-cols-1 md:grid-cols-2 mt-24 md:mt-14 ">
            <div>
                <div className="flex mb-4 w-full justify-between ">
                    <h1 className="text-3xl font-bold">Products</h1>
                    <button onClick={()=>{setAdd(true)}} className='text-red-500  px-4 border rounded-md border-orange-500  bg-orange-600  hover:shadow-md hover:bg-orange-700 text-white ml-2'>Add New</button>
                </div>
                {add && <NewProduct add={add} setAdd={setAdd}></NewProduct>}
                {edit && <EditProduct></EditProduct>}
                <ProductTable ></ProductTable>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Orders</h1>
                <OrdersTable></OrdersTable>
            </div>
        </div>
        </div>
       
    )
}
export default Admin;