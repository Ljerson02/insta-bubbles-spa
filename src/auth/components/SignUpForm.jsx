import { Box, Button, Chip, Container, Divider, FormControl, FormHelperText, Grid, Input, InputLabel, LinearProgress, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { singUpWithCredentials } from '../../firebase/firebaseAuthAdapter';
import { Google } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { doGoogleLogin, startUserRegistrationWithCredentials } from '../../store/slices';

export const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { loading, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async data => {
    const { userName, email, password } = data;
    dispatch(startUserRegistrationWithCredentials( userName, email, password ));
  };

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    dispatch(doGoogleLogin());
  };

  return (
    <>
      <Box
        minHeight={'600px'}
        backgroundColor={'white'}
        borderRadius={5}
      >

        <form onSubmit={handleSubmit(onSubmit)} >
          <Grid
            container
            alignContent={'center'}
            padding={3}
          >
            <Grid item xs={12}>
              <Typography sx={{ mb: 5 }} variant='h5' >Singup</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography >User name</Typography>
              <TextField
                error={!!errors.userName}
                helperText={ !!errors.userName && 'This field is required' }
                size='small' fullWidth {...register("userName", { required: true })}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Email</Typography>
              <TextField
                error={!!errors.email}
                helperText={ !!errors.email && 'This field is required and must be an email' }
                size='small' fullWidth {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              />
            </Grid>

            <Grid item xs={12} >
              <Typography>Password</Typography>
              <TextField
                error={!!errors.password}
                helperText={ !!errors.password && 'This field is required and min 6 characters' }
                size='small'
                fullWidth
                type='password'
                {...register("password", { required: true, minLength: 6 })}
              />
            </Grid>

            <Grid item xs={12} >

            <Button disabled={loading} sx={{ mt: 3 }} type='submit' variant='contained' fullWidth>
              <Typography textTransform={'none'} color={'white'} >Register</Typography>
            </Button>
            { loading && <LinearProgress/> }
            </Grid>
          </Grid>
        </form>

        <Divider>
          <Chip label="or" size="small" />
        </Divider>
        
        <Grid
          container
          alignContent={'center'}
          padding={3}
          >
          <Grid item xs={12}>
            <Button disabled={loading} onClick={handleGoogleSignUp} variant='contained' fullWidth>
              <Google  sx ={{ mr: 2, color: 'white' }} />
              <Typography textTransform={'none'} color={'white'} >Sign up with Google</Typography>
            </Button>
          </Grid>
        </Grid>

      </Box>
    </>
  )
}

