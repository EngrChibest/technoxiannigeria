import React from 'react';
import AppRoute from './utils/AppRoute';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#11B96A',
        main: '#00A859',
        dark: '#00A859',
        contrastText: '#fff',
      }
    },
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;