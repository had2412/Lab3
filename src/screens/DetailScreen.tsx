import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function DetailScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Thông tin chi tiết</Text>
      {Array.from({ length: 15 }, (_, i) => (
        <View key={i} style={styles.box}>
          <Text>Nội dung mục {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  box: {
    padding: 15,
    backgroundColor: '#dff',
    marginBottom: 10,
    borderRadius: 8,
  },
});
