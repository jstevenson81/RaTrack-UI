import { createMuiTheme } from '@material-ui/core';

// theme
const CustomDarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1565c0',
      light: '#5e92f3',
      dark: '#003c8f'
    },
    secondary: {
      main: '#dcedc8',
      light: '#fffffb',
      dark: '#aabb97'
    }
  }
});

export default CustomDarkTheme;
