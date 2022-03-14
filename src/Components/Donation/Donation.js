import { Button, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';

import { useForm } from "react-hook-form";
import { ButtonStyle } from '../../Hooks/useStyle';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';


const Donation = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data)

    return (

        <>
            <NavigationBar />
            <SharedBanner pageName={"Donation"} />
            <Container component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Donar address
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                    {...register("firstName", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="standard"
                                    {...register("lastName", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="standard"
                                    {...register("address1", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="ocupation"
                                    name="ocupation"
                                    label="Ocupation"
                                    fullWidth
                                    variant="standard"
                                    {...register("ocupation", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="shipping address-level1"
                                    variant="standard"
                                    {...register("city", { required: true })}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    variant="standard"
                                    {...register("zip", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="country"
                                    name="country"
                                    label="Country"
                                    fullWidth
                                    autoComplete="shipping country"
                                    variant="standard"
                                    {...register("country", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="cardName"
                                    label="Name on card"
                                    fullWidth
                                    autoComplete="cc-name"
                                    variant="standard"
                                    {...register("cardName", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="cardNumber"
                                    label="Card number"
                                    fullWidth
                                    autoComplete="cc-number"
                                    variant="standard"
                                    {...register("cardNumber", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="amount"
                                    label="Amount"
                                    fullWidth
                                    autoComplete="cc-number"
                                    variant="standard"
                                    {...register("amount", { required: true })}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="expDate"
                                    label="Expiry date"
                                    fullWidth
                                    autoComplete="cc-exp"
                                    variant="standard"
                                    {...register("expDate", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="cvv"
                                    label="CVV"
                                    helperText="Last three digits on signature strip"
                                    fullWidth
                                    autoComplete="cc-csc"
                                    variant="standard"
                                    {...register("cvv", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button
                                    style={{ ...ButtonStyle, width: '200px', height: '50px' }}
                                    type='submit'
                                    size='small'
                                    variant="outlined"
                                    fullWidth
                                >Donate</Button>
                            </Grid>
                        </Grid>
                    </form>

                </React.Fragment>
            </Container>
        </>
    );
};

export default Donation;