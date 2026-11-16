import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import TaskCard from '../components/TaskCard';
import StatCard from '../components/StatCard';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../theme';

export default function HomeScreen({ navigation, tasks, onToggleTask }) {
  const [filter, setFilter] = useState('Todas');
  const completed = tasks.filter((task) => task.done).length;
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Pendentes') return !task.done;
    if (filter === 'Concluídas') return task.done;
    return true;
  });

  return <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <AppHeader title="Olá! 👋" subtitle="Vamos organizar suas tarefas de hoje?" rightLabel="●  ONLINE" />
    <View style={styles.stats}>
      <StatCard label="Tarefas no total" value={tasks.length} />
      <View style={{ width: 10 }} />
      <StatCard label="Concluídas" value={completed} tone="green" />
    </View>
    <View style={styles.sectionRow}>
      <Text style={styles.sectionTitle}>Minhas tarefas</Text>
      <Text style={styles.counter}>{visibleTasks.length} itens</Text>
    </View>
    <View style={styles.filters}>
      {['Todas', 'Pendentes', 'Concluídas'].map((item) =>
        <TouchableOpacity key={item} onPress={() => setFilter(item)}
          style={[styles.filter, filter === item && styles.activeFilter]}>
          <Text style={[styles.filterText, filter === item && styles.activeFilterText]}>{item}</Text>
        </TouchableOpacity>
      )}
    </View>
    {visibleTasks.length ? visibleTasks.map((task) =>
      <TaskCard key={task.id} task={task}
        onToggle={onToggleTask}
        onPress={() => navigation.navigate('Details', { task })} />
    ) : <View style={styles.empty}><Text style={styles.emptyTitle}>Tudo em dia! ✨</Text><Text style={styles.emptyText}>Não há tarefas nesta categoria.</Text></View>}
    <PrimaryButton title="+  Adicionar nova tarefa" onPress={() => navigation.navigate('AddTask')} />
    <Text style={styles.footer}>Pequenos passos, grandes conquistas.</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 22, paddingTop: 24, paddingBottom: 35 },
  stats: { flexDirection: 'row', marginBottom: 30 },
  sectionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 13 },
  sectionTitle: { color: COLORS.text, fontSize: 18, fontWeight: '800' },
  counter: { color: COLORS.muted, fontSize: 12 },
  filters: { flexDirection: 'row', marginBottom: 15, gap: 8 },
  filter: { paddingVertical: 9, paddingHorizontal: 14, borderRadius: 20, backgroundColor: '#ECEEF5' },
  activeFilter: { backgroundColor: COLORS.primary },
  filterText: { color: COLORS.muted, fontSize: 12, fontWeight: '600' },
  activeFilterText: { color: '#fff' },
  empty: { backgroundColor: COLORS.surface, padding: 28, borderRadius: 16, alignItems: 'center', marginBottom: 16 },
  emptyTitle: { color: COLORS.text, fontSize: 16, fontWeight: '800' },
  emptyText: { color: COLORS.muted, fontSize: 12, marginTop: 6 },
  footer: { textAlign: 'center', color: COLORS.muted, fontSize: 11, marginTop: 19 }
});
