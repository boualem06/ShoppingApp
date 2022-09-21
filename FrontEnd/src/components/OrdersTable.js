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
    customer:"Micheal Runner",
    total:45,
    status:"on the Way"
   },
   {
    customer:"Micheal Runner",
    total:45,
    status:"on the Way"
   },
   {
    customer:"Micheal Runner",
    total:45,
    status:"on the Way"
   },
   {
    customer:"Micheal Runner",
    total:45,
    status:"on the Way"
   },
   {
    customer:"Micheal Runner",
    total:45,
    status:"on the Way"
   },
   {
    customer:"Micheal Runner",
    total:45,
    status:"on the Way"
   }

];
const OrdersTable=()=>{
    const classes = useStyles();
    return(<TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className=''>
                        <TableCell ><div className='font-bold text-lg'>Customer</div></TableCell>
                        <TableCell><div className='font-bold text-lg'>Total</div></TableCell> 
                        <TableCell align="right"><div className='font-bold text-lg'>Status</div></TableCell>

                        <TableCell align="right"><div className='font-bold text-lg'>Action</div></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.customer}>
                            <TableCell component="th" scope="row">
                               <div className='text-red-500 font-bold'>{row.customer}</div> 
                            </TableCell>
                            <TableCell align="right">${row.total}</TableCell>
                            <TableCell align="right">${row.status}</TableCell>
                            <TableCell align="right">
                                    <button className=' hover:bg-green-600 border bg-green-500 mr-2 text-white px-2'>Next stage</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>)
}
export default OrdersTable