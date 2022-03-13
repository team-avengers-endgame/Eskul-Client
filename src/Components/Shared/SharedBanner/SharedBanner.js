import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import bg from '../../../Assets/Images/slider.png';


const SharedBanner = ({ pageName }) => {
    return (
        <Box sx={{
            width: '100%',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            my: 3
        }}>
            <Container sx={{ py: 15 }}>
                <Typography
                    variant="h3"
                    component="div"
                    sx={{
                        fontWeight: '500',
                        color: '#3B4757',
                        textAlign: 'center'
                    }}
                >
                    {pageName}
                </Typography>
            </Container>
        </Box>
    );
};

export default SharedBanner;