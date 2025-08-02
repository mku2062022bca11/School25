import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('green');

  const themes = {
    green: {
      primary: 'text-green-600',
      primaryDark: 'text-green-800',
      primaryBg: 'bg-green-600',
      primaryHover: 'hover:bg-green-700',
      border: 'border-green-500',
      focus: 'focus:ring-green-500',
      gradient: 'from-green-400 to-green-600'
    },
    blue: {
      primary: 'text-blue-600',
      primaryDark: 'text-blue-800',
      primaryBg: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      border: 'border-blue-500',
      focus: 'focus:ring-blue-500',
      gradient: 'from-blue-400 to-blue-600'
    },
    purple: {
      primary: 'text-purple-600',
      primaryDark: 'text-purple-800',
      primaryBg: 'bg-purple-600',
      primaryHover: 'hover:bg-purple-700',
      border: 'border-purple-500',
      focus: 'focus:ring-purple-500',
      gradient: 'from-purple-400 to-purple-600'
    },
    red: {
      primary: 'text-red-600',
      primaryDark: 'text-red-800',
      primaryBg: 'bg-red-600',
      primaryHover: 'hover:bg-red-700',
      border: 'border-red-500',
      focus: 'focus:ring-red-500',
      gradient: 'from-red-400 to-red-600'
    }
  };

  const currentTheme = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};