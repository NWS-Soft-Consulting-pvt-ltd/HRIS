import LockOpenIcon from "@mui/icons-material/LockOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;
const NAV_COLOR = "#34495E";
const DRWR_COLOR = "#707e8b";
const BTN_COLOR = "#F5F5F5";
const HEAD_COLOR = "#F5F5F5";
const DRWR_TXT_COLOR = "#F5F5F5";

const navItems = [
  { name: "Home", path: "/", active: true },
  { name: "About Us", path: "/aboutUs" },
  { name: "Services", path: "/services" },
  {
    name: "Features",
    path: "/feature",
    subItems: [
      { name: "Payroll", path: "/feature1" },
      { name: "Recuirtment", path: "/feature2" },
    ],
  },
  { name: "Contact Us", path: "/contactUs" },
  {
    name: "Log in",
    path: "/login",
    endIcon: <LockOpenIcon />,
  },
];

// styled components
const LogoImg = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: 40,
    height: "auto",
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down("xs")]: {
    width: 30,
    height: "auto",
    marginRight: theme.spacing(1),
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#0000FF"),
  backgroundColor: "#71869A",
  "&:hover": { backgroundColor: "#D3D3D3" },
}));

const DrawerTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  [theme.breakpoints.down("xs")]: {
    display: "block",
    paddingLeft: theme.spacing(1),
  },
}));

const ResGridTitleLogo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    paddingLeft: theme.spacing(1),
    flexGrow: 1,
    alignItems: "left",
    justifyContent: "center",
  },
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    paddingLeft: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexGrow: 1,
    paddingRight: theme.spacing(8),
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [customShadow, setCustomShadow] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <DrawerTitle variant="body2" sx={{ my: 2 }}>
        {/* <LogoImg
          src="https://ik.imagekit.io/nwssoft/NWS_Prerna_Project/prerna-academy-logo.png?updatedAt=167956941364"
          width="40px"
          alt="logo"
        /> */}
        <br />
        NWS SOFT PAYROLL
      </DrawerTitle>
      <Divider />

      <List color="#191970">
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
              onClick={() => handlePayButton(item.path)}
            >
              <ListItemText primary={item.name} />
              {item.subItems && (
                <List>
                  {item.subItems.map((subItems) => (
                    <ListItem
                      key={subItems.name}
                      disablePadding
                      sx={{ textAlign: "center" }}
                    >
                      <ListItemButton
                        onClick={() => handlePayButton(item.path)}
                      >
                        <ListItemText primary={subItems.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handlePayButton = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Grid container sx={{ display: "flex", zIndex: 999 }}>
        <CssBaseline />
        <AppBar
          component="nav"
          position="fixed"
          sx={{
            background: NAV_COLOR,
            backgroundAttachment: "fixed",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundColor: {
              top: 0,
              lg: NAV_COLOR,
              md: NAV_COLOR,
              xl: NAV_COLOR,
              sx: NAV_COLOR,
              sm: NAV_COLOR,
            },
            transition: "background-color 0.9s ease-in-out",
            boxShadow: customShadow,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "block", md: "block", lg: "none" },
                  color: { sm: BTN_COLOR, md: BTN_COLOR, lg: BTN_COLOR },
                }}
              >
                <MenuIcon />
              </IconButton>

              <ResGridTitleLogo
                container
                item
                lg={12}
                xl={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                p={2}
              >
                <Grid
                  item
                  xs={12}
                  xl={4}
                  md={4}
                  sm={12}
                  lg={4}
                  display="flex"
                  alignItems="center"
                  sx={{
                    justifyContent: {
                      sx: "center",
                      xs: "center",
                      lg: "flex-start",
                      xl: "flex-start",
                      md: "flex-start",
                    },
                  }}
                >
                  {/* <LogoImg
                    src="https://ik.imagekit.io/nwssoft/NWS_Prerna_Project/prerna-academy-logo.png?updatedAt=1679569413646"
                    width="40px"
                    alt="logo"
                  /> */}
                  <Typography
                    fontWeight="600"
                    variant="h5"
                    textTransform="uppercase"
                    sx={{
                      color: {
                        xs: HEAD_COLOR,
                        sm: HEAD_COLOR,
                        lg: HEAD_COLOR,
                        md: HEAD_COLOR,
                        xl: HEAD_COLOR,
                      },
                      letterSpacing: "2px",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    NWS SOFT PAYROLL
                  </Typography>
                </Grid>

                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  xs={8}
                  xl={8}
                  md={8}
                  sm={8}
                  lg={8}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex",
                    },
                    justifyContent: {
                      sx: "center",
                      xs: "center",
                      lg: "flex-end",
                      xl: "flex-end",
                      md: "flex-end",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ textTransform: "none" }}
                  >
                    {navItems.map((item) => (
                      <ColorButton
                        key={item.name}
                        // variant={item.variant || "text"}
                        endIcon={item.endIcon}
                        size="medium"
                        sx={{
                          // backgroundColor: (theme) =>
                          //   location.pathname === item.path
                          //     ? theme.palette.primary.main
                          //     : "",
                          // color: BTN_COLOR,
                          textTransform: "none",
                          fontWeight: "600",
                          fontFamily: "'Nunito Sans', sans-serif",
                          fontSize: "1.5 rem",
                          ml: "1",
                          "&:visited": {
                            color:
                              "orange" /* desired text color for visited button */,
                          },
                        }}
                        onClick={() => handlePayButton(item.path)}
                      >
                        {item.name}
                      </ColorButton>
                    ))}
                  </Stack>
                </Grid>
              </ResGridTitleLogo>
            </Toolbar>
          </Container>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }} // Better open performance on mobile.
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: DRWR_COLOR,
                color: DRWR_TXT_COLOR,
                textShadow:
                  "0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.5),0px 18px 23px rgba(0,0,0,0.1)",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Grid>
    </>
  );
}
