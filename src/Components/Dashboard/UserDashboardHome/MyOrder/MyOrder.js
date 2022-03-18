import React, { useEffect, useState } from 'react';
import { Box, Chip, Container, Divider, Fab, Grid, TableFooter, TablePagination, Toolbar } from '@mui/material';
import CartOrder from './MyBooks';
import CustomerAddress from './MyAddress';
import axios from 'axios';
import { api } from '../../../../Hooks/Api';
import useAuth from '../../../../Hooks/useAuth';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from 'sweetalert2';

const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    useEffect(() => {
        fetch(`${api}/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)
            });
    }, [user?.email])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${api}/manageAllOrderDelete/${id}`)
                    .then((response) => {
                        response.status === 204 &&
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        const deleted = orders.filter((d) => d._id !== id);
                        setOrder(deleted)
                    }).catch((err) => {
                        console.log(err);
                    })
            }
        })
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <Container>
            <Toolbar />
            <Divider>
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                    <AddShoppingCartIcon />MY Order
                </Fab>
            </Divider>
            {
                orders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map(order =>
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
                                    handleDelete={handleDelete}
                                />

                            </Grid>

                            <Grid sx={{ py: 3 }} item xs={4} sm={8} md={5}>

                                <CartOrder
                                    cart={order.cartBooks}

                                />
                            </Grid>

                        </Grid>

                        <Divider >
                            <Chip label={<AddShoppingCartIcon />} />

                        </Divider>
                    </Box>
                )
            }
 <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 40]}
            component="div"
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
        </Container>
    );
};

export default MyOrder;