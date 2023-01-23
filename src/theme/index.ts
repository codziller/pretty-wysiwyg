import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: {
      text: "#343E37",
      light: "#333333",
      dark:"#010E05"
    },
    grey: {
      border: "#CEE3D4",
      light: "#FAFAFA",
      placeholder:"#CACACA"
    },
    green: {
      primary: "#212121",
      light: "#E7F1E9",
      button: "#0A7227",
      "hover-button": "08521d",
      "hover-light": "#b3c1b6",
      hover: "#F7FCF8",
      border: "#6CAA7D",
    },
  },
  fonts: {
    bold: `MontserratBold, sans-serif`,
    medium: `MontserratSemiBold, sans-serif`,
    regular: `Montserrat, sans-serif`,
    normal: "MontserratRegular, sans-serif",
  },

  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default theme;
