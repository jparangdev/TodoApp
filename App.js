import React from 'react';
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

function App() {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={today} />
          <Empty />
          <AddTodo />
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
