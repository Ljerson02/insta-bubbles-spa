import React from 'react'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { Container, IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { BubbleCreationModal } from '../views/BubbleCreationModal'
import { BubblesFeedView } from '../views/BubblesFeedView'
import { BubbleViewModal } from '../views/BubbleViewModal'
import { useSelector } from 'react-redux'
import { TopUsersView } from '../views/TopUsersView'

export const InstaBubblesDashBoardPage = () => {
  
  const [isCreationModalOpen, setIsCreationModalOpen] = React.useState(false);
  const { selectedBubble } = useSelector(state => state.bubbles);
  const onCreationModalClose = () => setIsCreationModalOpen(false);

  return(
    <DashboardLayout>
      <BubbleCreationModal isOpen={isCreationModalOpen} OnClose={ onCreationModalClose } />
      <BubbleViewModal isOpen={ selectedBubble !== null } />
      
      <Container sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <TopUsersView />
        <BubblesFeedView />
        <IconButton
        onClick={() => setIsCreationModalOpen(true)}
        size='large'
        sx={{
          display: 'flex',
          alignSelf: 'flex-end',
          color: 'white',
          backgroundColor: 'primary.main',
          ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
          position: 'stycky',
          bottom: 50,
          right: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 35 }} />
      </IconButton>
      </Container>
      
    </DashboardLayout>
  )
}
/*
  <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Navbar</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Box sx={{ flex: 1, backgroundColor: 'lightblue', padding: '20px' }}>
          Fixed Content
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto', backgroundColor: 'lightgreen', padding: '20px' }}>
          <Box sx={{ height: '2000px' }}>Scrollable Content</Box>
        </Box>
      </Box>
    </Box>
*/
