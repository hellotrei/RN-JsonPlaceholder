import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Button = ({ onPress, buttonText, style }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        ...styles.customButton,
        backgroundColor: colors.alt,
        borderColor: colors.primary,
        ...style,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.textStyle,
          color: colors.buttonText,
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customButton: {
    height: 50,
    width: 300,
    borderRadius: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  textStyle: {
    fontSize: 17,
    letterSpacing: 0.6,
    textAlign: 'center',
    lineHeight: 22,
  },
});
