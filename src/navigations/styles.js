import {StyleSheet} from 'react-native';
import {LIGHTTHEME} from '../contants';

const styles = StyleSheet.create({
  imageStyle: {
    width: 20,
    height: 20,
    marginStart: 20,
    tintColor: 'black',
  },
  profileImage: {
    width: 40,
    height: 40,
    marginEnd: 10,
    tintColor: LIGHTTHEME.HOMEPAGE_PRIMARY,
  },
  logoStyle: {
    width: 100,
    height: 40,
  },
  button: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
