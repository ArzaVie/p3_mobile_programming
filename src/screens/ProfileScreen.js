import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // <--- Tadi kurang TouchableOpacity di sini
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Bagian Header Profile */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="#fff" />
        </View>
        <Text style={styles.name}>Arza</Text>
        <Text style={styles.email}>arza@student.upnvj.ac.id</Text>
      </View>
      
      {/* Bagian Menu */}
      <View style={styles.menuContainer}>
        <ProfileMenu icon="settings-outline" label="Account Settings" />
        <ProfileMenu icon="notifications-outline" label="Notifications" />
        <ProfileMenu icon="help-circle-outline" label="Help Center" />
        <ProfileMenu icon="log-out-outline" label="Logout" color="#FF3B30" />
      </View>
    </View>
  );
}

// Komponen Kecil buat barisan menu biar gak nulis ulang
function ProfileMenu({ icon, label, color = '#333' }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Ionicons name={icon} size={22} color={color} />
      <Text style={[styles.menuLabel, { color }]}>{label}</Text>
      <Ionicons name="chevron-forward" size={18} color="#ccc" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', padding: 40, backgroundColor: '#F8F9FA', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center', marginBottom: 15, elevation: 5 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#1A1C1E' },
  email: { color: '#717679', marginTop: 5 },
  menuContainer: { padding: 20, marginTop: 10 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#F1F3F5' },
  menuLabel: { flex: 1, marginLeft: 15, fontSize: 16, fontWeight: '500' }
});