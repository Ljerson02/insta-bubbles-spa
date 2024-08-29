import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { singUpWithCredentials } from '../../firebase/firebaseAuthAdapter';
import { AuthLayout } from '../layouts/AuthLayout';
import { SignUpForm } from '../components/SignUpForm';

export const SingUpPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    const { email, password } = data;
    const response = await singUpWithCredentials(email, password);
    console.log('Response ', response);
  };

  return (
    <AuthLayout>
      <Container>
        <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignContent={"center"}
        >
          <Grid item xs={8} alignContent={'center'}>
            <Typography variant="h5" >
            Share your photos and see how it grows as bubbles ...
            </Typography>
          </Grid>
          <Grid item xs={4} >
            <SignUpForm />
          </Grid>
        </Grid>
      </Container>
    </AuthLayout>
  )
}
