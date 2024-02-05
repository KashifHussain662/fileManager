import React from 'react';
import {View, Text, Switch} from 'react-native';
import {useTheme} from '../../contaxt';

const DarkModeSwitch = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <View>
      <Text>Dark Mode</Text>
      <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
    </View>
  );
};

export default DarkModeSwitch;
