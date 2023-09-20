import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LIGHTTHEME} from '../../contants';
import {DIMENSIONS} from '../../theme';

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    marginTop: DIMENSIONS.HEIGHT * 0.1,
  },
  footerLogin: {
    fontSize: moderateScale(25),
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
    fontWeight: '500',
  },
  footerDont: {
    fontSize: moderateScale(14),
    color: LIGHTTHEME.TEXT,
    fontWeight: '500',
  },
  footerSignUp: {
    fontSize: moderateScale(14),
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
    fontWeight: '500',
  },
});
export default styles;
