/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Button,
  Divider,
  Stack,
  Step,
  StepButton,
  Stepper,
  Typography,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import ParentForm from '../Components/auth/ParentForm';
import StudentForm1 from '../Components/auth/StudentForm1';
import StudentForm2 from '../Components/auth/StudentForm2';
import StudentForm3 from '../Components/auth/StudentForm3';
import NFCLogo from '../Assets/Images/NFC Iet Logo.jfif';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [xAxis, setXAxis] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  const firstTimeAnimation = useRef(true);

  useEffect(() => {
    setXAxis('100vw');
  }, []);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    firstTimeAnimation.current = false;
    setActiveStep(0);
    setCompleted({});
  };

  const handleComplete = () => {
    firstTimeAnimation.current = false;
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

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
    const role = searchParams.get('role');
    if (role === 'parent') setForm(<ParentForm animation={formAnimation} />);
    else if (role === 'student')
      setForm(
        <>
          <Stepper
            activeStep={activeStep}
            sx={{ margin: '1.5em 0', width: '90%' }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton color='inherit' />
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 && (
            <StudentForm1
              reset={handleReset}
              handleNext={handleComplete}
              animation={firstTimeAnimation.current && formAnimation}
            />
          )}
          {activeStep === 1 && (
            <StudentForm2 handleNext={handleComplete} handleBack={handleBack} />
          )}

          {activeStep === 2 && <StudentForm3 handleBack={handleBack} />}
        </>
      );
    else setForm(options);
  }, [searchParams, activeStep]);

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
