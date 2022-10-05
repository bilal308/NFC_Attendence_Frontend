import { useState } from "react";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

const StudentForm = ({ animation }) => {
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
      background: "rgb(200,171,169)",
    },
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      component={motion.div}
      key="StudentForm"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      sx={{ position: "relative" }}
    >
      <Typography variant="h5" gutterBottom>
        Register as a Student
      </Typography>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="Progress"
            variants={opacityAnimate}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <LinearProgress
              sx={{
                width: "25%",
                marginBottom: "1em",
              }}
            />
          </motion.div>
        ) : (
          <Divider
            key="Divider"
            variants={opacityAnimateDivider}
            initial="initial"
            animate="animate"
            exit="exit"
            component={motion.div}
            sx={{
              background: "#70231d",
              height: "4px",
              width: "25%",
              borderRadius: "50px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "1em",
            }}
          />
        )}
      </AnimatePresence>
      <Stack gap="1em" padding="1em">
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "100%", gap: "1em" }}
        >
          <TextField
            variant="outlined"
            label="Session"
            type="text"
            placeholder="eg. 2k19"
            size="small"
          />
          <TextField
            variant="outlined"
            label="Program"
            type="text"
            placeholder="eg. BSCS"
            size="small"
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "100%", gap: "1em" }}
        >
          <TextField
            variant="outlined"
            label="Class Roll No."
            type="text"
            placeholder="eg. 301"
            size="small"
          />
          <TextField
            variant="outlined"
            label="Full Name"
            type="text"
            placeholder="Full Name"
            size="small"
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "100%", gap: "1em" }}
        >
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            size="small"
          />
          <TextField
            variant="outlined"
            label="Confirm Password"
            type="password"
            size="small"
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "100%", gap: "1em" }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
            sx={{ margin: 0 }}
          />
        </Stack>
      </Stack>
      <IconButton
        color="primary"
        sx={{ position: "absolute", top: -5, left: 10 }}
        onClick={() => setSearchParams({ role: null })}
      >
        <ArrowBackIos />
      </IconButton>
    </Stack>
  );
};

export default StudentForm;
