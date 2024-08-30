import { Box, Chip, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBubbles, setSelectedUser } from '../../store/slices/bubbles/bubblesSlice';
import { Bubble } from '../components/Bubble';
import { TopUserCard } from '../components/TopUserCard';

export const BubblesFeedView = () => {
  const { allBubbles, selectedUser } = useSelector(state => state.bubbles);
  const memoizedBubbles = useMemo(() => allBubbles, [allBubbles]);
  const userBubbles = useMemo(() => {
    if(!selectedUser || allBubbles.length === 0) return null;
    return allBubbles.filter(bubble => bubble.owner.uid === selectedUser.uid)
  }, [allBubbles, selectedUser]);
  const dispatch = useDispatch();
  const handleTopUserSelected = () => {
    dispatch(setSelectedUser(null));
  };

  useEffect(() => {
    dispatch(fetchBubbles());
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: '35px',
        margin: '25px',
        padding: '20px',
      }}
    >
      <Box
        sx={{ display: 'flex' }}
      >
        {
          selectedUser ? (
            <TopUserCard user={selectedUser} onSelect={handleTopUserSelected} />
          ) :
          (<Chip label="All" sx={{ backgroundColor: 'secondary.main' }} />)
        }
      </Box>
      <Box
        sx={{
          display: 'flex',
          padding: '20px',
          flex: 1,
          overflowY: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {
            memoizedBubbles.length === 0 && ( <Typography variant='h3' >No bubbles</Typography> )
          }
          {
            !userBubbles && memoizedBubbles.length !== 0 && memoizedBubbles.map((bubble) => (
              <Bubble key={bubble.id} bubbleData={bubble} />
            ))
          }
          {
            userBubbles && userBubbles.map((bubble) => (
              <Bubble key={bubble.id} bubbleData={bubble} />
            ))
          }
        </div>
      </Box>
    </Box>

  )
}
