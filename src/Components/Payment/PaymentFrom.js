import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Autocomplete, Button, Grid, TextField, Toolbar } from "@mui/material";
import { ButtonStyle } from "../../Hooks/useStyle";
import useAuth from "../../Hooks/useAuth";
import { Box } from "@mui/system";
import { countries } from "./CountryData/CountryData";
import Calculation from "../../Hooks/useCalculation";
import axios from "axios";
import { api } from "../../Hooks/Api";

const PaymentFrom = () => {
  const { cartBooks, grandtotal } = Calculation();
  const [currency, setCurrency] = useState();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      cus_name: user.displayName,
      cus_email: user.email,
      date: new Date().toLocaleDateString(),
    });
  }, [reset, user.displayName, user.email]);

  const onSubmit = (data) => {
    const paymentData = {
      ...data,
      total_amount: grandtotal,
      cartBooks: [cartBooks],
      status: "Pending",
    };
    axios
      .post(`${api}/init`, paymentData)
      .then((res) => {
        window.location.replace(res?.data);
        localStorage.removeItem('cart');
      })
      .catch((error) => {
        console.log(error);
      });

  };

  useEffect(() => {
    fetch("Currency.json")
      .then((res) => res.json())
      .then((data) => setCurrency(data));
  }, []);




  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <TextField
              label="Full Name"
              variant="filled"
              color="warning"
              focused
              size="small"
              fullWidth
              {...register("cus_name", { required: true })}
            />

            {errors.cus_name && <span>This field is required</span>}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <TextField
              label="Your Email"
              color="warning"
              variant="filled"
              fullWidth
              focused
              size="small"
              {...register("cus_email", { required: true })}
            />
            {errors.cus_email && <span>This field is required</span>}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <TextField
              label="Date"
              color="warning"
              variant="filled"
              fullWidth
              focused
              size="small"
              {...register("date", { required: true })}
            />
            {errors.date && <span>This field is required</span>}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
              id="country-select-demo"
              size="small"
              disableClearable
              options={currency}
              autoHighlight
              getOptionLabel={(option) => option.code}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  label="Currency"
                  color="warning"
                  variant="filled"
                  fullWidth
                  focused
                  size="small"
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                  {...register("currency", { required: true })}
                />
              )}
            />
            {errors.currency && <span>This field is required</span>}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <TextField
              label="Address"
              color="warning"
              variant="filled"
              fullWidth
              focused
              size="small"
              {...register("cus_add1", { required: true })}
            />
            {errors.cus_add1 && <span>This field is required</span>}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
              id="country-select-demo"
              options={countries}
              fullWidth
              autoHighlight
              size="small"
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  label="County"
                  color="warning"
                  variant="filled"
                  fullWidth
                  focused
                  size="small"
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                  {...register("cus_country", { required: true })}
                />
              )}
            />
            {errors.cus_country && <span>This field is required</span>}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <TextField
              label="City"
              color="warning"
              variant="filled"
              fullWidth
              focused
              size="small"
              {...register("cus_city", { required: true })}
            />
            {errors.cus_city && <span>This field is required</span>}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <TextField
              label="State"
              color="warning"
              variant="filled"
              fullWidth
              focused
              size="small"
              {...register("cus_state", { required: true })}
            />
            {errors.cus_state && <span>This field is required</span>}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <TextField
              label="Post Code"
              color="warning"
              variant="filled"
              type="number"
              fullWidth
              focused
              size="small"
              {...register("cus_postcode", { required: true })}
            />
            {errors.cus_postcode && <span>This field is required</span>}
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
              id="country-select-demo"
              size="small"
              freeSolo
              disableClearable
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.phone}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  label="Phone"
                  color="warning"
                  variant="filled"
                  fullWidth
                  focused
                  size="small"
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                  {...register("cus_phone", { required: true })}
                />
              )}
            />
            {errors.cus_phone && <span>This field is required</span>}
          </Grid>
        </Grid>
        <Toolbar />

        <Button type="submit" sx={{ ...ButtonStyle, width: "50%" }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PaymentFrom;
