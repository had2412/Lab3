import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import User from '../screens/User';
import Options from '../screens/Options';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/color';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const ContactsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.blue },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen name="Contacts" component={Contacts} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.blue },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const UserStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.blue },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen
      name="User"
      component={User}
      options={({ navigation }) => ({
        headerRight: () => (
          <MaterialIcons
            name="settings"
            size={24}
            color="white"
            onPress={() => navigation.navigate('Options')}
            style={{ marginRight: 10 }}
          />
        ),
      })}
    />
    <Stack.Screen name="Options" component={Options} />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Contacts" component={ContactsStack} />
    <Drawer.Screen name="Favorites" component={FavoritesStack} />
    <Drawer.Screen name="User" component={UserStack} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
