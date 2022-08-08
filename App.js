import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import DateHead from './component/DateHead';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import AddTodo from './component/AddTodo';
import Empty from './component/Empty';
import TodoList from './component/TodoList';
import AsyncStorage from '@react-native-community/async-storage';

function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리엑트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  // load
  useEffect(() => {
    async function load() {
      try {
        const rawTodos = await AsyncStorage.get('todos');
        const savedTodos = JSON.parse(rawTodos);
        setTodos(savedTodos);
      } catch (e) {
        console.error('Fail save todos');
      }
    }
    load();
  }, []);

  //save
  useEffect(() => {
    async function save() {
      try {
        await AsyncStorage.setTime('todos', JSON.stringify(todos));
      } catch (e) {
        console.error('Fail save todos');
      }
    }
    save();
  }, [todos]);

  const onInsert = text => {
    // 새로등록할 항목의 id 조회 -> 가장큰 아이디에서 +1, 리스트가 없다면 1을 사용
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo)); // 새로운 todo를 todos에 추가
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
