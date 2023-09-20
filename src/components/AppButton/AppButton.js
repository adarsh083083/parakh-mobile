import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const AppButton = ({label, title, onPress}) => {
  return (
    <View>
      <Text style={styles.buttonLabel}>{label}</Text>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;
