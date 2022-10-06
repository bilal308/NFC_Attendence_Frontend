import { useState } from 'react';
import {
  IconButton,
  Stack,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const StudentForm2 = ({ animation, handleNext, handleBack }) => {
  const [values, setValues, depart, setdepart] = useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setdepart(event.target.value);
  };

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
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
            label='Full Name'
            type='text'
            placeholder='Full-Name'
            fullWidth
          />
          <TextField
            variant='outlined'
            label='Section'
            type='text'
            placeholder='eg. Red'
            fullWidth
          />
        </Stack>

        <Stack
          direction='row'
          alignItems='center'
          sx={{ width: '100%', gap: '1em' }}
        >
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={depart}
              label='Department'
              onChange={handleChange}
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Department</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={depart}
              label='Department'
              onChange={handleChange}
            >
              <MenuItem value={1}>Computer Science</MenuItem>
              <MenuItem value={2}>Mechanical Engineering</MenuItem>
              <MenuItem value={3}>Electrical Engineering</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <IconButton
        color='primary'
        sx={{ position: 'absolute', top: -140, left: 10 }}
        onClick={handleBack}
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

export default StudentForm2;
