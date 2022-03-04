import { Box,  CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../Hooks/Api';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import WifiIcon from '@mui/icons-material/Wifi';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PaidIcon from '@mui/icons-material/Paid';
import SubjectIcon from '@mui/icons-material/Subject';
import SchoolIcon from '@mui/icons-material/School';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ReviewsIcon from '@mui/icons-material/Reviews';
import DetailsIcon from '@mui/icons-material/Details';

// import background from '../../../Assets/Images/tutor-background.jpg'
const TutorDetails = () => {
    const [tutor, setTutor] = useState({});
    const { id} = useParams();
    useEffect(() => {
        fetch(`${api}/privateTeachers/${id}`)
          .then((res) => res.json())
          .then((data) => setTutor(data?.data?.data));
      }, [id]);

      const iconStyle = {display: "flex", alignItems:"center"};
    return (
       <>
       <NavigationBar/>
      <Container>
      <Box sx={{  textAlign: "center" , my: 5 }}>
       <Typography  variant='h3'>
          {tutor?.teacherName}
        </Typography>
        <Typography> No reviews yet</Typography>
       </Box>
       <Grid container  columns={{ xs: 4, sm: 8, md: 12 ,lg:12}}>
              <Grid item xs={4} sm={8} md={8} lg={8}>

                 <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    
                                    <Grid  item xs={4} sm={4} md={8} sx={{mb:5}}>

                                        <Box sx={{textAlign: "justify"}}>
                                            <Typography  variant='body'>
                                                {tutor?.description}
                                            </Typography>
                                  
                                        </Box>
                                

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4}>

                                        <CardMedia
                                            component="img" alt="complex" src={tutor?.teacherPhoto} />
                                           
                                    </Grid>
                                
                                </Grid>
                                <hr />
                                   <Box  sx={{my:5}}>
                                      <span style={iconStyle}> <SubjectIcon color="primary" /> <Typography variant='h5'>Subject</Typography></span>
                                      <br />
                                    <Typography variant='body1'>
                                            {tutor?.subject}
                                     </Typography>
                                     </Box>

                                     <hr />
                                   <Box  sx={{my:5}}>
                                   <span style={iconStyle}> <CheckBoxIcon color="primary" /> <Typography variant='h5'>Experience</Typography></span>
                                      <br />
                                    <Typography variant='body1'>  No experience mentioned.</Typography>
                                     </Box>
                  
                                <hr />
                                   <Box  sx={{my:5}}>
                                   <span style={iconStyle}> <SchoolIcon color="primary" /> <Typography variant='h5'>Education</Typography></span>
                                     
                                      <br />
                                    <Typography variant='body1'>
                                            {tutor?.educationalQualification}
                                     </Typography>
                                     </Box>
                                     <hr />
                                   <Box  sx={{my:5}}>
                                   <span style={iconStyle}> <DetailsIcon color="primary" /> <Typography variant='h5'>Fee details</Typography></span>
                
                                      <br />
                                    <Typography variant='body1'>
                                    ৳ {tutor?.monthlyFee} / per month
                                     </Typography>
                                     </Box>
                                     <hr />
                                   <Box  sx={{my:5}}>
                                   <span style={iconStyle}> <ReviewsIcon color="primary" /> <Typography variant='h5'> Reviews</Typography></span>
                            
                                      <br />
                                      
                                    <Typography variant='body1'>
                                    No reviews yet. Be the first one to <a href="/privateTutor">review this tutor.</a>
                                     </Typography>
                                     </Box>
                                     



                 </Grid>

                 <Grid sx={{ml: 4}} columns={{xs:4, sm: 8, md: 4, lg: 4}}>
                 <Paper
                                sx={{
                                    p: 1,
                                    margin: "auto",
                                    width: 350,
                                    flexGrow: 1,
                                    bgcolor: '#bbdefb'
                                   
                                }}
                            >
            
            <Grid pl={2} my={3} columns={{xs:4, sm: 8, md: 4, lg: 4}}>
            
            <span style={iconStyle}> <EmailIcon color="primary" /><Typography variant='body1' >     {tutor?.email}</Typography></span>
            <br />
            <span style={iconStyle}> <LocationOnIcon color="primary" /><Typography variant='body1' >{tutor?.location}</Typography></span>
            <br />
            <span style={iconStyle}> <LocalCarWashIcon color="primary" /><Typography variant='body1' >Can travel: No</Typography></span>
            <br />
            <span style={iconStyle}> <LockOpenIcon color="primary" /><Typography variant='body1' >Last login: 16 mins ago</Typography></span>
            <br />
            <span style={iconStyle}> <HowToRegIcon color="primary" /><Typography variant='body1' >Registered: Mar 1</Typography></span>
            <br />
            <span style={iconStyle}> <AppRegistrationIcon color="primary" /><Typography variant='body1' > Total Teaching exp: 4.0 yrs.</Typography></span>
            <br />
            <span style={iconStyle}> <WifiIcon color="primary" /><Typography variant='body1' > Online Teaching exp: 4.0 yrs.</Typography></span>
            <br />
            <span style={iconStyle}> <HomeIcon color="primary" /><Typography variant='body1' > Teaches at student's home: No.</Typography></span>
            <br />
            <span style={iconStyle}> <HomeWorkIcon color="primary" /><Typography variant='body1' > Homework Help: Yes</Typography></span>
            <br />
            <span style={iconStyle}> <PaidIcon color="primary" /><Typography variant='body1' > Fee: ৳ {tutor?.monthlyFee} / per month</Typography></span>
    
            </Grid>
            
            </Paper>
            </Grid>
       </Grid>
      </Container>
       
       
    
    
      
       
        
    
       
      <Footer/>
       </>
    );
};

export default TutorDetails;