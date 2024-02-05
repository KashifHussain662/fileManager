import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditProfileScreen, Home, Viewer, Welcome} from '../screens';
import {ThemeProvider} from '../contaxt';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTintColor: '#fff', // White text for the header
            headerTitleStyle: {
              fontWeight: 'bold', // Bold font for the header title
            },
          }}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Viewer" component={Viewer} />
          <Stack.Screen name="Profile" component={EditProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default RootStack;
