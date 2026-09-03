import { createTheme } from '@mui/material/styles';
import { FONT, FONT_FAMILY } from './tokens/typography';
import { BREAKPOINTS } from './theme/breakpoints';
import { THEME_BUTTON } from './theme/components/button';
<<<<<<< Updated upstream
=======
import { THEME_CARD } from './theme/components/card';
>>>>>>> Stashed changes

export const theme = createTheme({
  breakpoints: BREAKPOINTS,
  typography: {
    fontFamily: FONT_FAMILY,
    ...FONT,
  },
  components: {
    MuiButton: THEME_BUTTON,
<<<<<<< Updated upstream
=======
    MuiCard: THEME_CARD,
>>>>>>> Stashed changes
  },
});
