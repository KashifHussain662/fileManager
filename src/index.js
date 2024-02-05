import React from 'react';
import DarkModeSwitch from './screens/profile';
import RootStack from './routes';
import {ThemeProvider} from './contaxt';

const App = () => {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
};

export default App;
