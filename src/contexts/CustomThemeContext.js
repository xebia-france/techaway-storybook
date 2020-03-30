import { createContext, useContext } from 'react';
import themes from 'themes';

export const formatCustomTheme = themeName => {
  const definition = themes[themeName] || undefined;
  const name = definition && themeName ? themeName : '';
  return {
    name,
    definition,
  };
};

const defaultThemeName = Object.keys(themes)[0];
export const defaultCustomThemeContextValue = {
  themes,
  currentTheme: formatCustomTheme(defaultThemeName),
};

export const CustomThemeContext = createContext(defaultCustomThemeContextValue);
export const useCustomThemeContext = () => useContext(CustomThemeContext);
export const CustomThemeProvider = CustomThemeContext.Provider;
