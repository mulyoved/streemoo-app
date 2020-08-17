import { theme } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  fonts: {
    body: "Comfortaa, system-ui, sans-serif",
    heading: "Comfortaa, Georgia, serif",
    mono: "Comfortaa, Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    primary: {
      100: "#CFD1FD",
      200: "#A7ABFB",
      300: "#8388F9",
      400: "#6268F8",
      500: "#444BF7",
      600: "#262EF6",
      700: "#0B14F5",
      800: "#0911DD",
      900: "#080FC7",
    },
  },
}

export default customTheme