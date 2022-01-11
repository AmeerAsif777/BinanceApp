import React, { Component, useState } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Popup from './popup';

export default function Drawer() {
  const [isShow, setShow] = useState(false);
  const close = () => {
    setShow(false);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          color: '#182E44',
          fontSize: 20,
          fontWeight: '500',
          margin: 15,
        }}
        onPress={() => setShow(!isShow)}
      >
        <Image
          style={{ width: 38, height: 38 }}
          source={require('../../Icons/upArrow.png')}
        />
      </TouchableOpacity>
      <Popup
        show={isShow}
        animationType={'fade'}
        closePopup={close}
        haveOutsideTouch={true}
      />
    </SafeAreaView>
  );
}
