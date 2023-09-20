import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Images, LIGHTTHEME, Routes} from '../contants';
import {DIMENSIONS} from '../theme';
import Toast from 'react-native-toast-message';

const {width, height} = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';

const CustomTab = ({home, settings}) => {
  //   const LIGHTTHEME = useSelector(state => state.theme.LIGHTTHEME);
  const [isFirstImageSelected, setFirstImageSelected] = useState(true);
  const [isSecondImageSelected, setSecondImageSelected] = useState(false);
  const navigation = useNavigation();
  const handleFirstImagePress = () => {
    setFirstImageSelected(true);
    setSecondImageSelected(false);
    navigation.navigate(Routes.HOME_SCREEN);
  };

  const handleSecondImagePress = () => {
    setFirstImageSelected(false);
    setSecondImageSelected(true);
    navigation.navigate(Routes.SETTINGS_SCREEN);
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    })
      .then(image => {
        console.log(image);
      })
      .catch(error => {
        if (error.code === 'E_PICKER_CANCELLED') {
          Toast.show({
            type: 'error',
            text1: 'User cancelled image selection please select image first',
          });
          return false;
        }
      });
  };
  const Navigation = useNavigation();
  const isFocused = useIsFocused();
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.shadow, styles.innerContainer]}>
          <TouchableOpacity
            onPress={handleFirstImagePress}
            style={styles.homeImageContainer}>
            <Image
              style={[
                styles.homeIcon,
                {
                  tintColor: !isFirstImageSelected
                    ? LIGHTTHEME.HOMEPAGE_TEXT
                    : LIGHTTHEME.HOMEPAGE_PRIMARY,
                },
              ]}
              source={isFirstImageSelected ? Images.HomeIcon : Images.HomeIcon}
            />
            <Text
              style={{
                color: isFirstImageSelected
                  ? LIGHTTHEME.HOMEPAGE_PRIMARY
                  : LIGHTTHEME.HOMEPAGE_TEXT,

                fontSize: 12,
              }}>
              Home
            </Text>
          </TouchableOpacity>
          <View style={styles.CameraImageContainer}>
            <TouchableOpacity
              onPress={() => {
                openCamera();
              }}
              style={styles.cameraInnerContainer}>
              <Image style={styles.cameraIcon} source={Images.CameraIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleSecondImagePress}
            style={styles.settingContainer}>
            <Image
              style={[
                styles.settingInnerContainer,
                {
                  tintColor: isFirstImageSelected
                    ? LIGHTTHEME.HOMEPAGE_TEXT
                    : LIGHTTHEME.HOMEPAGE_PRIMARY,
                },
              ]}
              source={
                isFirstImageSelected ? Images.SettingsIcon : Images.SettingsIcon
              }
            />
            <Text
              style={{
                color: !isFirstImageSelected
                  ? LIGHTTHEME.HOMEPAGE_PRIMARY
                  : LIGHTTHEME.HOMEPAGE_TEXT,
                fontSize: 12,
              }}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHTTHEME.HOMEPAGE_SECONDARY,
  },
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
  innerContainer: {
    elevation: 0,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  homeImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: DIMENSIONS.WIDTH * 0.1,
  },
  homeIcon: {
    width: 25,
    height: 25,
  },
  CameraImageContainer: {
    top: -35,
    left: 0.015 * DIMENSIONS.WIDTH,
    right: 0 * DIMENSIONS.WIDTH,
  },
  cameraInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: LIGHTTHEME.HOMEPAGE_PRIMARY,
    borderRadius: 45,
  },
  cameraIcon: {
    width: 35,
    height: 35,
    tintColor: 'white',
  },
  settingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: DIMENSIONS.WIDTH * 0.1,
  },
  settingInnerContainer: {
    width: 25,
    height: 25,
  },
});

export default CustomTab;
