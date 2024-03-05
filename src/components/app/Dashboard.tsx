import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FC, MouseEvent, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuObject } from "../interfaces/Interfaces";
import {
  AppBar,
  Drawer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../styled/DashboardParts";
import { MainListItems } from "./ListItems";

const MenuList: MenuObject[] = [
  { name: "Profile", icon: <AccountCircleIcon /> },
  { name: "Logout", icon: <ExitToAppIcon /> },
];

const Copyright: FC = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      mt={5}
      gutterBottom
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        SAWA HRIS
      </Link>
      {" " + new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const theme = createTheme({
  palette: {
    primary: { main: "#191970" },
    secondary: { main: "#dc004e" },
  },
});

export default function Dashboard() {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (button: string) => {
    if (button === "Logout") navigate("/login");
    setAnchorElUser(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Container for the entire content */}
        <Box sx={{ display: "flex" }}>
          {/* Drawer Code */}
          <Drawer variant="permanent" open={open}>
            <Toolbar>{/* add logo here */}</Toolbar>
            <Divider />
            <MainListItems />
          </Drawer>

          {/* Main content container */}
          <Container
            component="main"
            maxWidth="xl"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            {/* Appbar Code */}
            <AppBar position="absolute" open={open}>
              <Container maxWidth="xl">
                <Toolbar>
                  {/* drawer toggler */}
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{ mr: "36px" }}
                  >
                    <MenuIcon />
                  </IconButton>

                  {/* app bar text */}
                  <Typography
                    variant="h6"
                    noWrap
                    flexGrow={1}
                    fontWeight={530}
                    letterSpacing={4}
                  >
                    SAWA HRIS
                  </Typography>

                  {/* search bar */}
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Employee.."
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>

                  {/* notification icon */}
                  <IconButton color="inherit" sx={{ ml: "18px" }}>
                    <Badge badgeContent={4} color="info">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>

                  {/* profile button */}
                  <IconButton onClick={handleOpenUserMenu} sx={{ ml: "18px" }}>
                    <Avatar alt="Name" src="/static/images/avatar/2.jpg" />
                  </IconButton>

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
                    {MenuList.map((menuItem: MenuObject, index: number) => (
                      <MenuItem
                        key={index}
                        onClick={() => handleCloseUserMenu(menuItem.name)}
                      >
                        {menuItem.icon}
                        <Typography textAlign="center" marginLeft={2}>
                          {menuItem.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Toolbar>
              </Container>
            </AppBar>

            {/* Component Space */}
            <Toolbar />
            <Container sx={{ flexGrow: 1 }}>
              <Outlet />
              <Copyright />
            </Container>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
