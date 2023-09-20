import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../screens/dashboard/HomeScreen/styles';

const ItemCategory = ({item}) => {
  return (
    <View style={styles.categoryStyle}>
      <Image style={styles.categoryImage} source={{uri: item.image}} />
      <Text style={styles.categoryTitle}>{item.name}</Text>
    </View>
  );
};

export default ItemCategory;
