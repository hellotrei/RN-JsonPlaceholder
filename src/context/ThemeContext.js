import React, { useState, useEffect, createContext } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { themes } from '../styles/themes';

const deviceMode = Appearance.getColorScheme() ?? 'light';
console.log(`colorScheme: `, deviceMode);
//backgroundColor: themes.light.colors.alt,

export const ThemeContext = createContext({
  colors: themes[deviceMode].colors,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(deviceMode);
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ deviceMode }) => {
      setTheme(deviceMode);
    });
    return () => subscription.remove();
  }, []);
  console.log(`theme: `, theme);
  return (
    <ThemeContext.Provider
      value={{
        colors: themes[theme].colors,
        setTheme,
        dark: themes[theme].dark,
        theme: theme,
      }}
    >
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      {children}
    </ThemeContext.Provider>
  );
};
