import React, { useEffect, useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  CustomThemeProvider,
  defaultCustomThemeContextValue,
  formatCustomTheme,
} from 'contexts/CustomThemeContext';
import themes from 'themes';
import App from 'App';
import 'i18n';

const Root = () => {
  const [currentTheme, setCurrentTheme] = useState(
    defaultCustomThemeContextValue.currentTheme,
  );

  const onSelectTheme = name => {
    window.localStorage.setItem('theme', name);
    setCurrentTheme(formatCustomTheme(name));
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setCurrentTheme(formatCustomTheme(localTheme));
  }, []);

  return (
    <Suspense fallback={<div>loading</div>}>
      <CustomThemeProvider
        value={{
          currentTheme,
          themes,
          onSelectTheme,
        }}
      >
        <ThemeProvider theme={currentTheme.definition || createMuiTheme()}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CustomThemeProvider>
    </Suspense>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
