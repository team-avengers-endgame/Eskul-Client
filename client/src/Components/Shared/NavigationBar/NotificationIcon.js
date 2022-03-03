import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton } from '@mui/material';

const NotificationIcon = () => {
    return (
        <IconButton

            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
        >
            <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{ color: '#46aadd' }} />
            </Badge>

        </IconButton>
    );
};

export default NotificationIcon;