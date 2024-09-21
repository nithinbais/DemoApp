import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import homeIcon from '../assets/home.png';
import FavIcon from '../assets/heart.png';
import Home from '../screens/Home';
import FavScreen from '../screens/FavScreen';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({source, focused}) => (
  <View style={styles.iconContainer}>
    <Image
      style={[styles.icon, {tintColor: focused ? 'green' : 'grey'}]}
      source={source}
    />
  </View>
);

const TabBarLabel = ({label, focused}) => (
  <Text style={[styles.label, {color: focused ? 'green' : 'grey'}]}>
    {label}
  </Text>
);

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, tabBarStyle: styles.tabBar}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: styles.header,
          headerTintColor: '#fff',
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Home" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon source={homeIcon} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="FavScreen"
        component={FavScreen}
        options={{
          headerStyle: styles.header,
          headerTintColor: '#fff',
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Favroite" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon source={FavIcon} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
  label: {
    fontSize: 10,
  },
  tabBar: {
    height: 60,
  },
});
