import type { CardProps, SxProps, Theme } from '@mui/material';
import type { COLORS } from '../../../theme/colors';

export type UiCardColor = keyof typeof COLORS;

export type UiCardProps = Omit<CardProps, 'color'> & {
  dataTestId?: string;
  color?: UiCardColor;
  sx?: SxProps<Theme>;
};
