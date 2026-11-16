import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SHADOW } from '../theme';

export default function TaskCard({ task, onPress, onToggle }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.checkArea} onPress={() => onToggle(task.id)}>
        <View style={[styles.check, task.done && styles.checked]}>{task.done ? <Text style={styles.tick}>✓</Text> : null}</View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.info} onPress={onPress} activeOpacity={0.75}>
        <Text style={[styles.title, task.done && styles.completed]}>{task.title}</Text>
        <Text style={styles.meta}>{task.category}  ·  {task.date}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.arrow}><Text style={styles.arrowText}>›</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: COLORS.surface, borderRadius: 17, padding: 15, flexDirection: 'row', alignItems: 'center', marginBottom: 11, ...SHADOW },
  checkArea: { paddingRight: 13, paddingVertical: 5 },
  check: { width: 23, height: 23, borderRadius: 8, borderWidth: 1.7, borderColor: '#D7D8E5', alignItems: 'center', justifyContent: 'center' },
  checked: { backgroundColor: COLORS.green, borderColor: COLORS.green },
  tick: { color: '#fff', fontSize: 14, fontWeight: '800' },
  info: { flex: 1 },
  title: { color: COLORS.text, fontSize: 14, fontWeight: '700' },
  completed: { color: COLORS.muted, textDecorationLine: 'line-through' },
  meta: { color: COLORS.muted, fontSize: 11, marginTop: 5 },
  arrow: { paddingHorizontal: 5, paddingVertical: 5 },
  arrowText: { fontSize: 25, color: '#B5B6C5' }
});
