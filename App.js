import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeTabs from './src/navigation/HomeTabs';

export default function App() {
  // Ubah ke true untuk masuk ke Home, false untuk ke Login
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
}