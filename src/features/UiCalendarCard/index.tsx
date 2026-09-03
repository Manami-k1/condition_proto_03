import type { FC } from 'react';

import { COLORS } from '../../components/styles/tokens/colors';
import type { UiCalendarCardProps } from './type';
import { UiCard } from '../../components/ui/elements/UiCard';
import { Box } from '@mui/material';
import { UiTypography } from '../../components/ui/elements/UiTypography';

export const UiCalendarCard: FC<UiCalendarCardProps> = ({
  children,
  color = 'GRAY',
  item,
  dataTestId,
  ...rest
}) => {
  return (
    <UiCard
      {...rest}
      dataTestId={dataTestId}
      sx={{
        boxShadow: `0 8px 0 ${COLORS[color][400]}`,
        padding: '6px 9px',
        minHeight: '156px',
        width: '140px',
        minWidths: '140px',
        position: 'relative',
      }}
    >
      <UiTypography variant="bodySmall">{children}</UiTypography>

      <Box sx={{ position: 'absolute', right: '9px', bottom: '4px' }}>
        <UiTypography
          variant="h3Bold"
          sx={{ marginLeft: '3px', marginBottom: 0, fontWeight: 800 }}
        >
          {item.date}
        </UiTypography>
      </Box>
    </UiCard>
  );
};
