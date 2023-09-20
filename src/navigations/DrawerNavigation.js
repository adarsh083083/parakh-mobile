import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Images, LIGHTTHEME, Routes} from '../contants';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import styles from './styles';
import HomeScreen from '../screens/dashboard/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const navigation = useNavigation();
  const headerImage = () => {
    return (
      <View>
        <Image
          resizeMode="contain"
          source={Images.Logo}
          style={styles.logoStyle}
        />
      </View>
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: headerImage,
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        headerBackgroundContainerStyle: {
          borderBottomColor: LIGHTTHEME.HOMEPAGE_TEXT,
          borderWidth: 0.3,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image source={Images.MenuIcon} style={styles.imageStyle} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => {}}>
            <Image source={Images.SampleProfile} style={styles.profileImage} />
          </TouchableOpacity>
        ),
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
