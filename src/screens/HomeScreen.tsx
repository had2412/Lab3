import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button title="Xem danh sách (FlatList)" onPress={() => navigation.navigate('List')} />
      <Button title="Xem chi tiết (ScrollView)" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
});
