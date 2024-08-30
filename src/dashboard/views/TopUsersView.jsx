import { Whatshot } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TopUserCard } from '../components/TopUserCard';
import { setSelectedUser } from '../../store/slices/bubbles/bubblesSlice';

export const TopUsersView = () => {
  const allBubbles = useSelector(state => state.bubbles.allBubbles);
  const dispatch = useDispatch();
  
  const topUsers = useMemo(() => {
    const userLikes = {};
    allBubbles.forEach((bubble) => {
      const { owner: user, likes } = bubble;
      if (!userLikes[user.uid]) {
        userLikes[user.uid] = {
          user,
          likes: 0,
        }
      }
      userLikes[user.uid].likes += likes;
    });
    const topUsersData = Object.values(userLikes).sort((a, b) => b.likes - a.likes).slice(0, 5);
    return topUsersData;
  }, [allBubbles]);

  const handleSelect = (user) => (dispatch(setSelectedUser(user)));
  return (
    <Box
      sx={{
        flex: 1,
        margin: '25px',
        padding: '20px',
        borderRadius: '25px',
        backgroundColor: 'white',
        display: {
          xs: 'none',
          md: 'block'
        },
      }}>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <Grid container sx={{ marginTop: '25px' }} >
            <Typography variant='h6'>Top Users</Typography>
            <Whatshot sx={{ fontSize: 25, color: 'secondary.main' }} />
          </Grid>
        </Grid>
        {
          topUsers && topUsers.map(({ user, likes }) => (
            <Grid item key={user.uid} xs={12}>
              <TopUserCard user={user} onSelect={handleSelect} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
