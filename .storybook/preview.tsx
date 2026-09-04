import type { Preview } from '@storybook/react-vite';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../src/components/styles/theme';
import { COLORS } from '../src/components/styles/tokens/colors';
import { globalStyle } from '../src/components/styles/globalStyle';
import { Global } from '@emotion/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={globalStyle} />
        <Story />
      </ThemeProvider>
    ),
  ],

  parameters: {
    backgrounds: {
      options: {
        GRAY_50: {
          name: 'GRAY_50',
          value: COLORS.GRAY[50],
        },
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'GRAY_50',
      grid: false,
    },
  },
};

export default preview;
