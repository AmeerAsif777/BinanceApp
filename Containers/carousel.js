import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Carousel() {
  const items = [
    {
      icon: require('../Icons/website.png'),
      name: 'Website',
    },
    {
      icon: require('../Icons/description.png'),
      name: 'White Paper',
    },
    { icon: require('../Icons/chart.png'), name: 'Tokenomics' },
    { icon: require('../Icons/bscScan.png'), name: 'BSC Scan' },
    { icon: require('../Icons/pooCoin.png'), name: 'PooCoin' },
    { icon: require('../Icons/notes.png'), name: 'Notes' },
    { icon: require('../Icons/link.png'), name: 'UR Links' },
    { icon: require('../Icons/link.png'), name: 'Notes' },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View
          style={styles.individualItem}
          key={`${index}+${item.name}`}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={item.icon}
          />
          <Text style={{ color: '#A6A6A6' }}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#111111',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-between',
    flex: 0.3,
    borderWidth: 2,
    borderRadius: 16,
  },
  individualItem: {
    color: '#A6A6A6',
    flexBasis: '22%',
    alignItems: 'center',
  },
});
