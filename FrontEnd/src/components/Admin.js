import ProductTable from "./ProductTable";
import OrdersTable from "./OrdersTable";
import NavbarResp from "./NavbarResp";
import NewProduct from "./NewProduct";
import { useState } from "react";
const Admin = () => {
    const [add,setAdd]=useState(false) ;
    return (
        <div>
            <NavbarResp/>
             <div className="px-4 grid gap-4 grid-cols-1 md:grid-cols-2 mt-24 md:mt-14 ">
            <div>
                <div className="flex">
                    <h1 className="text-3xl font-bold">Products</h1>
                    <button onClick={()=>{setAdd(true)}} className='text-red-500  px-4 border rounded-full border-orange-500 hover:bg-gradient-to-r hover:from-orange-600    hover:to-orange-700 hover:text-white ml-2'>Add New</button>
                </div>
                {add && <NewProduct add={add} setAdd={setAdd}></NewProduct>}
                <ProductTable></ProductTable>
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