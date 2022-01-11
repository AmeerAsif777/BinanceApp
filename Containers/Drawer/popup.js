import React, { Component, useState } from 'react';
import {
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';

import ChatConversation from './chatConversation';
const Icons = {
  upArrow: require('../../Icons/upArrow.png'),
};

export default function BottomPopup({
  show,
  animationType,
  closePopup,
  haveOutsideTouch,
}) {
  const [height, setHeight] = useState('60%');

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={show}
      onRequestClose={() => {}}
    >
      <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
        <Pressable
          onPress={() => {
            if (!haveOutsideTouch) return;
            closePopup();
          }}
          style={{ flex: 1 }}
        ></Pressable>

        <View
          style={{
            bottom: 0,
            position: 'absolute',
            width: '100%',
            backgroundColor: 'black',
            borderRadius: 25,
            height: height,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              color: '#182E44',
              fontSize: 20,
              fontWeight: '500',
              margin: 15,
            }}
            onPress={closePopup}
          >
            <Image
              style={{ width: 38, height: 38, marginTop: -25 }}
              source={Icons.upArrow}
            />
          </TouchableOpacity>
          <ChatConversation />
        </View>
      </View>
    </Modal>
  );
}
