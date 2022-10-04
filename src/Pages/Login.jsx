import { useState } from 'react';
import {
  Avatar,
  Button,
  Divider,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import NFCLogo from '../Assets/Images/NFC Iet Logo.jfif';

const Login = () => {
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

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
      minHeight='100vh'
    >
      <Avatar
        src={NFCLogo}
        sx={{ width: 100, height: 100, objectFit: 'cover' }}
      />
      <Typography variant='h5' gutterBottom>
        Sign In
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
          onClick={() => navigate('/register')}
        >
          Register Instead?
        </Typography>
        <Button variant='contained' onClick={() => setIsLoading(!isLoading)}>
          Sign In
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
