export const FONT_FAMILY = ['Hiragino Sans', 'sans-serif'].join(',');

export const FONT_SIZE = {
  '3xs': '9px',
  '2xs': '11px',
  xs: '12px',
  sm: '13px',
  md: '15px',
  lg: '17px',
  xl: '20px',
  '2xl': '28px',
  '3xl': '32px',
} as const;

export const FONT = {
  h1: {
    fontSize: FONT_SIZE['3xl'],
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h1Bold: {
    fontSize: FONT_SIZE['3xl'],
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h2: {
    fontSize: FONT_SIZE['2xl'],
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h2Bold: {
    fontSize: FONT_SIZE['2xl'],
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h3: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h3Bold: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h4: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  h4Bold: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  bodyLarge: {
    fontSize: FONT_SIZE.md,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  bodyLargeBold: {
    fontSize: FONT_SIZE.md,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  bodyMedium: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  bodyMediumBold: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 700,
    lineHeight: 1.5,
  },
  bodySmall: {
    fontSize: FONT_SIZE.xs,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  bodySmallBold: {
    fontSize: FONT_SIZE.xs,
    fontWeight: 700,
    lineHeight: 1.5,
  },
};
