import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

/**
 * data => 설정해주면 renderItem을 통해 화면에 표시
 * renderItem => 아이템들을 각각 보여줄 형식
 * keyExtractor => 각 아이템을 지정해줄 고유값
 * */
function TodoList({todos, onToggle, onRemove}) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
