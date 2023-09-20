import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../../theme';
import {LIGHTTHEME} from '../../../contants';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DIMENSIONS.HEIGHT * 0.2,
  },
  containerLogin: {
    height: DIMENSIONS.HEIGHT * 0.06,
  },
  innerContainer: {
    height: DIMENSIONS.HEIGHT * 0.12,
    marginTop: DIMENSIONS.HEIGHT * 0.07,
  },
  inputContainer: {
    marginVertical: 5,
  },
  forgotContainer: {
    marginTop: DIMENSIONS.HEIGHT * 0.12,
    width: DIMENSIONS.WIDTH * 0.8,
    alignItems: 'flex-end',
  },
  buttonContainer: {
    marginTop: DIMENSIONS.HEIGHT * 0.02,
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
  titleLogin: {
    marginBottom: 10,
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
    fontSize: 30,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
export default styles;
