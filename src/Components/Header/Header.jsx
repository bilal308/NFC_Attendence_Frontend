import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Logout,
  Settings,
  ListAlt,
  Search,
  DesignServices,
  Login,
  ExitToApp,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import NavigationLink from './NavigationLink';
import MobileNavigationLink from './MobileNavigationLink';
import NFCLogo from '../../Assets/Images/NFC Iet Logo.jfif';

const drawerWidth = 240;

const Header = (props) => {
  //   const { isLoggedIn, logout, user, credits } = useAuth();
  const navigate = useNavigate();

  const links = [
    { title: 'Feed', path: '/', icon: <ListAlt /> },
    { title: 'Search', path: '/search', icon: <Search /> },
    { title: 'Generate', path: '/generate', icon: <DesignServices /> },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Stack direction='column' alignItems='center' sx={{ padding: '1em 0' }}>
        <Avatar
          src={NFCLogo}
          referrerPolicy='no-referrer'
          sx={{ width: 75, height: 75 }}
        />
      </Stack>
      <List>
        {links.map(({ title, path, icon }, i) => (
          <MobileNavigationLink key={i} icon={icon} path={path} title={title} />
        ))}
        <>
          <MobileNavigationLink
            path='/manage-account'
            title='Settings'
            icon={<Settings />}
          />
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                color: 'black',
                fontSize: '1rem',
                textDecoration: 'none',
                padding: '0.2em 1em 0.2em 2em',
                textAlign: 'left',
                width: '100%',
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>
        </>
      </List>
    </Box>
  );

  return (
    <AppBar
      component='nav'
      color='transparent'
      sx={{
        position: 'relative',
        boxShadow: 'none',
        zIndex: 500,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: { xs: 'flex-start', md: 'space-between' },
          boxShadow: '0 0 5px black',
        }}
      >
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Stack direction='row' alignItems='center' gap='1em'>
          <Avatar
            sx={{
              backgroundColor: 'transparent',
              width: 70,
              height: 70,
            }}
            src={NFCLogo}
            referrerPolicy='no-referrer'
          />
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontWeight: 700,
              lineHeight: 0.7,
            }}
          >
            NFC IET
          </Typography>
        </Stack>
        <Stack sx={{ display: { xs: 'none', md: 'block' } }}>
          {links.map(({ title, path }, i) => (
            <NavigationLink key={i} path={path} title={title} />
          ))}
        </Stack>
      </Toolbar>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
