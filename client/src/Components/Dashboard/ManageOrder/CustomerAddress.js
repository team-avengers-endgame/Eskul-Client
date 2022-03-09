import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IconButton, ListItem, NativeSelect, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const CustomerAddress = ({ order, handleUpdateStatus, handleDelete }) => {

    const handleChange = (event) => {
        const status = (event.target.value);
        handleUpdateStatus(status, order?._id)
    };

    console.log(order);

    const addressStyle = { display: 'flex', justifyContent: 'space-between' };
    return (
        <Box>

            <ListItem button divider></ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Customer Name</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_name}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Country</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_country}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>City</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_city}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>State</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_state}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Post Code</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_postcode}</Typography>
                    </Grid>

                </Grid>
            </ListItem>

            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Phone</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_phone}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Email</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_email}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Total Amount</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >${order?.total_amount} {order?.currency}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Tran_id</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.tran_id}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Date</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography  >{order?.date}</Typography>
                    </Grid>

                </Grid>
            </ListItem>




            {
                order?.status &&
                <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <FormControl sx={{ m: 1, minWidth: 100, color: 'red !important' }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Status
                        </InputLabel>
                        <NativeSelect
                            onClick={handleChange}
                            defaultValue={order?.status}

                        >
                            <option value="Pending" >Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Delivered">Delivered</option>
                        </NativeSelect>

                    </FormControl>

                    <Tooltip title='Delete' arrow >
                        <IconButton onClick={() => handleDelete(order._id)} color='secondary' aria-label="delete" size="large">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>

                </ListItem>}
        </Box>
    );
};

export default CustomerAddress;