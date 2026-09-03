import { Card } from '@mui/material';
import type { FC } from 'react';

import type { UiCardProps } from './type';

export const UiCard: FC<UiCardProps> = ({
  children,
  dataTestId,
  color = 'GRAY',
  sx,
  ...rest
}) => {
  return (
    <Card
      {...rest}
      color={color}
      data-testid={dataTestId}
      elevation={0}
      sx={sx}
    >
      {children}
    </Card>
  );
};
