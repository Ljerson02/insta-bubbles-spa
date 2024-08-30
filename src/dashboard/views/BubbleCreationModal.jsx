import React, { useRef, useState } from 'react'
import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { startCreateBubble } from '../../store/slices/bubbles/bubblesSlice';
import { useForm } from 'react-hook-form';
import { Delete, Send, UploadFileOutlined } from '@mui/icons-material';
import { ModalLayout } from '../layouts/ModalLayout';

export const BubbleCreationModal = ({ isOpen, OnClose }) => {
  const [selectedPhoto, setSelectedPhoto] = useState();
  const { reset, register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const inputFileRef = useRef();

  const handleFileInputChange = (e) => {

    if (e.target.files == 0) {
      setSelectedPhoto(null);
    };
    setSelectedPhoto(e.target.files[0]);
  };

  const handleReset = () => {
    setSelectedPhoto(null);
    reset();
    OnClose();
  };

  const onSubmit = data => {
    const { bubbleTitle, bubbleDescription } = data;
    dispatch(startCreateBubble({
      owner: user,
      title: bubbleTitle,
      description: bubbleDescription,
      likes: Math.floor(Math.random() * 100) + 1,
      active: true,
    }, selectedPhoto));
    handleReset();
  };

  return (
    <ModalLayout isOpen={isOpen} title="Create post" >
      <form onSubmit={ handleSubmit(onSubmit) } >
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <Typography >Tittle</Typography>
            <TextField
              error={!!errors.bubbleTitle}
              helperText={!!errors.bubbleTitle && 'This field is required'}
              size='small' fullWidth {...register("bubbleTitle", { required: true })}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Description</Typography>
            <TextField
              error={!!errors.bubbleDescription}
              helperText={!!errors.bubbleDescription && 'This field is required and max 100 characters'}
              size='small' fullWidth {...register("bubbleDescription", { required: true, maxLength: 100 })}
            />
          </Grid>

          <Grid item xs={12}>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleFileInputChange}
              ref={inputFileRef}
              style={{ display: 'none' }}
            />
            {
              selectedPhoto && (
                <Box
                  onClick={() => { inputFileRef.current.click() }}
                  component="img"
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                    marginTop: '16px',
                    border: '2px dashed gray',
                    borderRadius: '15px',
                  }}
                  src={URL.createObjectURL(selectedPhoto)}
                  alt="Selected"
                />

              )
            }

            {
              !selectedPhoto && (
                <>
                  <Box
                    onClick={() => { inputFileRef.current.click() }}
                    sx={{
                      minHeight: '200px',
                      border: '2px dashed gray',
                      borderRadius: '15px',
                      padding: '20px',
                      textAlign: 'center',
                      backgroundColor: '#f5f5f5',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      ":hover": { backgroundColor: 'secondary.main' }
                    }}
                  >
                    <UploadFileOutlined sx={{ fontSize: 60, color: 'black' }} />
                    <Typography variant="body1">Select your photo</Typography>
                  </Box>
                </>
              )
            }
            {!selectedPhoto && <Typography color="error">Image is required</Typography>}
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <IconButton
                  onClick={() => handleReset()}
                  sx={{
                    color: 'white',
                    backgroundColor: 'primary.main',
                    ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
                    position: 'sticky',
                    bottom: 50,
                    left: '100%',
                  }}
                >
                  <Delete sx={{ fontSize: 35 }} />
                </IconButton>

              </Grid>
              <Grid item>
                <Button disabled={!selectedPhoto} type='submit' variant="contained" endIcon={<Send />}>
                  Post
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </ModalLayout>
  )
}
