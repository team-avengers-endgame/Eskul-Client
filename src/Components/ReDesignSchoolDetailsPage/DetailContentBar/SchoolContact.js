import { Button, Container, TextField } from '@mui/material';
import React from 'react';

const SchoolContact = () => {
    const sendEmail = e =>{
        e.preventDefault();   }
    return (
        <Container >
        <h1 style={{color:"salmon",fontSize:"40px"}}>Contact Form</h1>
      <form style={{margin:" 0 auto"}}  onSubmit={sendEmail}>
      <TextField 
      sx={{width:"90%",marginTop:"2%"}}
      id="standard-basic" 
      name="name"
      label="Name" 
      variant="standard" /> <br />
      <TextField 
      sx={{width:"90%",marginTop:"2%"}}
      id="standard-basic" 
      name="email"
      label="Email" 
      variant="standard" /> <br />
      <TextField 
      sx={{width:"90%",marginTop:"2%"}}
      id="standard-basic" 
      name="subject"
      label="Subject" 
      variant="standard" /> <br />
      <TextField
      sx={{width:"90%",marginTop:"2%"}}
     id="filled-multiline-static"
     name="message"
     label="Message"
     multiline
     rows={4}
     variant="filled"
   /> <br />
   <Button style={{backgroundColor:"salmon",color:"white",marginTop:"5%",marginBottom:"10%"}} type="submit">Submit</Button>
      </form>
   </Container>
    );
};

export default SchoolContact;