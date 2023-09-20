import {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useColorScheme} from 'react-native';
// import { useDispatch } from "react-redux";
// import {themeSliceAction} from '../store/slice/themeSlice';
import {Appearance} from 'react-native';

const {width, height} = Dimensions.get('window');

const Theme = () => {
  // const dispatch = useDispatch();

  const color = 'light';
  console.log(useColorScheme());

  useEffect(() => {
    if (color == 'dark') {
      // dispatch(themeSliceAction.setColor(DARKTHEME));
    } else {
      // dispatch(themeSliceAction.setColor(LIGHTTHEME));
    }
    console.log(color);
  });

  const DARKTHEME = {
    // MAIN DARK COLORS
    PRIMARY: 'green',
    SECONDRY: 'black',
    BUTTONS: 'red',
    LIGHT: '#ececec',
    SCREEN: 'white',
    TEXT: 'black',

    //HOMEPAGE DARK THEME COLORS
    HOMEPAGE_SCREEN: 'black',
    HOMEPAGE_TEXT: 'white',
    HOMEPAGE_SECONDARY: 'grey',
    HOMEPAGE_ICON: 'white',

    // LOADING DARK THEME COLORS
    LOADING_SCREEN: 'black',
    LOADING_TEXT: 'white',

    //ONBOARD DARK THEME COLORS
    ONBOARD_PRIMARY: 'red',
    ONBOARD_DOT_COLOR: 'white',
    ONBOARD_TEXT: 'white',
    ONBOARD_SCREEN: 'black',

    // STATUS BAR LIGHT COLORS
    STATUS_BAR_COLOR: 'black',
    STATUS_BAR_CONTENT_COLOR: 'light-content',
  };

  const LIGHTTHEME = {
    // MAIN LIGHT COLORS
    PRIMARY: 'orange',
    SECONDRY: 'black',
    BUTTONS: 'red',
    LIGHT: '#ececec',
    SCREEN: 'white',
    TEXT: 'black',

    //HOMEPAGE LIGHT THEME COLORS
    HOMEPAGE_PRIMARY: 'orange',
    HOMEPAGE_SCREEN: 'white',
    HOMEPAGE_TEXT: 'black',
    HOMEPAGE_SECONDARY: '#ececec',
    HOMEPAGE_ICON: 'black',

    //LOADING LIGHT THEME COLORS
    LOADING_SCREEN: 'white',
    LOADING_TEXT: 'black',

    //ONBOARD LIGHT THEME COLORS
    ONBOARD_PRIMARY: 'orange',
    ONBOARD_DOT_COLOR: 'black',
    ONBOARD_TEXT: 'black',
    ONBOARD_SCREEN: 'white',

    // STATUS BAR LIGHT COLORS
    STATUS_BAR_COLOR: 'white',
    STATUS_BAR_CONTENT_COLOR: 'dark-content',
  };
};

const DIMENSIONS = {
  WIDTH: width,
  HEIGHT: height,
};

export {DIMENSIONS};
export default Theme;
