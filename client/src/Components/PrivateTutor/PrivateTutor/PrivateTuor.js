import { Box,Button,ButtonBase, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../../Hooks/Api';
import { ButtonStyle } from '../../../Hooks/useStyle';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';

const PrivateTuor = () => {
    const [teachers, setTeachers] = useState([]);
    // const [pageCount, setPageCount] = useState()
    useEffect(() => {
        fetch(`${api}/privateTeachers`)
            .then(res => res.json())
            .then(data => setTeachers(data?.data?.data))
    }, [])

    return (
        <>
          <NavigationBar />
              <SharedBanner pageName={"Online Private Tutor"} />
              
            <Container>
        


                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {teachers.map((single) => (
                        <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={8} md={6}>
                            <Paper
                                sx={{
                                    p: 1,
                                    margin: "auto",
                                    maxWidth: 500,
                                    flexGrow: 1,
                                    boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
                                }}
                            >
                                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={2} sm={4} md={4}>

                                        <CardMedia
                                            component="img"
                                            sx={{ objectFit: 'cover', objectPosition: '15% 100%', borderRadius: '50%' }} alt="complex" src={single?.teacherPhoto} />
                                        {/* <Typography sx={{ cursor: "pointer", textAlign: 'center', color: '#007c65' }} variant="body2">
                                            Hire me
                                        </Typography> */}

                                    </Grid>
                                    <Grid item xs={2} sm={4} md={8}>

                                        <Box>
                                            <Typography variant='h6'
                                               
                                            >
                                                {single?.teacherName}
                                            </Typography>

                                            <Typography variant="body" >
                                              <span style={{ fontWeight: 700}}> Subject: </span> <span >{single?.subject}</span>
                                            </Typography>
                                        
                                          <br />

                                            <Typography variant="body" ><span
                                            style={{ fontWeight: 700}}> Monthly Fee: </span> ৳{single?.monthlyFee}
                                            </Typography>
                                            <br />
                                            <Typography variant="body" ><span
                                            style={{ fontWeight: 700}}> Email:  </span>
                                                {single?.email}
                                            </Typography>
                                        </Box>
                                        <br />
                                       <NavLink
                        to={`/tutorDetails/${single._id}`}
                        style={{ textDecoration: "none" }}
                      >
                                            <Button size='small' sx={ButtonStyle}>Details</Button>

                      </NavLink>

                                    </Grid>
                                </Grid>

                            </Paper>
                        </Grid>
                    ))}
                </Grid>
              

             
            </Container>
            <Footer />
      
        </>
    );
};

export default PrivateTuor;