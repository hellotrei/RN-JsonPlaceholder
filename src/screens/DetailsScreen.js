import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useResources } from '../hooks/useResources';

export const DetailsScreen = ({ route }) => {
  const { post } = route.params;
  const comments = useResources(`comments?postId=${post.id}`);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Text>POST BODY :{post.body}-----------</Text>
        )}
        style={{ padding: 10 }}
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>
            COMMENT {item.id}: {item.body}
          </Text>
        )}
      />
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
