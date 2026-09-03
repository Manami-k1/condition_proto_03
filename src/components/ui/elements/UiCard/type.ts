import type { CardProps, SxProps, Theme } from '@mui/material';
import { COLORS } from '../../../styles/tokens/colors';

export type UiCardColor = Extract<keyof typeof COLORS, string>;

export type UiCardProps = Omit<CardProps, 'color'> & {
  dataTestId?: string;
  color?: UiCardColor;
  sx?: SxProps<Theme>;
};
