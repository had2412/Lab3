import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { fetchUserContact } from '../utils/api';
import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utils/color';

const User = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUserContact()
      .then((contact) => {
        setUser(contact);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.centered} />;
  if (error) return <Text style={styles.centered}>Lỗi khi tải dữ liệu...</Text>;

  const { avatar, name, phone } = user;

  return (
    <View style={styles.container}>
      <ContactThumbnail avatar={avatar} name={name} phone={phone} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default User;
