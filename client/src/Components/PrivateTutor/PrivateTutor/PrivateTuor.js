import { Box,ButtonBase, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../../Hooks/Api';
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
                                            {/* <Typography variant="body2" ><span
                                            style={{ fontWeight: 700}}> Email:  </span>
                                                {single?.email}
                                            </Typography> */}
                                        </Box>
                                        <br />
                                       <NavLink
                        to={`/tutorDetails/${single._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ButtonBase
                          sx={{
                            color: "#fff",
                            flexBasis: "initial",
                            minHeight: "30px",
                            fontFamily: "Sans-serif",
                            fontSize: "12px",
                            textTransform: "capitalize",
                            letterSpacing: "0px",
                            backgroundColor: "#01479b",
                            borderStyle: "solid",
                            borderWidth: "1px 1px 1px 1px",
                            borderColor: "#01479b",
                            paddingTop: 0,
                            paddingBottom: 0,
                            border: "none",
                            padding: "6px 12px",
                            display: "inlineBlock",
                            mb: { xs: 2 },
                            borderRadius: "5px",
                            fill: "#FFFFFF",
                            textAlign: "center",
                            fontWeight: 400,
                            whiteSpace: "nowrap",
                            userSelect: "none",
                            width: "auto",

                            overflow: "visible",
                            "&:hover": {
                              backgroundColor: "black",
                            },
                          }}
                        >
                          Details
                        </ButtonBase>
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