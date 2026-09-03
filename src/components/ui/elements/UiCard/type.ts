import type { CardProps, SxProps, Theme } from '@mui/material';
import type { COLORS } from '../../../theme/colors';

export type UiCardColor = Extract<keyof typeof COLORS, string>;

export type UiCardProps = Omit<CardProps, 'color'> & {
  dataTestId?: string;
  color?: UiCardColor;
  sx?: SxProps<Theme>;
};
