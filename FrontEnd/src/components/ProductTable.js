import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pizza from '../img/pizza.png'
const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});


const rows = [
    {
        name: "Campagnoia",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "19.90",

    },
    {
        name: "Neapolitan",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "22.90",
    },
    {
        name: "Neapolitan",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "22.90",
    },
    {
        name: "Neapolitan",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "22.90",
    },
    {
        name: "Neapolitan",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "22.90",
    },
    
];
const ProductTable=()=>{
    const classes = useStyles();
    return(<TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className=''>
                        <TableCell ><div className='font-bold text-lg'>Product</div></TableCell>
                        <TableCell><div className='font-bold text-lg'>Name</div></TableCell>                        <TableCell align="right"><div className='font-bold text-lg'>Price</div></TableCell>
                        <TableCell align="right"><div className='font-bold text-lg'>Action</div></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>  
                            <TableCell align="right"><img className='w-10 h-10' src={pizza} alt="Image"></img></TableCell>
                            <TableCell component="th" scope="row">
                               <div className='text-red-500 font-bold'>{row.name}</div> 
                            </TableCell>
                            <TableCell align="right">${row.price}</TableCell>
                            <TableCell align="right">
                                <div className='md:flex'>
                                    <button className=' hover:bg-sky-600 border bg-sky-500 mr-2 text-white mb-2 md:mb-0 md:px-2 px-4'>Edit</button>
                                    <button className=' hover:bg-red-600 border bg-red-500 mr-2 text-white px-2'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>)
}
export default ProductTable