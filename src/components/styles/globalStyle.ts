import { css } from '@emotion/react';
import { COLORS } from './tokens/colors';

export const globalStyle = css`
  html,
  body,
  #root {
    min-height: 100%;
  }
  body {
    margin: 0;
    background-color: ${COLORS.GRAY[50]};
    color: ${COLORS.GRAY[700]};
  }
`;
