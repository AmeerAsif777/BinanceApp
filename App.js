import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './Containers/header';
import AddressContainer from './Containers/addressContainer';
import Carousel from './Containers/carousel';
import Drawer from './Containers/Drawer/index';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Header />
    <AddressContainer /> 
    <Carousel />
    <Drawer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372D5C',
    justifyContent: "space-around",
    padding: 25,
  },
});
