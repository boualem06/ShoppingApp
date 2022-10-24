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
const useStyles = makeStyles({
    table: {
        // minWidth: 100,
    },
});




export default function Cart({ cart, setCart }) {
    const classes = useStyles();
    const [test,setTest]=useState([]); 
    const [currentUser,setCurrentUser]=useState({}) ;
    const delet=(row)=>{

        console.log(row) ;
        //  setCart(cart.map((ele)=>(ele!==row))) ;
        setCart(cart.filter((ele)=>{return ele!==row})) ;        
        
    }

    const getMe=async()=>{
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
    }



    useEffect(()=>{   
        getMe() ;      
    },[])

    const saveProduct=async()=>{
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
           }
                      
           let response = await fetch("http://localhost:5000/addToCart", { 
             method: "POST",
             body:{
                id:currentUser.id,
                userProducts:cart
             },
             headers: headersList
           });
           let data = await response.json();
           console.log(data);
    }

    return (
        <div style={{ height: "100vh" }} className="h-full">

            <NavbarResp cart={cart}></NavbarResp>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
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
                        {cart.map((row,index) => (
                            <TableRow key={index}>
                                <TableCell align="right"><img className='w-20 h-20' src={pizza} alt="Image"></img></TableCell>
                                <TableCell component="th" scope="row">
                                    <div className='text-red-500 font-bold'>{row.name}</div>
                                </TableCell>
                                <TableCell align="right">{row.extras}</TableCell>
                                <TableCell align="right">${row.price}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right"><div className='font-bold text-red-500'>${row.quantity * row.price}</div></TableCell>
                                <TableCell align="right"><button className='bg-red-500 font-bold border rounded-full px-2 py-1 text-white hover:bg-red-600 hover:shadow-md ' onClick={()=>{delet(row)}}>X</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='w-full flex justify-center items-center mt-4 '>
            <button className='hover:font-bold px-4 py-2 hover:shadow-md bg-orange-600 text-white rounded-md ' onClick={()=>{saveProduct()}}> save changes </button>
            </div>
            <div style={{
                position: "static",
                bottom: "0%",
                width: "100%",
               
            }} className='position relative bottom-0 top-100'>
                <Footer></Footer>
            </div>

        </div>
    );
}
