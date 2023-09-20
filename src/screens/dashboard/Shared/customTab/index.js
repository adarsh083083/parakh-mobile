import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import { useSelector } from "react-redux";
import {DIMENSIONS} from '../../theme';
import {Images} from '../../../contants';
import { LIGHTTHEME } from '../../../../contants';

const {width, height} = Dimensions.get('window');

const CustomTab = ({home, settings}) => {
  // const COLORS = useSelector((state) => state.theme.COLORS);

  const Navigation = useNavigation();

  return (
    <View
      style={{
        elevation: 0,
        backgroundColor:  LIGHTTHEME.HOMEPAGE_SECONDARY,
        borderTopWidth: 0.3,
        height: 90,
        ...styles.shadow,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => Navigation.navigate('HomePage')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: DIMENSIONS.WIDTH * 0.1,
        }}>
        <Image
          style={{
            width: 25,
            height: 25,
            // tintColor: home ? COLORS.HOMEPAGE_PRIMARY : COLORS.HOMEPAGE_ICON
          }}
          source={require('../../assets/images/HomeIcon.png')}
        />
        <Text
          style={{
            // color: home ? COLORS.HOMEPAGE_PRIMARY : COLORS.HOMEPAGE_ICON,
            fontSize: 12,
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <View
        style={{
          top: -35,
          left: 0.015 * DIMENSIONS.WIDTH,
          right: 0 * DIMENSIONS.WIDTH,
        }}>
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate('CameraNavigator');
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            // backgroundColor: COLORS.HOMEPAGE_PRIMARY,
            borderRadius: 45,
          }}>
          <Image
            style={{
              width: 35,
              height: 35,
              tintColor: LIGHTTHEME.HOMEPAGE_SECONDARY,
            }}
            source={Images.CameraIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => Navigation.navigate('SettingsPage')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: DIMENSIONS.WIDTH * 0.1,
        }}>
        <Image
          style={{
            width: 25,
            height: 25,
            // tintColor: settings ? COLORS.HOMEPAGE_PRIMARY : COLORS.HOMEPAGE_ICON
          }}
          source={Images.SettingsIcon}
        />
        <Text
          style={{
            // color: settings ? COLORS.HOMEPAGE_PRIMARY : COLORS.HOMEPAGE_ICON,
            fontSize: 12,
          }}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 0,
  },
});

export default CustomTab;
