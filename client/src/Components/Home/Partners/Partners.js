import { Box, Typography } from '@mui/material';
import React from 'react';

const Partners = () => {
    return (
        <Box sx={{ textAlign: 'center', lineHeight: '30px', height: '250px', p: '20px' }}>
            <Typography variant="h4" >
                Our Partners
            </Typography>
            <Typography sx={{ marginBottom: '20px' }} variant="body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem molestias atque maiores id laboriosam, necessitatibus tenetur deleniti fugit, quisquam nostrum voluptate voluptates nisi dignissimos ipsa repudiandae perspiciatis aliquam sed laudantium!
            </Typography>

            <Box>
                <img src="https://i.ibb.co/ZHDmnMD/client3-logo.png" alt="" />
                <img src="https://i.ibb.co/6nmD40z/client2-logo.png" alt="" />

                <img src="https://i.ibb.co/2YKxQ78/client1-logo.png" alt="" />

                <img src="https://i.ibb.co/RcCvBHQ/client4-logo.png" alt="" />


            </Box>

        </Box>
    );
};

export default Partners;