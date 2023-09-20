import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const TitleComp = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TitleComp;
