import React from 'react';
import { Navigator } from './src/navigation/Navigator';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
