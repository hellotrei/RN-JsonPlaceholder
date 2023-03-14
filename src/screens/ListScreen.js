import React from 'react';
import { FlatList } from 'react-native';
import { Container, Card, Row } from '../components';
import Empty from '../components/Empty';
import Loading from '../components/Loading';
import { useResources } from '../hooks/useResources';

export const ListScreen = ({ navigation }) => {
  const { resources, isLoading } = useResources('posts');
  
  if (isLoading) {
    return <Loading />;
  }

  if (resources.length === 0) {
    return <Empty message="No data available" />;
  }

  return (
    <Container>
      <Card>
        <FlatList
          data={resources}
          keyExtractor={(item) => item.id.toString()}
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
