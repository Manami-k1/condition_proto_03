import type { Components, Theme } from '@mui/material/styles';
import { FONT_SIZE } from '../../tokens/typography';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    calendar: true;
  }
}

export const THEME_CARD: Components<Theme>['MuiCard'] = {
  defaultProps: {
    variant: 'elevation',
  },

  styleOverrides: {
    root: {
      color: 'inherit',
    },
  },

  variants: [
    {
      props: {
        variant: 'elevation',
      },
      style: {
        borderRadius: '8px',
        boxShadow: 'none',
      },
    },
    {
      props: {
        variant: 'calendar',
      },
      style: {
        // padding: '6px 9px',
        borderRadius: '9px',
        // minHeight: '156px',
        // width: '146px',
        minWidth: '146px',
        fontSize: `${FONT_SIZE.xs}`,
      },
    },
  ],
};
