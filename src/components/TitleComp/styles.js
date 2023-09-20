import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LIGHTTHEME} from '../../contants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: moderateScale(14),
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
  },
});
export default styles;
