import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './Pages/Login';
import AuthLayout from './Pages/Layouts/AuthLayout';
import Register from './Pages/Register';

const App = () => {
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#70231d',
      },
      secondary: {
        main: '#4a4a4a',
      },
      background: {
        default: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
