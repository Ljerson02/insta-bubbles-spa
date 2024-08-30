import React from 'react'
import { Box, Modal, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '35px',
};

export const ModalLayout = ({ children, isOpen, title, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={() => { if(onClose) onClose() }}
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h5" component="h2" mb={2}>
          {title}
        </Typography>
        { children }
      </Box>
    </Modal>
  )
}
