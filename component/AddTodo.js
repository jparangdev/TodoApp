import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');
  console.log(text);

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력하세요."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <View style={styles.buttonStyle}>
        <Image source={require('../assets/icons/add_white/add_white.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    flex: 1,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
});

export default AddTodo;
