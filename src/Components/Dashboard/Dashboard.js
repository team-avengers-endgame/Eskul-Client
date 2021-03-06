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
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Toolbar from '@mui/material/Toolbar';
import { LinkStyle } from '../../Hooks/useStyle';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Avatar, Collapse, ListItemButton, ListItemText } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddCardIcon from '@mui/icons-material/AddCard';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PreviewIcon from '@mui/icons-material/Preview';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const drawerWidth = 240;
function Dashboard(props) {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openListSchool, setOpenListSchool] = React.useState(false);
    const [openListBooks, setOpenListBooks] = React.useState(false);
    const [openListTutor, setOpenListTutor] = React.useState(false);

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClickListSchool = () => {
        setOpenListSchool(!openListSchool);
    };
    const handleClickListBooks = () => {
        setOpenListBooks(!openListBooks);
    };
    const handleClickListTutor = () => {
        setOpenListTutor(!openListTutor);
    };


    const drawer = (
        <div>

            <Toolbar>
                <Link to='/home' style={LinkStyle}>
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
                <NavLink to='/' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        Home
                    </ListItem>
                </NavLink>
                <Divider />

                <NavLink to='/dashboard' style={{ ...LinkStyle }} >
                    <ListItem button >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        Dashboard
                    </ListItem>
                </NavLink>


                <Divider />

                {admin && <span>
                    {/* ------------------------------- */}
                    <ListItemButton onClick={handleClickListSchool}>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Schools" />
                        {openListSchool ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openListSchool} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <NavLink to='/dashboard/addASchool' style={LinkStyle}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <AddCircleOutlinedIcon />
                                    </ListItemIcon>
                                    Add A School
                                </ListItem>
                            </NavLink>

                            <NavLink to='/dashboard/schools' style={LinkStyle}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <SchoolIcon />
                                    </ListItemIcon>
                                    Schools
                                </ListItem>
                            </NavLink>

                        </List>
                    </Collapse>
                    {/* ------------------------------- */}
                    <Divider />
                    <ListItemButton onClick={handleClickListBooks}>
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        <ListItemText primary="Books" />
                        {openListBooks ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openListBooks} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <NavLink to='/dashboard/addABook' style={LinkStyle}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <AddCircleOutlinedIcon />
                                    </ListItemIcon>
                                    Add a Book
                                </ListItem>
                            </NavLink>


                            <NavLink to='/dashboard/books' style={LinkStyle}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <MenuBookIcon />
                                    </ListItemIcon>
                                    Books
                                </ListItem>
                            </NavLink>
                        </List>
                    </Collapse>

                    {/* ----------------------------- */}
                    <Divider />


                    {/* ------------------------------- */}

                    <ListItemButton onClick={handleClickListTutor}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tuition" />
                        {openListBooks ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openListTutor} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <NavLink to='/dashboard/addOnlineTuition' style={LinkStyle}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <AddCircleOutlinedIcon />
                                    </ListItemIcon>
                                    Add Tuition Teachers
                                </ListItem>
                            </NavLink>

                            <NavLink to='/dashboard/onlineTuitionTeachers' style={LinkStyle}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <AddCardIcon />
                                    </ListItemIcon>
                                    Tuition Teachers
                                </ListItem>
                            </NavLink>

                        </List>
                    </Collapse>

                    {/* ----------------------------- */}
                    <Divider />




                    <Divider />
                    <NavLink to='/dashboard/manageOrder' style={LinkStyle}>
                        <ListItem button >
                            <ListItemIcon>
                                <AddShoppingCartIcon />
                            </ListItemIcon>
                            Manage Order
                        </ListItem>
                    </NavLink>

                    <Divider />
                    <NavLink to='/dashboard/donations' style={LinkStyle}>
                        <ListItem button >
                            <ListItemIcon>
                                <VolunteerActivismIcon />
                            </ListItemIcon>
                            Donations
                        </ListItem>
                    </NavLink>
                    <Divider />
                    <NavLink to='/dashboard/makeAdmin' style={LinkStyle}>
                        <ListItem button >
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            Make an Admin
                        </ListItem>
                    </NavLink>
                </span>

                }
                {
                    user.email && !admin &&
                    <span>
                        <Divider />
                        <NavLink to='/dashboard/myOrder' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                My Order
                            </ListItem>
                        </NavLink>
                        <Divider />
                        <NavLink to='/dashboard/myDonations' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon>
                                    <VolunteerActivismIcon />
                                </ListItemIcon>
                                My Donations
                            </ListItem>
                        </NavLink>
                        <Divider />
                        <NavLink to='/dashboard/webSiteReviewFrom' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon>
                                    <PreviewIcon />
                                </ListItemIcon>
                                Review
                            </ListItem>
                        </NavLink>

                    </span>
                }
                <Divider />

                {user.email ?
                    <ListItem style={LinkStyle} button onClick={() => logOut(navigate)}>
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
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
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
