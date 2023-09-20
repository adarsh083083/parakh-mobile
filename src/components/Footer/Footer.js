import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Footer = ({titleDont, titleSignUp, onPress}) => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerDont}> {titleDont}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.footerSignUp}> {titleSignUp}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
