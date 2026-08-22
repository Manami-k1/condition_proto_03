import type { Components, Theme } from '@mui/material/styles';
import { TOKEN_BORDER_RADIUS } from '../../tokens/borderRadius';
import { BLACK, COLORS, GRAY, WHITE } from '../../tokens/colors';

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
        lineHeight: 1,
        padding: '6px',
        fontWeight: 700,
        borderRadius: TOKEN_BORDER_RADIUS.medium,
        boxShadow: `0px 0px 4px ${BLACK.BASE_08}`,
        '&:hover': {
          boxShadow: 'none',
          borderColor: COLORS.GRAY[300],
        },
        '&:disabled': {
          boxShadow: 'none',
          color: COLORS.GRAY[400],
          border: `4px solid ${COLORS.GRAY[100]}`,
        },
      },
    },
  ],
};
