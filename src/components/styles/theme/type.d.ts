declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    Gray: true;
    Blue: true;
    Sky: true;
    Teal: true;
    Green: true;
    Lime: true;
    Yellow: true;
    Orange: true;
    Red: true;
    Pink: true;
    Purple: true;
    Indigo: true;
    Brown: true;
    Slate: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
    h2Bold: true;
    h3Bold: true;
    h4Bold: true;
    bodyLarge: true;
    bodyLargeBold: true;
    bodyMedium: true;
    bodyMediumBold: true;
    bodySmall: true;
    bodySmallBold: true;
  }
}
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    calendar: true;
  }
}

export {};
