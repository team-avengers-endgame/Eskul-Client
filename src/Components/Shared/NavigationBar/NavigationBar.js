import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import useAuth from "../../../Hooks/useAuth";
import { Divider } from "@mui/material";
import DropdownMenuPage from "./DropdownMenuPage";
import DropdownMenuGallery from "./DropdownMenuGallery";
import NotificationIcon from "./NotificationIcon";
import CartDrawer from "./CartDrawer";


const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [navbar, setNavbar] = React.useState(false);

  const { user, logOut } = useAuth();

  const navigate = useNavigate();

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
  window.addEventListener("scroll", changeBackground);

  const LinkStyle = { textDecoration: "none", color: "black" };
  return (
    <AppBar
      position={navbar ? "fixed" : "static"}
      sx={
        navbar
          ? { backgroundColor: "#c3e9fff0" }
          : { backgroundColor: "transparent", boxShadow: "none" }
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              style={{
                height: "45px",
                objectFit: "contain",
              }}
              src={logo}
              alt=""
            />
          </Typography>

          {/* large device menus */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/" style={LinkStyle}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#211e1e", display: "block" }}
              >
                home
              </Button>
            </NavLink>

            <NavLink  to="/schools" style={LinkStyle}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#211e1e", display: "block" }}
              >
                Schools
              </Button>
            </NavLink>
            <Link to="/privateTutor" style={LinkStyle}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#211e1e", display: "block" }}
              >
                Private Tutor
              </Button>
            </Link>
          

            <Link to="/about" style={LinkStyle}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#211e1e", display: "block" }}
              >
                About Us
              </Button>
            </Link>
            <DropdownMenuGallery />
            <DropdownMenuPage />
            <Link to="/contacts" style={LinkStyle}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#211e1e", display: "block" }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Menu" arrow>
              <IconButton
                sx={{ color: "black" }}
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* mobile device menus */}
              <Box>
                <Tooltip title="Open settings" arrow placement="left-end">
                  <IconButton onClick={handleOpenUserMenu} sx={{ ml: 1, p: 0 }}>
                    <Avatar
                      sx={{ bgcolor: "rgb(70, 170, 221)" }}
                      alt="Remy Sharp"
                      src={user?.photoURL}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Link to="/" style={LinkStyle}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to="/about" style={LinkStyle}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About us</Typography>
                </MenuItem>
              </Link>
              <Link to="/schools" style={LinkStyle}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Schools</Typography>
                </MenuItem>
              </Link>
            
              <Link to="/privateTutor" style={LinkStyle}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Private Tutor</Typography>
                </MenuItem>
              </Link>
              <DropdownMenuGallery />
              <DropdownMenuPage />
             
            
              <Link to="/contacts" style={LinkStyle}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contacts</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              style={{
                height: "45px",
                objectFit: "contain",
              }}
              src={logo}
              alt=""
            />
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <CartDrawer />
            <NotificationIcon />

            <Box sx={{ display: { xs: "none", sm: "inline", md: "inline" } }}>
              <Tooltip title="Open settings" arrow placement="left-end">
                <IconButton onClick={handleOpenUserMenu} sx={{ ml: 1, p: 0 }}>
                  <Avatar
                    sx={{ bgcolor: "rgb(70, 170, 221)" }}
                    alt="Remy Sharp"
                    src={user?.photoURL}
                  />
                </IconButton>
              </Tooltip>
            </Box>
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
              {user.displayName && (
                <span>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      {" "}
                      {user?.displayName}
                    </Typography>
                  </MenuItem>{" "}

                </span>
              )}
              <Divider />
              <NavLink to="/dashboard/profile" style={LinkStyle}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              </NavLink>


              {
                user.email &&
                <span>
                  <Divider />
                  <NavLink to="/dashboard" style={LinkStyle}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Dashboard</Typography>
                    </MenuItem>
                  </NavLink>
                </span>
              }

              <Divider />
              {user?.email ? (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    logOut(navigate);
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ) : (
                <NavLink to="/login" style={LinkStyle}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </NavLink>
              )}

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
