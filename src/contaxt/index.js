// ThemeContext.js
import React, {createContext, useContext, useState} from 'react';
import {lightTheme, darkTheme} from '../theme/themeColor';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
