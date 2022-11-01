import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pizza from '../img/pizza.png'
import NavbarResp from './NavbarResp';
import Footer from './Footer';
import { Image } from 'cloudinary-react';





export default function Cart({ cart, setCart }) {

    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const delet = (row) => {
        let temp = cart.filter((ele) => { return ele.imageUrl !== row.imageUrl })
        setCart(temp);
    }

    const getMe = async () => {
        let headersList = {
            "Accept": "*/*",
            "accestoken": localStorage.getItem('jwt'),
            "Content-Type": "application/json"
        }



        let response = await fetch("http://localhost:5000/me", {
            method: "GET",
            headers: headersList
        });
        let data = await response.json();
        console.log(data);
        setIsLoading(false)
        setCurrentUser(data)
    }

    useEffect(() => {
        getMe();
    }, [])

    const saveProduct = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let Total = 0;
        for (let i = 0; i < cart.length; i++) {
            Total = Total + ((cart[i]).price) * (cart[i]).quantity
        }
        console.log(Total);


        let response = await fetch("http://localhost:5000/addToCart", {
            method: "POST",
            body: JSON.stringify({
                name: currentUser.name,
                total: Total,
                id: currentUser.id,
                userProducts: cart,
            }),
            headers: headersList
        });
        let data = await response.json();
        console.log("data is saved")
        console.log({
            name: currentUser.name,
            total: Total,
            id: currentUser.id,
            userProducts: cart
        });
        console.log(data);
    }


    return (
        <div style={{ height: "100vh" }} className="flex flex-col h-full   justify-between ">

            <NavbarResp cart={cart}></NavbarResp>
            {cart.length!==0 ? <div className="">
                <TableContainer component={Paper}>
                    <Table  >
                        <TableHead>
                            <TableRow className=''>
                                <TableCell ><div className='font-bold text-lg'>Product</div></TableCell>
                                <TableCell><div className='font-bold text-lg'>Name</div></TableCell>
                                <TableCell align="right"><div className='font-bold text-lg'>Extras</div></TableCell>
                                <TableCell align="right"><div className='font-bold text-lg'>Price</div></TableCell>
                                <TableCell align="right"><div className='font-bold text-lg'>Quantity</div></TableCell>
                                <TableCell align="right"><div className='font-bold text-lg'>Total</div></TableCell>
                                <TableCell align="right"><div className='font-bold text-lg'></div></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="right">
                                        <Image

                                            cloudName={"dc7suzbrg"}
                                            publicId={row.imageUrl}
                                            className="w-20 rounded-md h-20"
                                            crop="scale"
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div className='text-red-500 font-bold'>{row.name}</div>
                                    </TableCell>
                                    <TableCell align="right">{row.extras}</TableCell>
                                    <TableCell align="right">${row.price}</TableCell>
                                    <TableCell align="right">{row.quantity}</TableCell>
                                    <TableCell align="right"><div className='font-bold text-red-500'>${row.quantity * row.price}</div></TableCell>
                                    <TableCell align="right"><button className='bg-red-500 font-bold border rounded-full px-2 py-1 text-white hover:bg-red-600 hover:shadow-md ' onClick={() => { console.log(row); delet(row) }}>X</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='w-full flex justify-center items-center mt-4 '>
                    {!isLoading && <button className='hover:font-bold px-4 py-2 hover:shadow-md bg-orange-600 text-white rounded-md ' onClick={() => { saveProduct() }}> save changes </button>}
                </div>
            </div>:
            <div className='text-5xl text-orange-600 font-bold w-full text-center mt-24 '>Empty Cart </div>
            }
            {/* {cart.length!==0 ? 
             <div style={{
                position: "relative",
                width: "100%",
                bottom: "0px",
            }} >
                <Footer></Footer>
            </div>:
             <div style={{
                position: "absolute",
                width: "100%",
                bottom: "0px",
            }} >
                <Footer></Footer>
            </div>
            } */}
           <Footer></Footer>
        </div>
    );
}
