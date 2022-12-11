// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    // Higher level component */
    //NavigationContainer is is higher order level
    <NavigationContainer>
      <AuthProvider >
        {/*Passes down the coll auth to children  */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}


