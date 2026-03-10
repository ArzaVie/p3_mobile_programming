import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { itemName, price } = route.params; // Ambil data dari params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Produk</Text>
      <Text style={styles.info}>Nama: {itemName}</Text>
      <Text style={styles.info}>Harga: {price}</Text>
      <Button title="Lanjut Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold' },
  info: { fontSize: 16, marginVertical: 5 }
});