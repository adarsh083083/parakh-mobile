import {StyleSheet} from 'react-native';
import {LIGHTTHEME} from '../../../contants';
import {DIMENSIONS} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHTTHEME.ONBOARD_SCREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: DIMENSIONS.HEIGHT * 0.392,
    width: DIMENSIONS.WIDTH * 0.83,
  },
  titleStyle: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: LIGHTTHEME.ONBOARD_PRIMARY,
    alignSelf: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: LIGHTTHEME.ONBOARD_TEXT,
    fontSize: 15,
    paddingHorizontal: DIMENSIONS.WIDTH * 0.11,
  },
  dotStyles: {
    backgroundColor: LIGHTTHEME.ONBOARD_DOT_COLOR,
    top: DIMENSIONS.HEIGHT * -0.025,
  },
  activeDotStyles: {
    backgroundColor: 'red',
    top: DIMENSIONS.HEIGHT * -0.025,
    width: DIMENSIONS.WIDTH * 0.07,
  },
  ArrowIcon: {
    width: DIMENSIONS.WIDTH * 0.15,
    height: DIMENSIONS.HEIGHT * 0.07,
    tintColor: LIGHTTHEME.ONBOARD_PRIMARY,
    top: DIMENSIONS.HEIGHT * -0.03,
    right: DIMENSIONS.WIDTH * 0.07,
  },
  donebtn: {
    top: DIMENSIONS.HEIGHT * -0.03,
    right: DIMENSIONS.WIDTH * 0.07,
    borderRadius: 50,
  },
  RocketImage: {
    width: DIMENSIONS.WIDTH * 0.15,
    height: DIMENSIONS.HEIGHT * 0.07,
    tintColor: LIGHTTHEME.ONBOARD_PRIMARY,
  },
});
