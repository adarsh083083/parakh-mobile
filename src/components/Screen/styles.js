import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 10,
  },
});
export default styles;
