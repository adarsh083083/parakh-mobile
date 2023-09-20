import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LIGHTTHEME} from '../../contants';
const styles = StyleSheet.create({
  imageContainer: {
    width: 20,
    height: 20,
    position: 'absolute',
    alignItems: 'flex-end',
    width: '100%',
    bottom: moderateScale(70),
    right: moderateScale(5),
  },
  imageStyle: {
    width: 98,
    height: 98,
  },
  crossIcon: {
    width: 20,
    height: 20,
    tintColor: LIGHTTHEME.HOMEPAGE_ICON,
  },
});
export default styles;
