import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#FA1D70',
      },
      text: {
        primary: '#444',
      },
    },
  }),
);

export { theme };
