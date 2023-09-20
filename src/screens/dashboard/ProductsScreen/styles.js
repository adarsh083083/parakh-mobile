import {Dimensions, StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../../theme/index';
import {LIGHTTHEME} from '../../../contants';
import {moderateVerticalScale} from 'react-native-size-matters';
const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const styles = StyleSheet.create({
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
  inputContainer: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  titleProducts: {
    marginBottom: 10,
    color: LIGHTTHEME.HOMEPAGE_PRIMARY,
    fontSize: 30,
  },
  btnContainer: {
    flex: 1,
    marginTop: moderateVerticalScale(30),
    alignItems: 'flex-end',
  },
  goBackStyle: {
    position: 'absolute',
    top: DIMENSIONS.HEIGHT * 0.03,
    left: DIMENSIONS.WIDTH * 0.06,
  },
  errorStyle: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Roboto',
  },
  errorImageStyle: {
    color: 'red',
    fontSize: 12,
    bottom: 25,
  },
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: LIGHTTHEME.HOMEPAGE_SCREEN,
  },

  carouselContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossIcon: {
    width: 20,
    height: 20,
    tintColor: LIGHTTHEME.HOMEPAGE_TEXT,
  },
});
export default styles;
