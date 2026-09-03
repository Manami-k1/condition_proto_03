import { Card } from '@mui/material';
import type { FC } from 'react';

import type { UiCardProps } from './type';

export const UiCard: FC<UiCardProps> = ({
  children,
  color = 'GRAY',
  dataTestId,
  sx,
  ...rest
}) => {
  return (
    <Card {...rest} data-testid={dataTestId} elevation={0} sx={sx}>
      {children}
    </Card>
  );
};
