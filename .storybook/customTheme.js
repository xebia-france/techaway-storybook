import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  brandTitle: "Publicis Sapient Engineering - TechAway",
  brandUrl: "https://www.publicissapient.fr/services/technology-engineering",
  brandImage:
    "https://blog.engineering.publicissapient.fr/wp-content/uploads/2020/01/PSE.png",

  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "#FFFFFF",
  appContentBg: "#EEEEEE",
  appBorderColor: "#B4B4B4",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#000000",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#EEEEEE",
  barSelectedColor: "#000000",
  barBg: "#FE414D",

  // Form colors
  inputBg: "#079FFF",
  inputBorder: "#00E6C3",
  inputTextColor: "#FFE63B",
  inputBorderRadius: 4,
});
