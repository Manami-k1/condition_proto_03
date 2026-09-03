import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './components/styles/theme';
import { Global } from '@emotion/react';
import { globalStyle } from './components/styles/globalStyle.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={globalStyle} />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
