import { Box, Button, Chip,  Divider, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Google } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { doGoogleLogin, startLoginWithCredentials } from '../../store/slices';
import { AuthLayout } from '../layouts/AuthLayout';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { loading, error } = useSelector(state => state.auth);
  const handleGoogleLogin = async (e) => {
    e.preventDefault()
    dispatch(doGoogleLogin());
  };
  const onSubmit = async data => {
    const { email, password } = data;
    dispatch(startLoginWithCredentials(email, password));
  };
  return (
    <AuthLayout>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item xs={10} sm={6} md={4} lg={3} >
            <Box
              minHeight={'500px'}
              backgroundColor={'white'}
              borderRadius={5}
            >

              <form onSubmit={handleSubmit(onSubmit)} >
                <Grid
                  container
                  alignContent={'center'}
                  padding={3}
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography sx={{ mb: 5 }} variant='h5' >Login</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Email</Typography>
                    <TextField
                      error={!!errors.email}
                      helperText={!!errors.email && 'This field is required and must be an email'}
                      size='small' fullWidth {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                  </Grid>

                  <Grid item xs={12} >
                    <Typography>Password</Typography>
                    <TextField
                      error={!!errors.password}
                      helperText={!!errors.password && 'This field is required and min 6 characters'}
                      size='small'
                      fullWidth
                      type='password'
                      {...register("password", { required: true, minLength: 6 })}
                    />
                  </Grid>
                  <Grid item xs={12} textAlign={'center'} >
                    <Typography sx={{ fontSize: '12px' }} >
                      Don't have account? &nbsp;
                      <Link to="/singup">Sing up</Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} >

                    <Button disabled={loading} sx={{ mt: 3 }} type='submit' variant='contained' fullWidth>
                      <Typography textTransform={'none'} color={'white'} >Login</Typography>
                    </Button>
                    {loading && <LinearProgress />}
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
                  <Button disabled={loading} onClick={handleGoogleLogin} variant='contained' fullWidth>
                    <Google sx={{ mr: 2, color: 'white' }} />
                    <Typography textTransform={'none'} color={'white'} >Sign up with Google</Typography>
                  </Button>
                </Grid>
              </Grid>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}
