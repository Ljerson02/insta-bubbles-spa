import { Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { singUpWithCredentials } from '../../firebase/firebaseAuthAdapter';

export const SingUpPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    const { email, password } = data;
    const response = await singUpWithCredentials(email, password);
    console.log('Response ', response);
  };

  return (
    <>
      <h1>Sing up</h1>
      <h2>With User and Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Typography>User name</Typography>
        <TextField {...register("userName", { required: true })} />
        {errors.userName && <span>This field is required</span>}

        <Typography>Email</Typography>
        <TextField {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        <Typography>Password</Typography>
        <TextField type='password' {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}

        <Button type='submit' variant="contained" color="primary" > Sing up </Button>
      </form>
    </>
  )
}
