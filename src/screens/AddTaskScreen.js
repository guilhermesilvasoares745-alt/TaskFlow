import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import AppHeader from '../components/AppHeader';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../theme';

const categories = ['Estudos', 'Trabalho', 'Pessoal'];

export default function AddTaskScreen({ navigation, onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Pessoal');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Atenção', 'Digite um título para a tarefa.');
      return;
    }
    onAddTask({ title: title.trim(), description: description.trim(), category });
    navigation.goBack();
  };

  return <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
    <AppHeader title="Nova tarefa" subtitle="Preencha os detalhes para não esquecer." onBack={() => navigation.goBack()} />
    <Text style={styles.label}>Título da tarefa</Text>
    <TextInput value={title} onChangeText={setTitle} placeholder="Ex.: Estudar para a prova"
      placeholderTextColor="#A6A8B8" style={styles.input} />
    <Text style={styles.label}>Descrição</Text>
    <TextInput value={description} onChangeText={setDescription} placeholder="Adicione alguns detalhes..."
      placeholderTextColor="#A6A8B8" style={[styles.input, styles.textArea]} multiline />
    <Text style={styles.label}>Categoria</Text>
    <View style={styles.categories}>
      {categories.map((item) => <TouchableOpacity key={item}
        onPress={() => setCategory(item)}
        style={[styles.category, category === item && styles.selectedCategory]}>
        <Text style={[styles.categoryText, category === item && styles.selectedText]}>{item}</Text>
      </TouchableOpacity>)}
    </View>
    <View style={{ height: 25 }} />
    <PrimaryButton title="Salvar tarefa" onPress={handleSave} />
    <View style={{ height: 10 }} />
    <PrimaryButton title="Cancelar" secondary onPress={() => navigation.goBack()} />
  </ScrollView>;
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 22, paddingTop: 24, paddingBottom: 35 },
  label: { color: COLORS.text, fontWeight: '700', fontSize: 13, marginBottom: 9, marginTop: 18 },
  input: { backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.border, borderRadius: 14, paddingHorizontal: 15, paddingVertical: 14, fontSize: 14, color: COLORS.text },
  textArea: { height: 110, textAlignVertical: 'top' },
  categories: { flexDirection: 'row', gap: 9, flexWrap: 'wrap' },
  category: { borderRadius: 20, backgroundColor: '#ECEEF5', paddingVertical: 10, paddingHorizontal: 15 },
  selectedCategory: { backgroundColor: COLORS.primaryLight, borderWidth: 1, borderColor: COLORS.primary },
  categoryText: { color: COLORS.muted, fontSize: 12, fontWeight: '600' },
  selectedText: { color: COLORS.primary }
});
