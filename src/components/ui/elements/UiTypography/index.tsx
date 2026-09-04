import { Typography } from '@mui/material';
import type { FC } from 'react';
import type { UiTypographyProps } from './type';

export const UiTypography: FC<UiTypographyProps> = ({
  dataTestId,
  children,
  sx,
  ...rest
}) => {
  return (
    <Typography {...rest} data-testid={dataTestId} sx={sx}>
      {children}
    </Typography>
  );
};
