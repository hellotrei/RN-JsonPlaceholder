import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Container } from '../components';
import { useTheme } from '../hooks/useTheme';

export const IntroScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Text style={{...styles.title, color: colors.text}}>Hi Welcome!</Text>
      <Button
        style={{ backgroundColor: '#4c5265', borderColor: '#212129' }}
        onPress={() => navigation.navigate('List')}
        buttonText={"Let's Begin!"}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    lineHeight: 45,
    letterSpacing: 0.36,
  },
});
