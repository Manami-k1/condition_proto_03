import { createTheme } from '@mui/material/styles';
import { FONT_FAMILY, FONT_SIZE } from './const';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
    h2Bold: true;
    h3Bold: true;
    h4Bold: true;
    h5Bold: true;
    body1Bold: true;
    body2Bold: true;
  }
}

const FONT = {
  h1: {
    fontSize: FONT_SIZE['3xl'],
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h1Bold: {
    fontSize: FONT_SIZE['3xl'],
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h2: {
    fontSize: FONT_SIZE['2xl'],
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h2Bold: {
    fontSize: FONT_SIZE['2xl'],
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h3: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h3Bold: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h4: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h4Bold: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: FONT_SIZE.md,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h5Bold: {
    fontSize: FONT_SIZE.md,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: FONT_SIZE.md,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  body1Bold: {
    fontSize: FONT_SIZE.md,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  body2Bold: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  subtitle1: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: FONT_SIZE.md,
    fontWeight: 500,
    lineHeight: 1.5,
  },
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY,
    ...FONT,
  },
});
