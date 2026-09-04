import type { FC } from 'react';

import type { UiCalendarCardProps } from './type';
import { UiCard } from '../../components/ui/elements/UiCard';
import { Box } from '@mui/material';
import { UiTypography } from '../../components/ui/elements/UiTypography';
import { SX_UICARD, SX_UICARD_CONTENT } from './const';

export const UiCalendarCard: FC<UiCalendarCardProps> = ({
  children,
  color = 'GRAY',
  item,
  dataTestId,
  ...rest
}) => {
  return (
    <UiCard {...rest} dataTestId={dataTestId} sx={SX_UICARD(color)}>
      <UiTypography variant="bodySmall">{children}</UiTypography>
      <Box sx={{ position: 'absolute', right: '9px', bottom: '4px' }}>
        <UiTypography variant="h3Bold" sx={SX_UICARD_CONTENT}>
          {item.date}
        </UiTypography>
      </Box>
    </UiCard>
  );
};
