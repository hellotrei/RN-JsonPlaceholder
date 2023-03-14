import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Cell = ({ value, textStyle, style }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.cell, ...style }}>
      <Text
        numberOfLines={1}
        style={{ ...styles.text, color: colors.text, ...textStyle }}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    lineHeight: 15,
    textTransform: 'capitalize',
  },
});
