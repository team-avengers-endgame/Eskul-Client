import {Divider, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = (props) => {
    const cartBooks = useContext(CartContext)[0];

    let totalQuantity = 0;
    let total = 0;
    for (const product of cartBooks) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.bookPrice * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    const shipping = total > 0.10 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandtotal = total + shipping + tax;

    return (
        <List sx={{ pt: 0 }}>
            <ListItem sx={{ backgroundImage: `linear-gradient(to right,#32bcd3, #86ff4e)`, width: 1, color: 'white' }}>
                <Typography variant='h5'>Order Summary </Typography>
            </ListItem>
            <Divider />
            <ListItem button >
                <ListItemIcon>
                    <Typography>Total Quantity: {totalQuantity} </Typography>
                </ListItemIcon>

            </ListItem>
            <ListItem button >
                <ListItemIcon>
                    <Typography>Total: {total.toFixed(2)} Taka</Typography>
                </ListItemIcon>

            </ListItem>
            <ListItem button >
                <ListItemIcon>
                    <Typography>Shipping: {shipping.toFixed(2)} Taka</Typography>
                </ListItemIcon>

            </ListItem>
            <ListItem button >
                <ListItemIcon>
                    <Typography>Tax: {tax.toFixed(2)} Taka</Typography>
                </ListItemIcon>

            </ListItem>
            <Divider />
            <ListItem >
                <ListItemIcon>
                    <Typography>Grand Total: {grandtotal.toFixed(2)} Taka</Typography>
                </ListItemIcon>

            </ListItem>
            <ListItem>
                {props.children}
            </ListItem>
        </List>
    );
};

export default Cart;