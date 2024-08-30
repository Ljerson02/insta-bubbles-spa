import { Badge, Box, Fab, IconButton, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchBubbles, setSelectedBubble } from '../../store/slices/bubbles/bubblesSlice';
import { Favorite, RemoveRedEye, RemoveRedEyeOutlined } from '@mui/icons-material';

const getRandomAling = (likes) => {
  if (likes >= 70) return 'flex-start';
  const random = Math.random();
  if (random <= 0.3) return 'center';
  if (random <= 0.7) return 'flex-start';
  return 'flex-end';
};

export const Bubble = ({ bubbleData }) => {
  const [bubbleIsHover, setBubbleIsHover] = useState(false);
  const [aling, setAling] = useState('center');
  const memoizedLikes = useMemo(() => bubbleData.likes, [bubbleData.likes]);

  const dispatch = useDispatch();
  
  const handleBubbleClick = () => {
    dispatch(setSelectedBubble(bubbleData));
  };

  useEffect(() => {
    setAling(getRandomAling(bubbleData.likes));
  }, [])
  
  return (
    <Box
      onMouseEnter={() => setBubbleIsHover(true)}
      onMouseLeave={() => setBubbleIsHover(false)}
      sx={{
        position: 'relative',
        display: 'flex',
        alignSelf: aling,
        backgroundImage: `url(${bubbleData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        width: `${100 + memoizedLikes}px`,
        height: `${100 + memoizedLikes}px`,
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
      }}
    >
      {
        bubbleIsHover && (
          <IconButton
            onClick={handleBubbleClick}
            sx={{
              position: 'absolute',
            }}
          >
            <RemoveRedEye sx={{ fontSize: 35, color: 'primary.main'  }} />
          </IconButton>
        )
      } 
      <Box
        sx={{
          position: 'absolute',
          transform: `translate(${(33 + memoizedLikes / 3).toString()}px, -${(33 + memoizedLikes / 3).toString()}px)`,
        }}
      >
        <Badge
          badgeContent={memoizedLikes}
          color="secondary"
          sx={{
            '& .MuiBadge-badge': {
              color: 'white',
              backgroundColor: 'secondary.main',
            },
          }}
        >
          <Fab color="secondary" aria-label="like">
            <Favorite sx={{ color: 'white' }} />
          </Fab>
        </Badge>
      </Box>
    </Box>
  );
};