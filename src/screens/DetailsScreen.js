import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Loading from '../components/Loading';
import { useResources } from '../hooks/useResources';
import { useTheme } from '../hooks/useTheme';

export const DetailsScreen = ({ route }) => {
  const { colors } = useTheme();
  const { post } = route.params;
  const { resources: comments, isLoading } = useResources(`comments?postId=${post.id}`);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.headerContainer, { backgroundColor: colors.card }]}>
        <Text style={{ color: colors.text, fontSize: 18 }}>{post.title}</Text>
        <Text style={{ color: colors.text, fontSize: 12 }}>POST BODY:</Text>
        <Text style={{ color: colors.text, fontSize: 14, marginTop: 10 }}>{post.body}</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 10 }}
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.commentContainer, { backgroundColor: colors.card }]}>
            <Text style={{ color: colors.text, fontSize: 14 }}>
              COMMENT {item.id}:
            </Text>
            <Text style={{ color: colors.text, fontSize: 14 }}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
  },
  headerContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  commentContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
