import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { alert, ButtonStyle } from "../../../Hooks/useStyle";



const TeacherContact = () => {

  const {
    register,
    handleSubmit,
    reset} = useForm();
 

  const sendEmail = (formData) => {
    emailjs.send("service_es28khp", "template_1fmwbhh", formData, "user_bJFVwTvtJQe23vqEilEMy")

 .then(
  (result) => {

    result.text && alert('success', 'Success', 'Message sent successfully');
  },
  (error) => {

    error.text &&  alert('error', 'Error', 'Messege can not send');
  }
);
reset();  
  };
  return (
    <Container >



        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{mt:3}}>
         

          <Grid item xs={4} sm={4} md={12} lg={12}>
            <Box sx={{ mb: 5 }}>
              <Box>
              <Typography
        sx={{ mb: 4, color: "#0c4b65", fontWeight: "600", fontSize: "30px" }}
        variant="h5"
        component="div"
      >
        Make contact with respected teacher
      </Typography>
               
              </Box>


              <form onSubmit={handleSubmit(sendEmail)}>

                <Box sx={{ mt: 3 }} >

                  <TextField id="filled-basic" label="Name" fullWidth
                    variant="filled"{...register("name", { required: true })}
                    placeholder=" Your Name"
                    sx={{ my: 2 }} />
                  <TextField id="filled-basic" label="Email" fullWidth
                    variant="filled"{...register("email", { required: true })}
                    placeholder=" Your email"
                    sx={{ my: 2 }} />


                  <TextField fullWidth
                    id="outlined-multiline-static"
                    variant="filled"
                    label="Massage"
                    multiline
                    rows={4}

                    {...register("message", { required: true })} placeholder=" Your Massage"
                    sx={{ my: 2 }} /> <br />


                  <Button type="submit" fullWidth variant="contained" sx={ButtonStyle} endIcon={<SendIcon />}> Send</Button>


                </Box>


              </form>

            </Box>
          </Grid>
        </Grid>

      

      </Container>
  );
};

export default TeacherContact;

