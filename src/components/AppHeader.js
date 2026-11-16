import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function AppHeader({ title, subtitle, onBack, rightLabel }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.top}>
        {onBack ? <TouchableOpacity onPress={onBack} style={styles.back}><Text style={styles.backText}>‹</Text></TouchableOpacity> : <View style={styles.logo}><Text style={styles.logoText}>✓</Text></View>}
        <Text style={styles.brand}>TASKFLOW</Text>
        {rightLabel ? <Text style={styles.right}>{rightLabel}</Text> : <View style={{ width: 36 }} />}
      </View>
      <Text style={styles.title}>{title}</Text>
      {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: { paddingTop: 14, paddingBottom: 18 },
  top: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  logo: { width: 34, height: 34, borderRadius: 11, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#fff', fontSize: 21, fontWeight: '800' },
  brand: { color: COLORS.text, fontSize: 12, letterSpacing: 2.2, fontWeight: '800', marginLeft: 10, flex: 1 },
  right: { color: COLORS.muted, fontSize: 12 },
  back: { width: 34, height: 34, borderRadius: 11, backgroundColor: COLORS.surface, alignItems: 'center', justifyContent: 'center' },
  backText: { color: COLORS.text, fontSize: 28, lineHeight: 30 },
  title: { color: COLORS.text, fontSize: 29, fontWeight: '800', letterSpacing: -0.7 },
  subtitle: { color: COLORS.muted, fontSize: 14, marginTop: 6, lineHeight: 20 }
});
