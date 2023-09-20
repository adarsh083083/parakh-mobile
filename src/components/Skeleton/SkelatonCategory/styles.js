import {StyleSheet} from 'react-native';
import {LIGHTTHEME} from '../../../contants';
import {DIMENSIONS} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: LIGHTTHEME.HOMEPAGE_SECONDARY,
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    left: 10,
    marginBottom: 5,
  },
  titleCategory: {
    color: LIGHTTHEME.HOMEPAGE_TEXT,
    marginHorizontal: 10,
    marginTop: 20,
    color: LIGHTTHEME.HOMEPAGE_TEXT,
  },
  categoryStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: DIMENSIONS.WIDTH * 0.21,
    height: DIMENSIONS.HEIGHT * 0.1,
    marginHorizontal: 14,
    marginVertical: 10,
  },
  categoryTitle: {
    color: LIGHTTHEME.HOMEPAGE_TEXT,
    fontSize: 15,
  },
  categoryFarmContainer: {
    height: DIMENSIONS.HEIGHT * 0.3,
    marginHorizontal: 10,
    marginTop: 20,
  },
  titleCategoryFarm: {
    marginHorizontal: 10,
    marginTop: 20,
    color: LIGHTTHEME.HOMEPAGE_TEXT,
  },
  categoryFarmImage: {
    width: DIMENSIONS.WIDTH * 0.4,
    height: DIMENSIONS.HEIGHT * 0.2,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  categoryFarmTitle: {
    position: 'absolute',
    left: 30,
    top: 120,
    color: LIGHTTHEME.HOMEPAGE_SECONDARY,
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerContainer: {
    marginHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: 125,
  },
});
export default styles;
