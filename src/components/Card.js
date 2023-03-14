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
    flex: 1,
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
});
