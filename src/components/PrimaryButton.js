import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function PrimaryButton({ title, onPress, secondary = false }) {
  return <TouchableOpacity activeOpacity={0.85} onPress={onPress}
    style={[styles.button, secondary && styles.secondary]}>
    <Text style={[styles.label, secondary && styles.secondaryLabel]}>{title}</Text>
  </TouchableOpacity>;
}
const styles = StyleSheet.create({
  button: { backgroundColor: COLORS.primary, borderRadius: 15, minHeight: 54, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  secondary: { backgroundColor: COLORS.primaryLight },
  label: { color: '#fff', fontSize: 15, fontWeight: '700' },
  secondaryLabel: { color: COLORS.primary }
});
