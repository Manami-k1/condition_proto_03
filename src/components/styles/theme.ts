import { createTheme } from '@mui/material/styles';
import { FONT_FAMILY, FONT_SIZE } from './const';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
    h2Bold: true;
    h3Bold: true;
    h4Bold: true;
    bodyLarge: true;
    bodyLargeBold: true;
    bodyMedium: true;
    bodyMediumBold: true;
    bodySmall: true;
    bodySmallBold: true;
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
  bodyLarge: {
    fontSize: FONT_SIZE.md,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  bodyLargeBold: {
    fontSize: FONT_SIZE.md,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  bodyMedium: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  bodyMediumBold: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  bodySmall: {
    fontSize: FONT_SIZE.xs,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  bodySmallBold: {
    fontSize: FONT_SIZE.xs,
    fontWeight: 700,
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
