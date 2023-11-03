import { createTheme, em } from '@mantine/core';

const theme = createTheme({
  white: '#ffffff',
  black: '#111111',
  primaryShade: 4,
  defaultRadius: 'sm',
  fontFamily: 'Manrope',
  breakpoints: {
    xs: em(375),
    md: em(768),
    xl: em(1440),
  },
});

export default theme;
