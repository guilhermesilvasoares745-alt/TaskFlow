import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { COLORS } from './src/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isReady, setIsReady] = useState(false);

  // Carrega os dados iniciais ao abrir o aplicativo.
  useEffect(() => {
    const initialTasks = [
      { id: '1', title: 'Estudar React Native', description: 'Revisar componentes, props e hooks.', category: 'Estudos', done: false, date: 'Hoje' },
      { id: '2', title: 'Entregar atividade', description: 'Conferir os requisitos do projeto mobile.', category: 'Faculdade', done: false, date: 'Hoje' },
      { id: '3', title: 'Organizar a semana', description: 'Separar horários para estudo e academia.', category: 'Pessoal', done: true, date: 'Ontem' },
    ];
    const timer = setTimeout(() => {
      setTasks(initialTasks);
      setIsReady(true);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  const addTask = (taskData) => {
    const newTask = { ...taskData, id: String(Date.now()), done: false, date: 'Hoje' };
    setTasks((current) => [newTask, ...current]);
  };

  const toggleTask = (id) => {
    setTasks((current) => current.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  if (!isReady) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.bg }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLORS.bg },
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} tasks={tasks} onToggleTask={toggleTask} />}
        </Stack.Screen>
        <Stack.Screen name="AddTask">
          {(props) => <AddTaskScreen {...props} onAddTask={addTask} />}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {(props) => <DetailsScreen {...props} onToggleTask={toggleTask} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
