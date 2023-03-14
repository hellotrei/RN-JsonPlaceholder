import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CreditsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreditsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
