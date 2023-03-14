import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { Button, Container, Card, Row } from '../components';
import { useResources } from '../hooks/useResources';

export const ListScreen = ({ navigation }) => {
  const resources = useResources('posts');
  console.log(`resources from List Screen : `, resources);
  return (
    <Container>
      <Card>
        <FlatList
          style={styles.list}
          data={resources}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Row
              id={item.id}
              title={item.title}
              onPress={() => navigation.navigate('Details', { post: item })}
            />
          )}
        />
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 30,
  },
});
