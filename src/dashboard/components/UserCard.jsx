import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const UserCard = ( { user } ) => {
  if(!user) return;
  return (
    <Grid
      container
      direction='row'
      alignItems={'center'}
      sx={{
        minWidth: '100px',
      }}
    >
      <Typography variant='body1' sx={{fontSize: '16px', fontWeight: 'bold', 
        padding: '5px'}} >
        { user.displayName }
      </Typography>
      <Avatar alt={user.displayName} src={user.image} />
    </Grid>
  )
}
