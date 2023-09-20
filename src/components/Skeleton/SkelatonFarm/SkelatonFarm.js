import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from '../../../screens/dashboard/HomeScreen/styles';
const SkelatonFarm = ({item}) => {
  return (
    <SkeletonPlaceholder>
      <View>
        <Image style={styles.categoryFarmImage} source={item.image} />
        <Text style={styles.categoryFarmTitle}>{item.name}</Text>
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkelatonFarm;
