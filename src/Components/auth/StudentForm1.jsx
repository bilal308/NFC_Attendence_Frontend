/* eslint-disable no-unused-vars */
import { Divider, IconButton, Stack, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const StudentForm1 = ({ animation, handleNext, reset }) => {
  const [_, setSearchParams] = useSearchParams();

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
      key='StudentForm'
      variants={animation}
      initial='initial'
      animate='animate'
      exit='exit'
      sx={{ position: 'relative' }}
    >
      <Stack gap='1em' padding='1em'>
        <Stack
          direction='row'
          alignItems='center'
          sx={{ width: '100%', gap: '1em' }}
        >
          <TextField
            variant='outlined'
            label='Session'
            type='text'
            placeholder='eg. 2k19'
            fullWidth
          />
          <TextField
            variant='outlined'
            label='Program'
            type='text'
            placeholder='eg. BSCS'
            fullWidth
          />
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          sx={{ width: '100%', gap: '1em' }}
        >
          <TextField
            variant='outlined'
            label='Class Roll No.'
            type='number'
            placeholder='eg. 301'
            fullWidth
          />
          <TextField
            variant='outlined'
            label='Phone No.'
            type='number'
            placeholder='eg. 0300000000'
            fullWidth
          />
        </Stack>
      </Stack>
      <IconButton
        color='primary'
        sx={{ position: 'absolute', top: -140, left: 10 }}
        onClick={() => {
          reset();
          setSearchParams({ role: null });
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <Button
        variant='contained'
        endIcon={<ArrowForwardIos />}
        onClick={handleNext}
      >
        Next
      </Button>
    </Stack>
  );
};

export default StudentForm1;
