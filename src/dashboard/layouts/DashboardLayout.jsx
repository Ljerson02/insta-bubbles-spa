import { AppBar, Box, Container, Grid, IconButton, styled, Toolbar } from '@mui/material'
import React from 'react'
import { logoColor } from '../../assets/images'
import { useDispatch, useSelector } from 'react-redux';
import { UserCard } from '../components/UserCard';
import { LogoutOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/slices';

export const DashboardLayout = ({ children }) => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '95vh',
        background: 'linear-gradient(to bottom, #FFFFFF, #A3D5FF, #C5B3E6, #FFFFFF)',
      }}>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Container>
          <Toolbar>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <img src={logoColor} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
              <Box sx={{ display: 'flex', direction: 'row' }} >
                <UserCard user={ user } />
                <IconButton onClick={handleLogout} color='error'>
                    <LogoutOutlined />
                </IconButton>
              </Box>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </Box>
  )
}
