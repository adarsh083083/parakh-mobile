import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const AppColoredButton = ({label, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonSubmitStyle}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppColoredButton;
