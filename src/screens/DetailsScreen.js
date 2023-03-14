import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useResources } from '../hooks/useResources';
import { useTheme } from '../hooks/useTheme';

export const DetailsScreen = ({ route }) => {
  const { colors } = useTheme();
  const { post } = route.params;
  const comments = useResources(`comments?postId=${post.id}`);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={{color: colors.text}}>POST BODY :{post.body}-----------</Text>
        )}
        style={{ padding: 10, backgroundColor: colors.card, }}
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{color: colors.text}}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
