import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../contants';
import DrawerNavigation from './DrawerNavigation';
import SettingsScreen from '../screens/dashboard/SettingScreen/SettingsScreen';
import DetailsScreen from '../screens/dashboard/DetailsScreen/DetailsScreen';
import CameraScreen from '../screens/dashboard/CameraScreen/CameraScreen';
import ProductsScreen from '../screens/dashboard/ProductsScreen/ProductsScreen';
import OnBoardScreen from '../screens/auth/OnBoardinScreen/OnBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = Routes.ONBOARDING;
  } else {
    routeName = Routes.HOME_SCREEN;
  }
  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.ONBOARDING} component={OnBoardScreen} />
      <Stack.Screen name={Routes.HOME_SCREEN} component={DrawerNavigation} />
      <Stack.Screen name={Routes.PRODUCT_SCREEN} component={ProductsScreen} />
      <Stack.Screen name={Routes.SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen name={Routes.DETAILS_SCREEN} component={DetailsScreen} />
      <Stack.Screen name={Routes.CAMERA_SCREEN} component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigations;
