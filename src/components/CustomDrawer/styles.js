import {Dimensions, StyleSheet} from 'react-native';
import {LIGHTTHEME} from '../../contants';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  drawerStyles: {
    headerShown: false,
    drawerLabelStyle: {
      marginLeft: -25,
      fontSize: 15,
      fontWeight: 'bold',
    },
  },
  containerStyle: {
    backgroundColor: LIGHTTHEME.HOMEPAGE_PRIMARY,
  },
  headerStyle: {
    height: height * 0.24,
    paddingTop: height * 0.04,
    paddingLeft: width * 0.06,
  },
  headerIcon: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 6,
    tintColor: '#FFFFFF',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  innerContainer: {
    flex: 1,
    bottom: height * 0.14,
    paddingHorizontal: 8,
  },
  homeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeStyle: {
    width: width * 0.07,
    height: height * 0.03,
    marginHorizontal: width * 0.02,
  },
  homeTitleStyle: {
    fontSize: 15,
    marginLeft: 5,
  },
  productStyle: {
    marginTop: 6,
    borderRadius: 5,
    paddingVertical: 8,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: width * 0.07,
    height: height * 0.04,
    marginHorizontal: width * 0.02,
  },
  productTitle: {
    fontSize: 15,
    marginLeft: 5,
  },
  shareContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  btnShare: {
    paddingVertical: 15,
  },
  shareInnerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareIcon: {
    width: width * 0.07,
    height: height * 0.04,
    marginHorizontal: width * 0.02,
    tintColor:LIGHTTHEME.HOMEPAGE_TEXT,
  },
  shareTitle: {
    fontSize: 15,
    marginLeft: 5,
  },
  signoutContainer: {
    paddingVertical: 15,
  },
  signoutInnerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signoutIcon: {
    width: width * 0.07,
    height: height * 0.04,
    marginHorizontal: width * 0.02,
    tintColor: LIGHTTHEME.HOMEPAGE_TEXT,
  },
  singoutTitle: {
    fontSize: 15,
    marginLeft: 5,
  },
});
