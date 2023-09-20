import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from '../SkelatonCategory/styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {DIMENSIONS} from '../../../theme';

const SkelatonCategory = ({item}) => {
  console.log(item);
  return (
    <SkeletonPlaceholder>
      <View>
        <Image style={styles.categoryImage} source={{uri: item.image}} />
        <Text style={styles.categoryTitle}>{item.name}</Text>
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkelatonCategory;
