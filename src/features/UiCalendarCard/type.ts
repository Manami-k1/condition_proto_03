import type { CardProps } from '@mui/material';
import { COLORS } from '../../components/styles/tokens/colors';

export type UiCalendarCardColor = keyof typeof COLORS;

export type UiCalendarCardProps = Omit<CardProps, 'color'> & {
  dataTestId?: string;
  color?: UiCalendarCardColor;
};
