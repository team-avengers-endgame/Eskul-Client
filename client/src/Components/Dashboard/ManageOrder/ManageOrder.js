import React, { useEffect, useState } from 'react';
import { BadgeRoot, Box, Button, CardMedia, Container, Grid, Paper, Rating, Toolbar, Typography } from '@mui/material';
import { api } from '../../../Hooks/Api';
import { ButtonStyle } from '../../../Hooks/useStyle';
import { NavLink } from 'react-router-dom';
import CartOrder from './CartOrder';

const ManageOrder = () => {
  const [orders, setOrder] = useState([])

  useEffect(() => {
    fetch(`${api}/allOrder`)
      .then(res => res.json())
      .then(data => {
        setOrder(data)

      });
  }, [])
  // console.log('order', orders)
  // console.log('books', books)
  return (
    <Container>
      <Toolbar />

      {
        orders.map(order =>
          <Grid
            key={order?._id}
            container
            spacing={2}
            sx={{ mt: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >

            <Grid sx={{ py: 3 }} item xs={4} sm={8} md={7}>
             
                <Box >
                  <h5>{order.cus_name}</h5>
                  <h5>{order.cus_email}</h5>
                  <h5>{order.cus_phone}</h5>
                </Box>
             
            </Grid>

            <Grid sx={{ py: 3 }} item xs={4} sm={8} md={5}>
              <CartOrder cart={order.cartBooks[0]} />
            </Grid>

          </Grid>
        )
      }









      <h1> Manage Order</h1>
    </Container>
  );
};

export default ManageOrder;