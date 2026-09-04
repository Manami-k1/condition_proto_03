import type { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    calendar: true;
  }
}

export const THEME_TYPOGRAPHY: Components<Theme>['MuiCard'] = {
  defaultProps: {
    // variant: 'elevation',
  },

  styleOverrides: {
    root: {},
  },

  variants: [
    {
      props: {
        // variant: 'elevation',
      },
      style: {
        // borderRadius: '8px',
        // boxShadow: 'none',
      },
    },
  ],
};
