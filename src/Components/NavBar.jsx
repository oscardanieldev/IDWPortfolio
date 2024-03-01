import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import {Button, ButtonGroup, Link } from "@mui/material";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem"; 
import LogoDevIcon from "@mui/icons-material/LogoDev";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './Components.css';
import { changeLanguage } from "i18next";
import { US, MX } from 'country-flag-icons/react/3x2'
import {useTranslation} from "react-i18next"
import { FaCodepen } from "react-icons/fa6";


// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {

  const saveLanguage = (language) => {
    sessionStorage.setItem("sessionLanguage", language);
    changeLanguage(language)
  }
  const [t, i18n] = useTranslation("global");


  const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <AppBar position="static" color="transparent" className="gris">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RocketLaunchIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "aqua" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            OSCAR DANIEL DEV
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
{/*                  
                 <MenuItem  
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href="/WhatWeWork"
                     >
                  <Typography textAlign="center" >{t('navBar.WhatWeWork')}</Typography>
                </MenuItem> */}
                  <MenuItem  
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href="/Services"
                     >
                  <Typography textAlign="center" >{t('Services.title')}</Typography>
                </MenuItem>

                  {/* <MenuItem  
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href="/Contact"
                     >
                  <Typography textAlign="center" >{t('navBar.Contact')}</Typography>
                </MenuItem> */}

                  <MenuItem  
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href="AboutMe"
                     >
                  <Typography textAlign="center" >{t('navBar.AboutMe')}</Typography>
                </MenuItem>
                <MenuItem sx={{ flexGrow: 1, borderTop: 1  }} >
                  <Typography    onClick={() => saveLanguage("en")}  textAlign="center" >ENG</Typography> 
                </MenuItem>
                <MenuItem>
                  <Typography    onClick={() => saveLanguage("es")} textAlign="center" >ESP</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <RocketLaunchIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "aqua" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          OSCAR DANIEL DEV
          </Typography>
          <Box      
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
            <ButtonGroup 
                variant="text"
                aria-label="text button group"
                >

            {/* {pages.map((page) => ( */}
                {/* <Button
                 onClick={handleCloseNavMenu}
                 href="/WhatWeWork"
                 className="borde-blanco"

                sx={{ my: 2, color: "white", display: "block" }}
                >
                    {t('navBar.WhatWeWork')}

                </Button> */}

                <Button
                 onClick={handleCloseNavMenu}
                 href="/Services"
                 className="borde-blanco"

                sx={{ my: 2, color: "white", display: "block" }}
                >
                    {t('Services.title')}

                </Button>

                {/* <Button
                 onClick={handleCloseNavMenu}
                 href="/Contact"
                 className="borde-blanco"

                sx={{ my: 2, color: "white", display: "block" }}
                >
                    {t('navBar.Contact')}

                </Button> */}

                <Button
                 onClick={handleCloseNavMenu}
                 href="/AboutMe"
                 className="borde-blanco"

                sx={{ my: 2, color: "white", display: "block" }}
                >
                    {t('navBar.AboutMe')}

                </Button>

            {/* ))} */}

              <Button onClick={() => saveLanguage("en")} className="borde-transparente">
                <US title="United States"/>
              </Button>
              <Button onClick={() => saveLanguage("es")}className="borde-transparente">
                <MX title="Mexico"/>
              </Button>
            </ButtonGroup>

            {/* <ButtonGroup variant="text" aria-label="text button group">
                <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    href="/Contact"
                >
                    What We Work
                </Button>
                <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    href="/Contact"
                >
                    Contact
                </Button>
                <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    href="/Contact"
                >
                    AboutMe
                </Button>
            </ButtonGroup> */}

          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;