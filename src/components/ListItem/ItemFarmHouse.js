import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../screens/dashboard/HomeScreen/styles';

const ItemFarmHouse = ({item}) => {
  return (
    <View>
      <Image style={styles.categoryFarmImage} source={item.image} />
      <Text style={styles.categoryFarmTitle}>{item.name}</Text>
    </View>
  );
};

export default ItemFarmHouse;
