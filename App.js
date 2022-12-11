import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-green-600 font-bold text-lg">Open up App.js to start working on your app!</Text>
      <Button title="Click me" />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
