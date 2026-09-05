import { COLORS } from '../../components/styles/tokens/colors';
import type { UiCalendarCardColor } from './type';

export const SX_UICARD = (color: UiCalendarCardColor) => ({
  boxShadow: `0 8px 0 ${COLORS[color][400]}`,
  padding: '6px 9px',
  minHeight: '156px',
  width: '140px',
  minWidths: '140px',
  position: 'relative',
});

export const SX_UICARD_CONTENT = {
  marginLeft: '3px',
  marginBottom: 0,
  fontWeight: 800,
};
