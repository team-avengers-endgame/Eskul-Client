import React from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
const QuickScroll = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
            <IconButton sx={{ color: '#46aadd' }} onClick={() => window.scrollTo(0, 0)}><KeyboardDoubleArrowUpIcon />
            </IconButton>
        </Box>
    );
};

export default QuickScroll;