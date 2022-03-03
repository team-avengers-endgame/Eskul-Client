import { Button} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Assets/Images/404.png'
import { ButtonStyle } from '../../Hooks/useStyle';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const NotFound = () => {
    return (
        <>
        <NavigationBar/>
        <Box sx={{ display:"flex", justifyContent:"center"}}>
            <img style={{width:"600px"}} src={notFound} alt="" />
        
            
            </Box>
            <Box  sx={{ display:"flex", justifyContent:"center"}}>
            <Link style={{textDecoration: "none"}} to= "/home"><Button sx={ButtonStyle}>Go Home</Button></Link>
            </Box>
            <Footer/>
        </>
    );
};

export default NotFound;