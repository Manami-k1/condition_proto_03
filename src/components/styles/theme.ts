import { createTheme } from '@mui/material/styles';
import { FONT, FONT_FAMILY } from './tokens/typography';
import { BREAKPOINTS } from './theme/breakpoints';
import { THEME_BUTTON } from './theme/components/button';

export const theme = createTheme({
  breakpoints: BREAKPOINTS,
  typography: {
    fontFamily: FONT_FAMILY,
    ...FONT,
  },
  components: {
    MuiButton: THEME_BUTTON,
  },
});
