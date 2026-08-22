import { Button } from '@mui/material';
import type { FC } from 'react';
import type { UiButtonProps } from './type';
import { COLORS } from '../../../styles/tokens/colors';

export const UiButton: FC<UiButtonProps> = ({
  dataTestId,
  color,
  sx,
  ...rest
}) => {
  return (
    <Button
      data-testid={dataTestId}
      {...rest}
      sx={{
        width: 'fit-content',
        color: COLORS[color][600],
        '&:hover': {
          bgcolor: COLORS[color][50],
        },
        '&:disabled': {
          bgcolor: COLORS.GRAY[50],
        },
        ...sx,
      }}
    />
  );
};
