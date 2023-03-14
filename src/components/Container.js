import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Container = ({ children, style }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: colors.base,
        ...style,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
