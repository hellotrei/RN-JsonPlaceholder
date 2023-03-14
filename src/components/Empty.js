import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const Empty = ({ message }) => {
  const { colors } = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: colors.card}}>
      <Text style={{...styles.message, color: colors.text}}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
  },
});

export default Empty;
