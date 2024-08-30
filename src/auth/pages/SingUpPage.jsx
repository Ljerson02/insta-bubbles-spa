import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { AuthLayout } from '../layouts/AuthLayout';
import { SignUpForm } from '../components/SignUpForm';
import { bubblesShowImg } from '../../assets/images';

export const SingUpPage = () => {

  return (
    <AuthLayout>
      <Container>
        <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignContent={"center"}
        >
          <Grid
            item
            xs={8}
            alignContent={'center'}
            sx={{
              display: {
                xs: 'none',
                md: 'block'
              },
            }}
            >
            <Grid
              container 
              sx={{ height: '100%' }}
              alignContent={'space-between'}
            >
              <Typography sx={{ marginTop: '100px' }} variant="h5"  >
                Share your photos and see how it grows as bubbles ...
              </Typography>
              <img  style={{ maxHeight: '50vh' }} src={bubblesShowImg} alt="Bubbles Show" />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}  >
            <SignUpForm />
          </Grid>
        </Grid>
      </Container>
    </AuthLayout>
  )
}
