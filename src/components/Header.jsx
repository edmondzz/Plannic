import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/plannic.svg';

const navItems = [
  { label: 'Startseite', path: '/' },
  { label: 'Leistungen', path: '/services' },
  { label: 'Über uns', path: '/about-us' },
  { label: 'Referenzen', path: '/references' },
  { label: 'Kontakt', path: '/contact' }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img src={Logo} alt='Logo' style={{ height: 40 }} />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                px: 3,
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: 'text.primary'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position='static'
        color='transparent'
        elevation={0}
        sx={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          backgroundColor: 'white'
        }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: 2, md: 4 },
            py: 1
          }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={Logo} alt='Logo' style={{ height: 42 }} />
            </Box>
          </Link>

          {isMobile ? (
            <IconButton
              edge='end'
              color='inherit'
              aria-label='menu'
              onClick={handleDrawerToggle}
              sx={{
                color: 'black',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: 'black',
                      textTransform: 'none',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.875rem',
                      letterSpacing: '0.02em',
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      position: 'relative',
                      transition: 'all 0.2s ease-in-out',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: isActive ? '100%' : 0,
                        height: '2px',
                        backgroundColor: 'black',
                        transition: 'width 0.3s ease-in-out'
                      },
                      '&:hover': {
                        transform: 'translateY(-1px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                      },
                      '&:hover::after': {
                        width: '100%'
                      }
                    }}>
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'white'
          }
        }}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;
