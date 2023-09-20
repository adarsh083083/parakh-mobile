import {View, Image} from 'react-native';
import React from 'react';

const Header = ({sourceImage}) => {
  return (
    <View>
      <Image source={sourceImage} style={{width: 20, height: 20}} />
    </View>
  );
};

export default Header;
