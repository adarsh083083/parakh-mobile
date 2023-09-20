import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../theme';
import {LIGHTTHEME} from '../../contants';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'orange',
    width: DIMENSIONS.WIDTH * 0.8,
    height: DIMENSIONS.HEIGHT * 0.072,
    borderRadius: 10,
    marginVertical: DIMENSIONS.HEIGHT * 0.007,
    marginBottom: 30,
  },
  buttonSubmitStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: DIMENSIONS.WIDTH * 0.8,
    height: DIMENSIONS.HEIGHT * 0.06,
    borderRadius: 10,
    marginVertical: DIMENSIONS.HEIGHT * 0.007,
    marginBottom: 30,
  },
  buttonLabel: {
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
  },
  buttonTitle: {
    color: LIGHTTHEME.STATUS_BAR_COLOR,
    fontSize: 17,
  },
});

export default styles;
