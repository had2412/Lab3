import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ContactThumbnail from '../components/ContactThumbnail';
import { fetchContacts } from '../utils/api';
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from '../redux/store';

const Favorites = ({ navigation }: any) => {
  const { contacts, loading, error } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((contacts) => dispatch(fetchContactsSuccess(contacts)))
      .catch(() => dispatch(fetchContactsError()));
  }, []);

  const favorites = contacts.filter((c: any) => c.favorite);

  const renderItem = ({ item }: any) => (
    <ContactThumbnail
      avatar={item.avatar}
      onPress={() => navigation.navigate('Profile', { contact: item })}
    />
  );

  if (loading) return <ActivityIndicator size="large" style={styles.centered} />;
  if (error) return <Text style={styles.centered}>Có lỗi xảy ra...</Text>;

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    alignItems: 'center',
  },
});

export default Favorites;
