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
import NavbarResp from './NavbarResp';

import Footer from './Footer';
const useStyles = makeStyles({
    table: {
        // minWidth: 100,
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
        name: "Campagnoia",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "19.90",

    },
    {
        name: "Campagnoia",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "19.90",

    },
    {
        name: "Campagnoia",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "19.90",

    },
    {
        name: "Campagnoia",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "19.90",

    },
];

export default function Cart() {
    const classes = useStyles();

    return (
        <div>

        <NavbarResp></NavbarResp>
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="right"><img className='w-20 h-20' src={pizza} alt="Image"></img></TableCell>
                            <TableCell component="th" scope="row">
                               <div className='text-red-500 font-bold'>{row.name}</div> 
                            </TableCell>
                            <TableCell align="right">{row.extras}</TableCell>
                            <TableCell align="right">${row.price}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right"><div className='font-bold text-red-500'>${row.quantity * row.price}</div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
