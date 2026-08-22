import type { ButtonProps } from '@mui/material';
import type { COLORS } from '../../../styles/tokens/colors';

export type UiButtonColor = keyof typeof COLORS;

export type UiButtonProps = Omit<ButtonProps, 'color'> & {
  dataTestId?: string;
  color: UiButtonColor;
};
