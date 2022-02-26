import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Logo from './logo.png';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { LinkStyle } from '../../Hooks/useStyle';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Avatar } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddCardIcon from '@mui/icons-material/AddCard';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const drawerWidth = 240;
function Dashboard(props) {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    console.log(admin)

    const drawer = (
        <div>

            <Toolbar>
                <Link to='/dashboard' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <Avatar alt="User Logo" src={user?.photoURL} />
                        </ListItemIcon>
                        {user.displayName}
                    </ListItem>
                </Link>
            </Toolbar>
            <List>
                <Divider />
                <NavLink to='/home' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        home
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/dashboard/addASchool' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        Add A School
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/dashboard/schools' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        Schools
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/dashboard/addOnlineTuition' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <AddCardIcon />
                        </ListItemIcon>
                        Add a Online Tuition
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/dashboard/addABook' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <AddCardIcon />
                        </ListItemIcon>
                        Add a Book
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/dashboard/books' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        Books
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/dashboard/makeAdmin' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <AdminPanelSettingsIcon />
                        </ListItemIcon>
                        Make a Admin
                    </ListItem>
                </NavLink>

                <Divider />

                {user.email ?
                    <ListItem style={LinkStyle} button onClick={logOut}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        Logout
                    </ListItem> :
                    <Link to='/login' style={LinkStyle}>
                        <ListItem button onClick={logOut}>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            Login
                        </ListItem>
                    </Link>

                }
                <Divider />
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"

                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: '#c3e9fff0',

                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img style={{ height: '45px', objectFit: 'contain' }}
                        src={Logo} alt="" />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'secondary !important' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
