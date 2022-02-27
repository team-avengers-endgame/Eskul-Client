import { Box, Typography } from '@mui/material';
import React from 'react';
import Marquee from "react-fast-marquee";
import Bird from './Img/flying-bird-gif-bird.gif';
const Partners = () => {
    return (

        <Box >
            <Typography variant="h4" sx={{ lineHeight: '30px', py: 5, textAlign: 'center' }} >
                Our Partners
            </Typography>

            {/* <Marquee style={{ display: 'flex', alignItems: '', justifyContent: 'space-between' }}> */}
            <Marquee direction="right" >


                <Box >
                    <img src="https://i.ibb.co/ZHDmnMD/client3-logo.png" alt="" />
                    <img src="https://i.ibb.co/6nmD40z/client2-logo.png" alt="" />
                    <img src="https://i.ibb.co/2YKxQ78/client1-logo.png" alt="" />
                    <img src={Bird} alt="" />
                    <img src="https://i.ibb.co/RcCvBHQ/client4-logo.png" alt="" />
                    <img src="https://i.ibb.co/6nmD40z/client2-logo.png" alt="" />
                    <img src="https://i.ibb.co/2YKxQ78/client1-logo.png" alt="" />
                </Box>
            </Marquee>



            {/* </Marquee> */}
        </Box>

    );
};

export default Partners;