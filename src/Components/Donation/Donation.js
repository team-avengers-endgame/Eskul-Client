import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { ButtonStyle } from "../../Hooks/useStyle";
import QuickScroll from "../Home/QuickScroll/QuickScroll";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import SharedBanner from "../Shared/SharedBanner/SharedBanner";
import axios from "axios";
import { api } from "../../Hooks/Api";

const Donation = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const newData = {
      cus_name: data.firstName + " " + data.lastName,
      total_amount: data.amount,
      cus_email: user.email,
      cus_add1: data.address,
      cus_city: data.city,
      cus_postcode: data.zip,
      ocupation: data.ocupation,
      date: new Date().toLocaleDateString(),
    };
    axios
      .post(`${api}/donation/donationInit`, newData)
      .then((res) => {
        window.location.replace(res?.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(newData);
  };

  return (
    <>
      <NavigationBar />
      <SharedBanner pageName={"Donation"} />
      <Box sx={{ px: 1 }}>
        <Container sx={{ my: 10 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              item
              xs={4}
              sm={4}
              md={6}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <Typography variant="body1">
                Donating in the education of the girls brings high returns in
                terms of aiding social and economic growth. To be more precise,
                it will promote social inclusion, encourage gender equality and
                make them well-informed emerging leaders. An educated girl is
                far more likely to commit to educating her own children, which
                in turn will empower an entire generation. Therefore, educating
                girls will help control the birth rate, improve basic hygiene,
                health care and the community as a whole.
                <br />
                Through this Donation, the underprivileged girls at async
                schools will have a greater chance of escaping poverty, raise
                the standard of living of their communities and have healthier
                and productive lives. With a rightful education, they will
                acquire the knowledge and skills to make wise decisions and be
                self-sufficient. Our collected money will be divided equally
                among them.
                <Typography variant="h4">
                  So Donate Here and Be the Honorable one!!!!
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={6}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <img
                style={{ width: "100%" }}
                src="https://i.ibb.co/8McvZqH/pict-large.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
        <Toolbar />
        <Container component="span" sx={{ py: 2, border: "1px dashed grey" }}>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
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
                    id="address"
                    name="address"
                    label="Address line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    {...register("address", { required: true })}
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
                    type="number"
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
                    id="amount"
                    label="Amount"
                    fullWidth
                    autoComplete="cc-number"
                    variant="standard"
                    type="number"
                    {...register("amount", { required: true })}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Button
                    style={{ ...ButtonStyle, width: "200px", height: "50px" }}
                    type="submit"
                    size="small"
                    variant="outlined"
                    fullWidth
                  >
                    Donate
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </Box>
      <Toolbar />
      <Toolbar />
      <Footer />
      <QuickScroll />
    </>
  );
};

export default Donation;
