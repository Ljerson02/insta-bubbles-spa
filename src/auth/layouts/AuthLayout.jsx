import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import { logoColor } from '../../assets/images'
import React from 'react'

export const AuthLayout = ({ children }) => {
  return (
    <Box
    sx={{
      minHeight: "100vh",
      background: 'linear-gradient(to bottom, #FFFFFF, #A3D5FF, #C5B3E6, #FFFFFF)',
    }}
    >
      <Container>
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <img src={logoColor} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
          </Toolbar>
        </AppBar>
        
        { children }
      </Container>
    </Box>
  )
}
