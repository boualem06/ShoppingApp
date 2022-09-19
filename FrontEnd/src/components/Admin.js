import ProductTable from "./ProductTable";
import OrdersTable from "./OrdersTable";
const Admin = () => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-14">
            <div>
                <div className="flex">
                    <h1 className="text-3xl font-bold">Products</h1>
                    <button className='text-red-500  px-4 border rounded-full border-orange-500 hover:bg-gradient-to-r hover:from-orange-600    hover:to-orange-700 hover:text-white ml-2'>Add New</button>
                </div>
                <ProductTable></ProductTable>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Orders</h1>
                <OrdersTable></OrdersTable>
            </div>
        </div>
    )
}
export default Admin;