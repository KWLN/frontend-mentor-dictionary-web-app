import { DictionaryPage } from './pages/dictionary';
import './App.css';
import { FontFamily, GlobalStyles, Theme } from './global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { colorThemes } from './constants/tokens';

function App() {
  const [theme, setTheme] = useState<Theme>({
    colorMode: 'light',
    colors: colorThemes.light,
    fontFamily: 'Inter',
  });

  const setFontFamily = (fontFamily: FontFamily) => {
    setTheme((prev) => ({ ...prev, fontFamily }));
  };

  const toggleColorMode = () => {
    if (theme.colorMode === 'light') {
      setTheme((prev) => ({ ...prev, colorMode: 'dark', colors: colorThemes.dark }));
    } else {
      setTheme((prev) => ({ ...prev, colorMode: 'light', colors: colorThemes.light }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DictionaryPage setFontFamily={setFontFamily} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  );
}

export default App;
