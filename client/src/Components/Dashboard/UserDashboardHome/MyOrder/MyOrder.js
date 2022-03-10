import React, { useEffect, useState } from 'react';
import { Box, Chip, Container, Divider, Fab, Grid, Toolbar } from '@mui/material';
import CartOrder from './MyBooks';
import CustomerAddress from './MyAddress';
import axios from 'axios';
import { api } from '../../../../Hooks/Api';
import useAuth from '../../../../Hooks/useAuth';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`${api}/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)

            });
    }, [user?.email])

    const handleUpdateStatus = (status, id) => {

        axios.put(`${api}/statusUpdate/${id}`, { status })
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }
    const handleDelete = (id) => {
        axios.delete(`${api}/statusUpdate/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <Container>
            <Toolbar />
            <Divider>
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                  <AddShoppingCartIcon/>  MY Order
                </Fab>
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

export default MyOrder;