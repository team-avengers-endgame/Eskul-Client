import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import { alert, ButtonStyle } from '../../../Hooks/useStyle';



const SchoolContact = () => {
    
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
        sx={{ mb: 4, color: "rgba(40,180,133,0.85)", fontWeight: "600",textAlign:"center", fontSize: "30px" }}
        variant="h5"
        component="div"
      >
       Contact Form
      </Typography>
               
              </Box>


              <form  onSubmit={handleSubmit(sendEmail)}>

                <Box sx={{ mt: 3 }} >

                  <TextField id="filled-basic" label="Name" fullWidth
                    variant="filled"{...register("name", { required: true })}
                    placeholder=" Your Name"
                    sx={{ my: 2}} />
                  <TextField id="filled-basic" label="Email" fullWidth
                    variant="filled"{...register("email", { required: true })}
                    placeholder=" Your email"
                    sx={{ my: 2 }} />

                  <TextField id="filled-basic" label="Subject"
                    variant="filled" fullWidth {...register("subject", { required: true })}
                    placeholder="Subject"
                    sx={{ my: 2 }} />



                  <TextField fullWidth
                    id="outlined-multiline-static"
                    variant="filled"
                    label="Massage"
                    multiline
                    rows={4}

                    {...register("description", { required: true })} placeholder=" Your Massage"
                    sx={{ my: 2 }} /> <br />

                   <Box sx={{display: "flex", justifyContent: "center", mt: 2 }}><Button type="submit" fullWidth variant="contained" sx={{
                    color: "#fff",
                    flexBasis: "initial",
                    minHeight: "40px",
                    fontFamily: "Sans-serif",
                    fontSize: "15px",
                    textTransform: "capitalize",
                    letterSpacing: "1px",
                    backgroundImage: "linear-gradient(to right bottom, rgba(126,213,111,0.85), rgba(40,180,133,0.85))",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 1px",
                    borderColor: "#01479b",
                    paddingTop: 0,
                    paddingBottom: 0,
                    border: "none",
                    padding: "12px 24px",
                    display: "inlineBlock",
                    lineHeight: 1,
                    borderRadius: "5px",
                    fill: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: 500,
                    whiteSpace: "nowrap",

                    width: "auto",
                    mb: 2,
                    overflow: "visible",

                  }} endIcon={<SendIcon />}> Send</Button></Box>
                  


                </Box>


              </form>

            </Box>
          </Grid>
        </Grid>

      

      </Container>
    );
};

export default SchoolContact;