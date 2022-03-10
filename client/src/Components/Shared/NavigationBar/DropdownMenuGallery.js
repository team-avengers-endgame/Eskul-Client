import { Button, Divider, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkStyle } from '../../../Hooks/useStyle';

const DropdownMenuGallery = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <span>
            <Button
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: "#211e1e", display: "block" }}
            >
                Features
            </Button>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                <Link to="/donation" style={LinkStyle}>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Donation</Typography>
                    </MenuItem>
                </Link>
                <Divider />
                <Link to="/notes" style={LinkStyle}>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Notes</Typography>
                    </MenuItem>
                </Link>
                <Divider />
                <Link to="/transport" style={LinkStyle}>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Transport</Typography>
                    </MenuItem>
                </Link>
            </Menu>
        </span>
    );
};

export default DropdownMenuGallery;