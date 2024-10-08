import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change to your preferred primary color
    },
    secondary: {
      main: '#dc004e', // Change to your preferred secondary color
    },
  },
  typography: {
    h4: {
      fontWeight: 'bold',
    },
  },
});

export default theme;
