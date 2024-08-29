import { ThemeProvider } from '@mui/material'
import React from 'react'
import { lightTheme } from './lightTheme'

export const LightTheme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
    </ThemeProvider>
  )
}
