import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';

export const TopUserCard = ( { user, onSelect } ) => {
  if(!user) return;
  return (
    <Grid
      container
      onClick={() => onSelect(user)}
      direction='row'
      alignItems={'center'}
      sx={{
        minWidth: '100px',
        ":hover": { backgroundColor: 'secondary.main' },
        borderRadius: '15px',
      }}
    >
      <Avatar alt={user.displayName} src={user.image} />
      <Typography variant='body1' sx={{fontSize: '16px', fontWeight: 'bold', 
        padding: '5px'}} >
        # { user.displayName }
      </Typography>
    </Grid>
  )
}
