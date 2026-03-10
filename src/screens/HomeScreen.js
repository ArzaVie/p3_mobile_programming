import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const products = [
    { id: 1, name: 'Sony A7 III', price: 'Rp 25.000.000', icon: 'camera' },
    { id: 2, name: 'MacBook Pro M2', price: 'Rp 21.500.000', icon: 'laptop' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Featured Products</Text>
      {products.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.productCard}
          onPress={() => navigation.navigate('ProductDetail', { itemName: item.name, price: item.price })}
        >
          <View style={styles.iconContainer}>
            <Ionicons name={item.icon} size={40} color="#007AFF" />
          </View>
          <View style={styles.info}>
            <Text style={styles.prodName}>{item.name}</Text>
            <Text style={styles.prodPrice}>{item.price}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#1A1C1E' },
  productCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F9FA', padding: 15, borderRadius: 15, marginBottom: 15, borderWidth: 1, borderColor: '#eee' },
  iconContainer: { width: 60, height: 60, backgroundColor: '#E1EFFF', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  info: { flex: 1, marginLeft: 15 },
  prodName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  prodPrice: { fontSize: 14, color: '#007AFF', marginTop: 4 }
});