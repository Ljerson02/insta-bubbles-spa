import React from 'react'
import { ModalLayout } from '../layouts/ModalLayout'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedBubble } from '../../store/slices/bubbles/bubblesSlice'
import { Favorite } from '@mui/icons-material'

export const BubbleViewModal = ({ isOpen }) => {
  const { selectedBubble } = useSelector(state => state.bubbles);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setSelectedBubble(null));
  };
  if(!selectedBubble) return; 
  return (
    <ModalLayout isOpen={isOpen} onClose={ onClose } >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            backgroundImage: `url(${selectedBubble.image})`,
            backgroundColor: 'gray',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '15px',
            width: '100%',
            minHeight: '50vh',
            alignItems: 'end',
            justifyContent: 'end',
          }}
        >
          <IconButton sx={{ backgroundColor: 'secondary.main', padding: '15px', margin: '15px'  }} >
            <Favorite sx={{ fontSize: 35, color: 'white' }} />
          </IconButton>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '20px' }} >
          <Grid item xs={12}>
            <Typography variant="h6">{selectedBubble.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{selectedBubble.description}</Typography>
          </Grid>
        </Grid>
    </ModalLayout>
  )
}
