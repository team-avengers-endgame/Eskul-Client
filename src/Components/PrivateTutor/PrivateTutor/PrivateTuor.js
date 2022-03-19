import { Box, Button, CardMedia, Container, Grid, Pagination, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../../Hooks/Api';
import useAuth from '../../../Hooks/useAuth';
import { alert, ButtonStyle } from '../../../Hooks/useStyle';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import SearchBar from '../../Shared/SearchBar/SearchBar';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';

const PrivateTuor = () => {
    const [teachers, setTeachers] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const { privateTeacherCount } = useAuth();
    const [page,setPage]=useState(1);
    useEffect(() => {
        fetch(`${api}/privateTeachers?page=${page}&limit=10`)
            .then(res => res.json())
            .then(data => {
                setTeachers(data?.data?.data);
                setSearchValue(data?.data?.data)
            })
    }, [page])

    /*************** searching *****************/
    const handleOnChange = (e) => {
        const value = e.target.value;
        const newValue = teachers?.filter(s => s.subject.toLowerCase().includes(value.toLowerCase()) || s.location.toLowerCase().includes(value.toLowerCase()))
        newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        setSearchValue(newValue)
    }

    const placeholder = 'Search by Teacher name or Location';
    return (
        <>
            <NavigationBar />
            <SharedBanner pageName={"Online Private Tutor"} />

            <Container>
                <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />


                <Grid container spacing={2} sx={{ mt: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {searchValue?.map((single) => (
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


                                    </Grid>
                                    <Grid item xs={2} sm={4} md={8}>

                                        <Box>
                                            <Typography variant='h6'

                                            >
                                                {single?.teacherName}
                                            </Typography>

                                            <Typography variant="body" >
                                                <span style={{ fontWeight: 700 }}> Subject: </span> <span >{single?.subject}</span>
                                            </Typography>
                                            <br />

                                            <Typography variant="body" ><span
                                                style={{ fontWeight: 700 }}> Monthly Fee: </span> ৳{single?.monthlyFee}
                                            </Typography>
                                            <br />
                                            <Typography variant="body" ><span
                                                style={{ fontWeight: 700 }}> Email:  </span>
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


                <Stack spacing={2}>

                    <Pagination onChange={(e, value) => setPage(value)}
                        count={Math.ceil(privateTeacherCount / 10)}
                        color="secondary"
                        showFirstButton
                        showLastButton />

                </Stack>
            </Container>
            <Footer />

        </>
    );
};

export default PrivateTuor;