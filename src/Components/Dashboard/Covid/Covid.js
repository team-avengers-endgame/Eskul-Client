import React from 'react';
import { Typography, Box } from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import Marquee from "react-fast-marquee";

const Covid = () => {
    return (
        <Box sx={{ bgcolor: '#bbdefb' }}>
            <Marquee direction='right'>
                <CoronavirusIcon sx={{ color: 'red' }} />
                <Typography> <a style={{ textDecoration: "none", color: 'black', fontWeight: 'bold' }} href="https://docs.google.com/forms/d/e/1FAIpQLSfvFQyfZbgWwUW8GE8tM1vCa3-44nj1GlDtVRmoM1aaWlediA/viewform"
                >Student Can find out Covid-19 vaccine form here.Just click</a></Typography>
                <CoronavirusIcon sx={{ color: 'red' }} />
            </Marquee>


        </Box>
    );
};

export default Covid;