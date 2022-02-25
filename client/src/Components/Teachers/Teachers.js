
import { styled } from '@material-ui/styles';
import { ButtonBase, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const teachers = [
    {
        id: '1',
        name: 'John',
        discription: '',
        img: 'https://i.ibb.co/z4zdft6/280-2804197-learn-english-online-english-course-am-a-teacher.jpg',
        institution: '',
        qualification: '',
        age: 18,
        aria: '',
        subject: '',
        time: '',
        fee: '',

    },
    {
        id: '1',
        name: 'John',
        discription: '',
        img: 'https://i.ibb.co/z4zdft6/280-2804197-learn-english-online-english-course-am-a-teacher.jpg',
        institution: '',
        qualification: '',
        age: 18,
        aria: '',
        subject: '',
        time: '',
        fee: '',

    },
    {
        id: '1',
        name: 'John',
        discription: '',
        img: 'https://i.ibb.co/z4zdft6/280-2804197-learn-english-online-english-course-am-a-teacher.jpg',
        institution: '',
        qualification: '',
        age: 18,
        aria: '',
        subject: '',
        time: '',
        fee: '',

    },
    {
        id: '1',
        name: 'John',
        discription: '',
        img: 'https://i.ibb.co/z4zdft6/280-2804197-learn-english-online-english-course-am-a-teacher.jpg',
        institution: '',
        qualification: '',
        age: 18,
        aria: '',
        subject: '',
        time: '',
        fee: '',

    },
    {
        id: '1',
        name: 'John',
        discription: '',
        img: 'https://i.ibb.co/z4zdft6/280-2804197-learn-english-online-english-course-am-a-teacher.jpg',
        institution: '',
        qualification: '',
        age: 18,
        aria: '',
        subject: '',
        time: '',
        fee: '',

    },
    {
        id: '1',
        name: 'John',
        discription: '',
        img: 'https://i.ibb.co/z4zdft6/280-2804197-learn-english-online-english-course-am-a-teacher.jpg',
        institution: '',
        qualification: '',
        age: 18,
        aria: '',
        subject: '',
        time: '',
        fee: '',

    },
]



const Teachers = () => {
    const Img = styled("img")({
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    });



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


                <Grid container spacing={2}>
                    {teachers.map((single) => (
                        <Grid sx={{ py: 3 }} key={single.id} item xs={12} sm={12} md={6}>
                            <Paper
                                sx={{
                                    p: 2,
                                    margin: "auto",
                                    maxWidth: 500,
                                    flexGrow: 1,
                                    boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase sx={{ width: 128, height: 128 }}>
                                            <Img alt="complex" src={single.img} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={6} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography
                                                    gutterBottom
                                                    variant="subtitle1"
                                                    component="div"
                                                >
                                                    Name: {single.name}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Discription:{single.discription}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Qualification: {single.qualification}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Institution: {single.institution}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Age: {single.age}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Subject: {single.subject}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Area: {single.aria}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Area: {single.time}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Fee: {single.fee}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ cursor: "pointer" }} variant="body2">
                                                    Hire me
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Teachers;