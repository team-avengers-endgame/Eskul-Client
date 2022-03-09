import { Button, CardMedia, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../../../Hooks/Api';
import useAuth from '../../../../Hooks/useAuth';
import { ButtonStyle } from '../../../../Hooks/useStyle';


const OrderProduct = () => {
    const [books, setBooks] = useState({});
    const {user}=useAuth();
    useEffect(() => {
        fetch(`${api}/myOrder/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setBooks(data);
           
          });
      }, [user.email]);

    return (
        <div>
     <Grid
       container
       spacing={2}
       sx={{ mt: 6 }}
       columns={{ xs: 4, sm: 8, md: 12 }}
     >
       {books.map((single) => (
         <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={8} md={6}>
           <Paper
             sx={{
               p: 1,   
               boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
             }}
           >
             <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
               <Grid item xs={2} sm={4} md={4}>
                 <CardMedia
                   component="img"
                   sx={{ objectFit: "cover", height: 200, width: 'auto' }}
                   alt="complex"
                   src={single?.bookImg}
                 />
               </Grid>
               <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                 <Box>
                   <Typography style={{fontSize:'10px'}}>
                     {single?.bookName}
                     </Typography>

                   <Typography variant="body">
                     <span style={{ fontWeight: 700 }}> লেখক: </span>{" "}
                     <span>{single?.author}</span>
                   </Typography>
                   <br />

                   <Typography variant="body">
                     <span style={{ fontWeight: 700 }}> মূল্যঃ ৳</span>{" "}
                     {single?.bookPrice}
                   </Typography>
                   <br />
                   <Rating
                     name="half-rating-read"
                     defaultValue={single?.rating}
                     precision={0.5}
                     readOnly
                   />
                 </Box>
                 <br />
                 <NavLink
                   to={`/bookDetails/${single._id}`}
                   style={{ textDecoration: "none", marginRight: "5px" }}
                 >
                   <Button size="small" sx={ButtonStyle}>
                     Details
                   </Button>
                 </NavLink>
                
               </Grid>
             </Grid>
           </Paper>
         </Grid>
       ))}
     </Grid>
        </div>
    );
};

export default OrderProduct;