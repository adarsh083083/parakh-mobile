import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../contants';
import OnBoardScreen from '../screens/auth/OnBoardinScreen/OnBoardingScreen';
import Login from '../screens/auth/Login/Login';
import SignUp from '../screens/auth/SignUp/SignUp';
import Profile from '../screens/auth/Profile/Profile';

const Stack = createNativeStackNavigator();

const AuthNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.ONBOARDING} component={OnBoardScreen} />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.SIGN_UP} component={SignUp} />
      <Stack.Screen name={Routes.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};

export default AuthNavigations;
