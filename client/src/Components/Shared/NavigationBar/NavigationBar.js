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
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';
import useAuth from '../../../Hooks/useAuth';
import { Divider } from '@mui/material';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavigationBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [navbar, setNavbar] = React.useState(false);

    const { user, logOut } = useAuth();

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

    const LinkStyle = { textDecoration: 'none', color: 'black' }
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
                        <Tooltip title='Menu' arrow>
                            <IconButton
                                sx={{ color: 'black' }}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
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
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {/* mobile device menus */}
                            <Link to='/'
                                style={LinkStyle}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Home
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/about'
                                style={LinkStyle}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        About us
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/programs'
                                style={LinkStyle}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Programs
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/parents'
                                style={LinkStyle}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Parent info
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/gallery'
                                style={LinkStyle}>
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
                                style={LinkStyle}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Blog
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/contacts'
                                style={LinkStyle}>
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
                            style={LinkStyle}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >home

                            </Button>
                        </Link>
                        <Link to='/about'
                            style={LinkStyle}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >about us

                            </Button>
                        </Link>
                        <Link to='/programs'
                            style={LinkStyle}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >programs

                            </Button>
                        </Link>
                        <Link to='/parents'
                            style={LinkStyle}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >parent info

                            </Button>
                        </Link>
                        <Link to='/gallery'
                            style={LinkStyle}>
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
                            style={LinkStyle}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >blogs

                            </Button>
                        </Link>
                        <Link to='/contacts'
                            style={LinkStyle}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#211e1e', display: 'block' }}
                            >contacts

                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings" arrow placement="left-end">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ bgcolor: 'rgb(70, 170, 221)' }} alt="Remy Sharp" src={user?.photoURL} />
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
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"> {user?.displayName}</Typography>
                            </MenuItem>

                            <Divider />
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Account</Typography>
                            </MenuItem>
                            <Divider />
                            <NavLink to='/dashboard' style={LinkStyle}>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Dashboard</Typography>
                                </MenuItem>
                            </NavLink>
                            <Divider />
                            {user?.email ?
                                <MenuItem onClick={() => {
                                    handleCloseUserMenu()
                                    logOut()
                                }}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                                :
                                <NavLink to='/login' style={LinkStyle}>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Login</Typography>
                                    </MenuItem>
                                </NavLink>
                            }
                            {/* ))} */}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavigationBar;
