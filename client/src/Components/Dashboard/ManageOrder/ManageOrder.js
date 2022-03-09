import React, { useEffect, useState } from 'react';
import { Box, Chip, Container, Divider, Grid, Toolbar } from '@mui/material';
import { api } from '../../../Hooks/Api';
import CartOrder from './CartOrder';
import CustomerAddress from './CustomerAddress';
import axios from 'axios';
const ManageOrder = () => {
  const [orders, setOrder] = useState([]);


  useEffect(() => {
    fetch(`${api}/allOrder`)
      .then(res => res.json())
      .then(data => {
        setOrder(data)

      });
  }, [])

  const handleUpdateStatus = (status, id) => {
      
    axios.put(`${api}/statusUpdate/${id}`,{ status } )
      .then(res => {
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }
  const handleDelete = (id) => {
    axios.delete(`${api}/statusUpdate/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
  }


  return (
    <Container>
      <Toolbar />
      <Divider>
        <Chip label="Manage Order" />
      </Divider>
      {
        orders.map(order =>
          <Box key={order?._id}>

            <Grid
              container
              spacing={2}
              sx={{ mt: 6 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >

              <Grid item xs={4} sm={8} md={7}>

                <CustomerAddress
                  order={order}
                  handleUpdateStatus={handleUpdateStatus}
                  handleDelete={handleDelete}
                />

              </Grid>

              <Grid sx={{ py: 3 }} item xs={4} sm={8} md={5}>

                <CartOrder
                  cart={order.cartBooks[0]}

                />
              </Grid>

            </Grid>

            <Divider >
              <Chip label="CHIP" />

            </Divider>
          </Box>
        )
      }

    </Container>
  );
};

export default ManageOrder;