module.exports = {
  extends: [
    "standard",
    "standard-react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  rules: {
    "react/jsx-pascal-case": 0,
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4",
    },
  },
  parser: "babel-eslint",
};
