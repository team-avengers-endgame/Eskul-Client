import {Divider, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import Calculation from '../../../Hooks/useCalculation';


const Cart = (props) => {
       const {shipping,tax,totalQuantity,total,grandtotal}=Calculation();

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