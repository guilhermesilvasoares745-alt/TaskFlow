import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../theme';

export default function DetailsScreen({ navigation, route, onToggleTask }) {
  const { task } = route.params; // Parâmetro recebido pela navegação.
  const isDone = task.done;

  return <View style={styles.container}>
    <AppHeader title="Detalhes" subtitle="Veja as informações desta tarefa." onBack={() => navigation.goBack()} />
    <View style={styles.card}>
      <Text style={styles.category}>{task.category.toUpperCase()}</Text>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description || 'Nenhuma descrição foi adicionada.'}</Text>
      <View style={styles.line} />
      <Text style={styles.meta}>Criada: {task.date}</Text>
      <Text style={styles.meta}>Status: {isDone ? 'Concluída' : 'Pendente'}</Text>
    </View>
    <PrimaryButton title={isDone ? 'Marcar como pendente' : 'Marcar como concluída'}
      onPress={() => { onToggleTask(task.id); navigation.goBack(); }} />
  </View>;
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 22, paddingTop: 24, paddingBottom: 28 },
  card: { backgroundColor: COLORS.surface, padding: 22, borderRadius: 20, marginBottom: 20 },
  category: { color: COLORS.primary, fontSize: 11, fontWeight: '800', letterSpacing: 1.4, marginBottom: 13 },
  title: { color: COLORS.text, fontSize: 24, fontWeight: '800', lineHeight: 31 },
  description: { color: COLORS.muted, fontSize: 14, lineHeight: 22, marginTop: 13 },
  line: { height: 1, backgroundColor: COLORS.border, marginVertical: 20 },
  meta: { color: COLORS.muted, fontSize: 13, marginBottom: 9 }
});
