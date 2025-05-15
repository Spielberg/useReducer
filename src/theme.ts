import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f8fafc',
    },
    primary: {
      main: '#111827',
    },
    text: {
      primary: '#111827',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    fontWeightBold: 800,
    h6: {
      fontWeight: 800,
      fontSize: '1.25rem',
      letterSpacing: '-0.5px',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff',
          color: '#111827',
          boxShadow: '0 1px 0 0 #e5e7eb',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '1rem',
          textTransform: 'none',
          minWidth: 100,
        },
      },
    },
  },
});

export default theme; 