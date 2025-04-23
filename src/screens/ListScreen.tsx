import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const fakeData = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  title: `Mục số ${i + 1}`,
}));

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={fakeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 15,
    backgroundColor: '#eee',
    marginBottom: 8,
    borderRadius: 8,
  },
});
