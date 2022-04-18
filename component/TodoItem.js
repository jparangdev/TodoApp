import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TodoItem({id, text, done, onToggle, onRemove}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        {/*onPress={onToggle(id)} 형태로 작성하면 안됨.. 이런경우 컴포넌트가 리랜더링 될때마다 onToggle(id)를 호출*/}
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity onPress={() => onRemove(id)}>
          {/* 아직도 화살표로 하는것고 아닌것의 차이를 모르겠다. */}
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.replaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  replaceHolder: {
    width: 32,
    height: 32,
  },
});

export default TodoItem;
