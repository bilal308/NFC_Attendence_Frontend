import { Avatar, Button, Divider, Stack, Typography } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import ParentForm from '../Components/auth/ParentForm';
import StudentForm from '../Components/auth/StudentForm';
import NFCLogo from '../Assets/Images/NFC Iet Logo.jfif';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [xAxis, setXAxis] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const formAnimation = {
    initial: {
      x: xAxis,
    },
    animate: {
      x: 0,
      transition: {
        bounce: 0,
      },
    },
    exit: {
      x: '-100vw',
    },
  };

  const options = (
    <Stack
      direction='column'
      alignItems='center'
      component={motion.div}
      key='Options'
      variants={formAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      width='100%'
    >
      <Typography variant='h5' gutterBottom>
        Register As
      </Typography>
      <Divider
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
      <Stack
        direction='column'
        alignItems='center'
        sx={{ paddingInline: '1em', width: '100%', gap: '1em' }}
      >
        <Button
          variant='contained'
          fullWidth
          onClick={() => setSearchParams({ role: 'student' })}
        >
          Student
        </Button>
        <Button
          variant='contained'
          fullWidth
          onClick={() => setSearchParams({ role: 'parent' })}
        >
          Parent
        </Button>
        <Typography
          fontWeight={600}
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Sign In Instead?
        </Typography>
      </Stack>
    </Stack>
  );

  useEffect(() => {
    setXAxis('100vw');
  }, []);

  useEffect(() => {
    const role = searchParams.get('role');
    if (role === 'parent') setForm(<ParentForm animation={formAnimation} />);
    else if (role === 'student')
      setForm(<StudentForm animation={formAnimation} />);
    else setForm(options);
  }, [searchParams]);

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
      minHeight='100vh'
      overflow='hidden'
    >
      <Avatar
        src={NFCLogo}
        sx={{
          width: 100,
          height: 100,
          objectFit: 'cover',
        }}
      />
      <AnimatePresence mode='wait'>{form}</AnimatePresence>
    </Stack>
  );
};

export default Register;
