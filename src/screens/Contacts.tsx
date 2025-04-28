import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import { fetchContacts } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from '../redux/store';

const Contacts = ({ navigation }: any) => {
  const { contacts, loading, error } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((contacts) => dispatch(fetchContactsSuccess(contacts)))
      .catch(() => dispatch(fetchContactsError()));
  }, []);

  const renderItem = ({ item }: any) => (
    <ContactListItem
      name={item.name}
      phone={item.phone}
      avatar={item.avatar}
      onPress={() => navigation.navigate('Profile', { contact: item })}
    />
  );

  if (loading) return <ActivityIndicator size="large" style={styles.centered} />;
  if (error) return <Text style={styles.centered}>Có lỗi xảy ra...</Text>;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hoàng Anh Dũng - 2124802010604</Text>
      </View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Contacts;
