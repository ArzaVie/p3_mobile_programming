import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Daftar Produk' }} />
      <Stack.Screen name="ProductDetail" component={DetailScreen} options={{ title: 'Detail Produk' }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Konfirmasi Bayar' }} />
    </Stack.Navigator>
  );
}