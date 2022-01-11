import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
const Icons = {
  emoji: require('../../Icons/emoji.png'),
  expand: require('../../Icons/expand.png'),
  mic: require('../../Icons/mic.png'),
  upArrow: require('../../Icons/upArrow.png'),
};

export default function ChatConversation() {
  return (
    <View style={styles.drawerModal}>
      <View style={styles.inputEmoji}>
        <TextInput style={{ width: '80%', color:'white' }} />
        <Image style={styles.imageDimension} source={Icons.emoji} />
      </View>
      <Image style={styles.imageDimension} source={Icons.expand} />
      <Image style={styles.imageDimension} source={Icons.mic} />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerModal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputEmoji: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    backgroundColor: 'black',
    borderRadius: 20,
    borderColor: '#4A3798',
    justifyContent: 'space-between',
    padding: 5,
  },
  imageDimension: {
    width: 30,
    height: 30,
  },
});
