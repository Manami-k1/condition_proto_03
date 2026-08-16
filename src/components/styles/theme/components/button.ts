import type { Components, Theme } from '@mui/material/styles';
import { TOKEN_BORDER_RADIUS } from '../../tokens/borderRadius';
import { GRAY, WHITE } from '../../tokens/colors';

export const THEME_BUTTON: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'outlined',
  },
  styleOverrides: {
    root: {},
  },
  variants: [
    {
      props: {
        variant: 'outlined',
      },
      style: {
        backgroundColor: WHITE.BASE,
        border: `4px solid ${GRAY[200]}`,
        borderRadius: TOKEN_BORDER_RADIUS.medium,
        lineHeight: 1.2,
        fontWeight: 700,
      },
    },
  ],
};
