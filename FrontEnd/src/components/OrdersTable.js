import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pizza from '../img/pizza.png';
import { useState } from 'react';
import { useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});


const rows = [
    {
        customer: "Micheal Runner",
        total: 45,
        status: "on the Way"
    },
    {
        customer: "Micheal Runner",
        total: 45,
        status: "on the Way"
    },
    {
        customer: "Micheal Runner",
        total: 45,
        status: "on the Way"
    },
    {
        customer: "Micheal Runner",
        total: 45,
        status: "on the Way"
    },
    {
        customer: "Micheal Runner",
        total: 45,
        status: "on the Way"
    },
    {
        customer: "Micheal Runner",
        total: 45,
        status: "on the Way"
    }

];


const OrdersTable = () => {
    const [isServed, setIsServed] = useState(false);
    const classes = useStyles();
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const getCarts = async () => {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let response = await fetch(`http://localhost:5000/getAllCarts`, {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            setOrders(data);
            console.log(data);
        }
        getCarts();
    }, [])






    return (<TableContainer component={Paper}>
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
                {orders &&

                    orders.map((row, index) => (
                        <TableRow className='hover:bg-gray-100 hover:cursor-pointer' key={index} >
                            <TableCell component="th" scope="row">
                                <div className='text-red-500 font-bold'>{row.userName}</div>
                            </TableCell>
                            <TableCell align="right">${row.total}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">

                                <div>
                                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                        Show Details
                                    </Button>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"List of Products"}</DialogTitle>
                                        <DialogContent>


                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow className=''>

                                                        <TableCell><div className='font-bold text-lg'>Name</div></TableCell>
                                                        <TableCell align="right"><div className='font-bold text-lg'>Price</div></TableCell>
                                                        <TableCell align="right"><div className='font-bold text-lg'>Quantity</div></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {(row.userProducts).map((product, index) => (
                                                        <TableRow className='hover:bg-gray-100 hover:cursor-pointer' key={index} >
                                                            <TableCell align="left" >{product.name}</TableCell>
                                                            <TableCell align="center">${product.price}</TableCell>
                                                            <TableCell align="center">{product.quantity}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>

                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} color="primary">
                                                Close
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                                {/* {isServed && <button  className='  border bg-gray-500 mr-2 text-white px-2'>Next stage</button>}
                   {!isServed && <button  onClick={()=>{setIsServed(true)}} className=' hover:bg-green-600 border bg-green-500 mr-2 text-white px-2'>Next stage</button>}  */}
                            </TableCell>
                        </TableRow>
                    ))

                }

            </TableBody>
        </Table>


    </TableContainer>)
}
export default OrdersTable