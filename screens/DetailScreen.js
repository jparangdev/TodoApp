import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailScreen({route}) {
  console.log(route);
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id : {route.params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default DetailScreen;
