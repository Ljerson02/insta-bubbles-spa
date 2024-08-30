import { AppBar, Box, Container, Toolbar } from '@mui/material'
import { logoColor } from '../../assets/images'
import React from 'react'

export const AuthLayout = ({ children }) => {
  return (
    <Box
    sx={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      minHeight: "95vh",
      background: 'linear-gradient(to bottom, #FFFFFF, #A3D5FF, #C5B3E6, #FFFFFF)',
    }}
    >
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
          <Container>
            <Toolbar>
              <img src={logoColor} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
            </Toolbar>
          </Container>
        </AppBar>
        
        { children }
    </Box>
  )
}
