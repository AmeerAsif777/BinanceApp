import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const textItems = {
  companyName: 'Binance Offical',
  totalMembers: '320K',
};
const Icons = {
  return: require('../Icons/return.png'),
  logo: require('../Icons/logo.png'),
  lobby: require('../Icons/lobby.png'),
  link: require('../Icons/link.png'),
};

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, {justifyContent: 'space-between'}]}>
        <Image
          style={styles.imageDimension}
          source={Icons['return']}
        />
        <View style={styles.subContainer}>
          <Image
            style={{ width: 25, height: 25 }}
            source={Icons['logo']}
          />
          <Text
            style={{ margin: 10, fontWeight: 'bold', color: 'white' }}
          >
            {textItems.companyName}
          </Text>
        </View>
        <Image
          style={styles.imageDimension}
          source={Icons['lobby']}
        />
      </View>
      <View style={[styles.subContainer, {justifyContent: 'center'}]}>
        <Image
          style={{ width: 20, height: 20 }}
          source={Icons['link']}
        />
        <Text
          style={{ margin: 10, fontWeight: '300', color: 'white' }}
        >
          {textItems.totalMembers}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'column',
    backgroundColor: '#372D5C',
    justifyContent: 'space-evenly',
    color: 'white',
  },
  subContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageDimension:{
    width: 30, 
    height: 30 
  }
});
