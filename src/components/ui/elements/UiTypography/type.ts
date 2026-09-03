import type { TypographyProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

export type UiTypographyProps = TypographyProps & {
  dataTestId?: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
};
