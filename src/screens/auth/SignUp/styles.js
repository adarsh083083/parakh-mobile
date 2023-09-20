import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../../theme';
import {LIGHTTHEME} from '../../../contants';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DIMENSIONS.HEIGHT * 0.02,
  },
  containerSignUp: {
    height: DIMENSIONS.HEIGHT * 0.06,
  },
  innerContainer: {
    height: DIMENSIONS.HEIGHT * 0.12,
    marginTop: DIMENSIONS.HEIGHT * 0.03,
  },
  inputContainer: {
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: DIMENSIONS.HEIGHT * 0.5,
  },
  topHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  subHeader: {
    width: DIMENSIONS.WIDTH * 0.7,
    textAlign: 'center',
    marginBottom: 20,
  },
  titleSignUp: {
    marginBottom: 10,
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
    fontSize: 30,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(40),
  },
});
export default styles;
