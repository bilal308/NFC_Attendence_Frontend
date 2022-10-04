import { useState } from 'react';
import {
  Button,
  Divider,
  IconButton,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowBackIos } from '@mui/icons-material';

const ParentForm = ({ animation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();

  const opacityAnimate = {
    initial: {
      // opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      // opacity: 0,
    },
  };

  const opacityAnimateDivider = {
    initial: {
      // opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      background: 'rgb(200,171,169)',
    },
  };

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
      component={motion.div}
      key='ParentForm'
      variants={animation}
      initial='initial'
      animate='animate'
      exit='exit'
      sx={{ position: 'relative' }}
    >
      <Typography variant='h5' gutterBottom>
        Register as a Parent
      </Typography>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div
            key='Progress'
            variants={opacityAnimate}
            initial='initial'
            animate='animate'
            exit='exit'
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <LinearProgress
              sx={{
                width: '25%',
                marginBottom: '1em',
              }}
            />
          </motion.div>
        ) : (
          <Divider
            key='Divider'
            variants={opacityAnimateDivider}
            initial='initial'
            animate='animate'
            exit='exit'
            component={motion.div}
            sx={{
              background: '#70231d',
              height: '4px',
              width: '25%',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1em',
            }}
          />
        )}
      </AnimatePresence>
      <Stack
        direction='column'
        alignItems='center'
        sx={{ paddingInline: '1em', width: '100%', gap: '1em' }}
      >
        <TextField variant='outlined' fullWidth label='Email' type='email' />
        <TextField
          variant='outlined'
          fullWidth
          label='Password'
          type='password'
        />
        <Typography
          fontWeight={600}
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Sign In Instead?
        </Typography>
        <Button variant='contained' onClick={() => setIsLoading(!isLoading)}>
          Register
        </Button>
      </Stack>
      <IconButton
        color='primary'
        sx={{ position: 'absolute', top: -5, left: 10 }}
        onClick={() => setSearchParams({ role: null })}
      >
        <ArrowBackIos />
      </IconButton>
    </Stack>
  );
};

export default ParentForm;
