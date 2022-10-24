import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pizza from '../img/pizza.png'
import { useState } from 'react';
import { Image } from 'cloudinary-react';
import { useDispatch } from "react-redux";
import { setEditElement, setEdit } from '../features/EditElement';
const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});



const ProductTable = () => {

    const [rows, setRows] = useState([]);
    const loadImages = async () => {
        try {
            const res = await fetch('http://localhost:5000/getProducts');
            const data = await res.json();
            console.log(data);
            setRows(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, []);



    const classes = useStyles();
    

    const deleteRow = async (id) => {
        console.log(id)
       
        let vars = rows.filter((ele) => { return ele._id !== id });
        setRows(vars) ;
        let response = await fetch("http://localhost:5000/deleteProduct", {
            method: "DELETE",
            body:JSON.stringify({
                id: id
            }),
            headers: { "Content-Type": "application/json" },
        });

        let data = await response.text();
        console.log(data);


    }

    const dispatch = useDispatch();


    // const delitRow = (row) => {
    //     let vars = rows.filter((ele) => { return ele !== row });
    //     setRows(vars);
    // }
    return (<TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow className=''>
                    <TableCell ><div className='font-bold text-lg'>Product</div></TableCell>
                    <TableCell><div className='font-bold text-lg'>Name</div></TableCell>                        <TableCell align="right"><div className='font-bold text-lg'>Price</div></TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell align="right">
                            <Image

                                cloudName={"dc7suzbrg"}
                                publicId={row.imageUrl}
                                className="w-20 rounded-md h-20"
                                crop="scale"
                            /></TableCell>

                        <TableCell component="th" scope="row">
                            <div className='text-red-500 font-bold'>{row.name}</div>
                        </TableCell>
                        <TableCell align="right">${row.price}</TableCell>
                        <TableCell align="right">
                            <div className='lg:flex lg:justify-center lg:items-center'>
                                <button onClick={() => { dispatch(setEditElement(row)); dispatch(setEdit(true)) }} className='py-1  hover:bg-sky-600 border bg-sky-500 mr-2 rounded-md text-white mb-2 lg:mb-0 lg:px-2 px-4'>Edit</button>
                                <button onClick={() => { deleteRow(row._id) }} className='py-1 hover:bg-red-600 border bg-red-500 mr-2 rounded-md text-white px-2'>Delete</button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}
export default ProductTable