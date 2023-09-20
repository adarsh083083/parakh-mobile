import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../theme';
import {LIGHTTHEME} from '../../contants';

const styles = StyleSheet.create({
  inputLabel: {
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
  },

  inputStyle: {
    height: DIMENSIONS.HEIGHT * 0.063,
    width: DIMENSIONS.WIDTH * 0.8,
    borderWidth: 1,
    paddingVertical: DIMENSIONS.HEIGHT * 0.007,
    paddingHorizontal: DIMENSIONS.WIDTH * 0.05,
    borderColor: LIGHTTHEME.HOMEPAGE_PRIMARY,
    borderRadius: 10,
    fontSize: 14,
    color: LIGHTTHEME.HOMEPAGE_TEXT,
    marginVertical: DIMENSIONS.HEIGHT * 0.007,
  },
  descriptionStyle: {
    height: DIMENSIONS.HEIGHT * 0.12,
    width: DIMENSIONS.WIDTH * 0.8,
    borderWidth: 2,
    paddingVertical: DIMENSIONS.HEIGHT * 0.007,
    paddingHorizontal: DIMENSIONS.WIDTH * 0.05,
    borderColor: LIGHTTHEME.HOMEPAGE_PRIMARY,
    borderRadius: 10,
    fontSize: 14,
    color: LIGHTTHEME.HOMEPAGE_TEXT,
    marginVertical: DIMENSIONS.HEIGHT * 0.007,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: LIGHTTHEME.HOMEPAGE_PRIMARY,
    width: DIMENSIONS.WIDTH * 0.8,
    height: DIMENSIONS.HEIGHT * 0.072,
    borderRadius: 10,
    marginVertical: DIMENSIONS.HEIGHT * 0.007,
    marginBottom: 30,
  },
  buttonSubmitStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LIGHTTHEME.HOMEPAGE_PRIMARY,
    width: DIMENSIONS.WIDTH * 0.8,
    height: DIMENSIONS.HEIGHT * 0.072,
    borderRadius: 10,
    marginVertical: DIMENSIONS.HEIGHT * 0.007,
    marginBottom: 30,
  },
});
export default styles;
