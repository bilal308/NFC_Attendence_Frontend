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
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const StudentForm = ({ animation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();
  const [values, setValues, depart, setdepart] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setdepart(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            label="Full Name"
            type="text"
            placeholder="Full-Name"
          />
          <TextField
            variant="outlined"
            label="Section"
            type="text"
            placeholder="eg. R,G,B  "
          />
        </Stack>
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
          />
          <TextField
            variant="outlined"
            label="Program"
            type="text"
            placeholder="eg. BSCS"
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
          />
          <TextField
            variant="outlined"
            label="Phone No."
            type="text"
            placeholder="eg. 0300000000"
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "100%", gap: "1em" }}
        >
          <TextField
            variant="outlined"
            label="Gender"
            type="Text"
            placeholder="eg. Male"
          />
          <FormControl>
            <InputLabel>Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={depart}
              label="Department"
              onChange={handleChange}
            >
              <MenuItem value={1}>Computer Science</MenuItem>
              <MenuItem value={2}>Mechanical Engineering</MenuItem>
              <MenuItem value={3}>Electrical Engineering</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "100%", gap: "1em" }}
        >
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
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

      <Button variant="contained" onClick={() => setIsLoading(!isLoading)}>
        Register
      </Button>
    </Stack>
  );
};

export default StudentForm;
