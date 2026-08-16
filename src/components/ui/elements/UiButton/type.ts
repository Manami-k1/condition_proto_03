import type { ButtonProps } from '@mui/material';
import type { ColorName } from '../../../styles/tokens/colors';

export type UiButtonProps = Omit<ButtonProps, 'color'> & {
  dataTestId?: string;
  color: ColorName;
};
