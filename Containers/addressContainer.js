import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Clipboard,
} from 'react-native';

export default function AddressContainer() {
  const addressId = 'OX1123456ERTYUI09865WERTYUIO'; //Sample data
  const moveToAddNewCustomer = () => {
    Clipboard.setString(addressId);
    ToastAndroid.showWithGravity(
      'Copy to text',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  };
  return (
    <React.Fragment>
      <View style={styles.mainLayout}>
        <View style={styles.Address}>
          <Text style={styles.AddressColor}>
            {`CONTRACT Address: ${
              addressId.slice(0, 6) + '....' + addressId.slice(-6)
            }`}
          </Text>
          <TouchableOpacity onPress={moveToAddNewCustomer}>
            <Image
              style={styles.imageDimension}
              source={require('../Icons/copy.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.time}>
            Presale starting in:{' '}
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              04h 30m
            </Text>
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#372D5C',
  },
  Address: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'black',
    textTransform: 'uppercase',
    padding: 8,
  },
  AddressColor: {
    color: 'white',
  },
  time: {
    textTransform: 'uppercase',
    color: '#A6A6A6',
    fontSize: 10,
    marginTop: 10,
  },
  imageDimension:{
    width: 25, 
    height: 25 
  }
});
