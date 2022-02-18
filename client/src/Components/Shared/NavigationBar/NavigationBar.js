import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavigationBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [navbar, setNavbar] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    //navbar activity handler
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <AppBar position={navbar ? 'sticky' : 'static'}
            sx={navbar ? { backgroundColor: '#c3e9fff0' }
                :
                { backgroundColor: 'transparent', boxShadow: 'none' }
            }
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img style={{
                            height: '45px',
                            objectFit: 'contain'
                        }} src={logo} alt="" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* mobile device menus */}
                            <Link to='/'
                                style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Home
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/about'
                                style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        About us
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/programs'
                                style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Programs
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/parents'
                                style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Parent info
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/gallery'
                                style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Gallery
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    Pages
                                </Typography>
                            </MenuItem>
                            <Link to='/blog'
                                style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Blog
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/contacts'
                                style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Contacts
                                    </Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img style={{
                            height: '45px',
                            objectFit: 'contain'
                        }} src={logo} alt="" />

                    </Typography>

                    {/* large device menus */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >home

                            </Button>
                        </Link>
                        <Link to='/about'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >about us

                            </Button>
                        </Link>
                        <Link to='/programs'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >programs

                            </Button>
                        </Link>
                        <Link to='/parents'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >parent info

                            </Button>
                        </Link>
                        <Link to='/gallery'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >gallery

                            </Button>
                        </Link>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#211e1e', display: 'block' }}
                        >pages

                        </Button>
                        <Link to='/blogs'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >blogs

                            </Button>
                        </Link>
                        <Link to='/contacts'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >contacts

                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavigationBar;
