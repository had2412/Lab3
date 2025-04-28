import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  avatar: string;
  name?: string;
  phone?: string;
  onPress?: () => void;
}

const ContactThumbnail = ({ avatar, name, phone }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      {name && <Text style={styles.name}>{name}</Text>}
      {phone && <Text style={styles.phone}>{phone}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  phone: {
    marginTop: 4,
    fontSize: 16,
    color: 'white',
  },
});

export default ContactThumbnail;
