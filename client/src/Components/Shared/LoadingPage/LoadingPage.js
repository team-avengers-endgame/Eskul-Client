import { Box } from '@mui/system';
import React from 'react';
import Img from './flying-bird-gif-bird.gif';
import Logo from './logo.png';
const LoadingPage = () => {
    return (
        <Box >
            <Box sx={{ bgColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <img src={Logo} alt="" /><br />
                    <img src={Img} alt="" />
                    <p>Loading...</p>
                </Box>
            </Box>
        </Box>
    );
};

export default LoadingPage;