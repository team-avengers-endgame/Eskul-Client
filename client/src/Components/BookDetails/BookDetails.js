import { Box,  CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../Hooks/Api';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';


// import background from '../../../Assets/Images/tutor-background.jpg'
const BookDetails = () => {
    const [book, setBook] = useState({});
    const { id} = useParams();
    useEffect(() => {
        fetch(`${api}/books/${id}`)
          .then((res) => res.json())
          .then((data) => setBook(data?.data?.data));
      }, [id]);
console.log(id);
    //   const iconStyle = {display: "flex", alignItems:"center"};
    return (
       <>
       <NavigationBar></NavigationBar>
       <h1>bjksgnxc bnvxcmvbh</h1>
      <Container>
      <Box sx={{  textAlign: "center" , my: 5 }}>
       <Typography  variant='h3'>
          {book?.bookName}
        </Typography>
        <Typography> {book?.rating}</Typography>

        
       </Box>
   
      </Container>
       
       
    
    
      
       
        
    
       
      <Footer/>
       </>
    );
};

export default BookDetails;