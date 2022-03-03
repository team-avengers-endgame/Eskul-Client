import { Box, Typography } from '@mui/material';
import React from 'react';
import Marquee from "react-fast-marquee";
import bkash from "../../../Assets/Images/bkash.jpg"
import mcash from "../../../Assets/Images/nogod.png"
import ucash from "../../../Assets/Images/u-cash.jpeg"
import rocket from "../../../Assets/Images/rocket (1).png"
import Bird from './Img/flying-bird-gif-bird.gif';
const Partners = () => {
    return (

        <Box >
            <Typography variant="h3" sx={{ lineHeight: '30px', py: 5, textAlign: 'center', fontWeight: '500', color: '#3B4757' }} >
                Our Partners
            </Typography>
          

            {/* <Marquee style={{ display: 'flex', alignItems: '', justifyContent: 'space-between' }}> */}
            <Marquee direction="right" >


                <Box>
                    <img style={{ width: "150px" }} src={bkash} alt="" />
                    <img style={{ width: "150px" }} src={mcash} alt="" />
                    <img style={{ width: "150px" }} src={ucash} alt="" />
                    <img style={{ width: "150px" }} src={Bird} alt="" />
                    <img style={{ width: "150px" }} src={rocket} alt="" />
                    <img style={{ width: "150px" }} src={bkash} alt="" />
                    <img style={{ width: "150px" }} src={mcash} alt="" />
                    <img style={{ width: "150px" }} src={ucash} alt="" />
                  
                </Box>
            </Marquee>



            {/* </Marquee> */}
        </Box>

    );
};

export default Partners;