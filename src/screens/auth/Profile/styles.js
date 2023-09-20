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
  containerProfile: {
    height: DIMENSIONS.HEIGHT * 0.06,
  },
  innerContainer: {
    height: DIMENSIONS.HEIGHT * 0.12,
    marginTop: DIMENSIONS.HEIGHT * 0.13,
  },
  inputContainer: {
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: DIMENSIONS.HEIGHT * 0.4,
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
  titleProfile: {
    marginBottom: 10,
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
    fontSize: 30,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(40),
  },
  cameraContainer: {
    width: 100,
    height: 100,
    marginTop: DIMENSIONS.HEIGHT * 0.02,
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  cameraInnerContainer: {
    bottom: moderateScale(10),
    position: 'absolute',
    padding: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    left: moderateScale(70),
  },
  cameraIcon: {
    width: 20,
    height: 20,
    tintColor: LIGHTTHEME.HOMEPAGE_TEXT,
  },
  cameraIconStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default styles;
