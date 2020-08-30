import { theme } from "@chakra-ui/core";

const breakpoints: any = ["320px", "768px", "992px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const customTheme = {
  ...theme,
  breakpoints,
  fonts: {
    body: "Comfortaa, cursive",
    heading: "Comfortaa, cursive",
  },
  fontSizes: {
    xs: "10px",
    sm: "13px",
    md: "18px",
    lg: "20px",
    xl: "26px",
    "2xl": "36px",
    "3xl": "40px",
    "4xl": "48px",
    "5xl": "50px",
    "6xl": "66px",
    "7xl": "90px",
  },
  colors: {
    ...theme.colors,
    purple: {
      500: "#B75AFF",
      900: "#622866",
    },
    blue: {
      500: "#5A5AFF",
    },
    gray: {
      100: "#F4F4F4",
      200: "#E4E4E4",
      600: "#717171",
    },
    tourquise: {
      500: "#79D1C2",
    },
  },
};
