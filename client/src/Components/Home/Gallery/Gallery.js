import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const Gallery = () => {
    return (
        <Box>
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        component="div"
                        sx={{
                            fontStyle: 'italic',
                            fontFamily: 'Georgia'
                        }}
                    >
                        this is Gallery
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Gallery;