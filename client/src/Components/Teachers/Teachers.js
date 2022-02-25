import React, { useEffect, useState } from 'react';
import { CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { api } from '../../Hooks/Api';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';





const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch(`${api}/privateTeachers`)
            .then(res => res.json())
            .then(data => setTeachers(data?.data?.data))
    }, [])

    return (
        <>
            <NavigationBar />
            <Container>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "500",
                        fontSize: 42,
                        color: "#3B4757",
                        textAlign: "center",
                        py: 3,
                    }}
                    gutterBottom
                    component="div"
                >
                    Online Teachers
                </Typography>


                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {teachers.map((single) => (
                        <Grid sx={{ py: 3 }} key={single._id} item xs={12} sm={12} md={4}>
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
                                        <Typography sx={{ cursor: "pointer", textAlign: 'center', color: '#007c65' }} variant="body2">
                                            Hire me
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={2} sm={4} md={8}>

                                        <Box>
                                            <Typography variant='h6'
                                                sx={{ color: '#46aadd' }}
                                            >
                                                {single?.teacherName}
                                            </Typography>



                                            <Typography variant="body2" color="text.secondary">
                                                Qualification: {single.educationalQualification}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Subject: <span style={{ color: '#dc00ef' }}>{single?.subject}</span>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Area: {single?.location}
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                ৳: <span style={{ color: 'red' }}>{single?.monthlyFee}</span>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Email: {single?.email}
                                            </Typography>
                                        </Box>

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

export default Teachers;