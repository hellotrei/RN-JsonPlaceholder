import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Cell } from './Cell';
export const Row = ({ id, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Cell value={id} />
      <Cell value={title} style={{ flex: 8 }} />
      <Cell value={'>'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
  },
});
