import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Card = ({ children, style }) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styles.card,
        backgroundColor: colors.card,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10
  },
});
