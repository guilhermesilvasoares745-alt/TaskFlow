import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function StatCard({ label, value, tone = 'purple' }) {
  const color = tone === 'green' ? COLORS.green : COLORS.primary;
  const bg = tone === 'green' ? COLORS.greenLight : COLORS.primaryLight;
  return <View style={[styles.card, { backgroundColor: bg }]}>
    <Text style={[styles.value, { color }]}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>;
}
const styles = StyleSheet.create({
  card: { flex: 1, padding: 15, borderRadius: 16 },
  value: { fontSize: 25, fontWeight: '800' },
  label: { color: COLORS.muted, fontSize: 11, marginTop: 4, fontWeight: '600' }
});
