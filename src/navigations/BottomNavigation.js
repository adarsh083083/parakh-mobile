// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import React from 'react';
// import {Image, Text, TouchableOpacity, View} from 'react-native';
// import {Images, LIGHTTHEME, Routes} from '../contants';
// import HomeScreen from '../screens/HomeScreen/HomeScreen';
// import SettingsScreen from '../screens/SettingScreen/SettingsScreen';
// import {moderateScale} from 'react-native-size-matters';
// import CameraScreen from '../screens/dashboard/CameraScreen/CameraScreen';
// import styles from './styles';

// const BottomNavigation = () => {
//   const Tab = createBottomTabNavigator();

//   const TabBarButton = ({children, onPress}) => {
//     return (
//       <TouchableOpacity
//         style={[styles.button, styles.shadow]}
//         onPress={onPress}>
//         <View style={styles.buttonView}>{children}</View>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: 'red',
//           height: 60,
//         },
//       }}>
//       <Tab.Screen
//         name={Routes.HOME_SCREEN}
//         component={HomeScreen}
//         options={{
//           tabBarShowLabel: true,
//           tabBarLabel: ({focused, color, size}) => (
//             <Text
//               style={{
//                 color: focused ? LIGHTTHEME.HOMEPAGE_PRIMARY : 'black',
//                 bottom: moderateScale(5),
//               }}>
//               Updates
//             </Text>
//           ),
//           tabBarIcon: ({focused}) => {
//             return (
//               <View>
//                 <Image
//                   source={Images.HomeIcon}
//                   style={{
//                     tintColor: focused ? LIGHTTHEME.HOMEPAGE_PRIMARY : 'black',
//                     width: 25,
//                     height: 25,
//                   }}
//                 />
//               </View>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name={Routes.CAMERA_SCREEN}
//         component={CameraScreen}
//         options={{
//           tabBarShowLabel: false, // Set tabBarShowLabel to false
//           tabBarIcon: ({focused, color, size}) => (
//             <Image
//               source={Images.SettingsIcon}
//               style={{
//                 tintColor: 'black',
//                 width: 25,
//                 height: 25,
//               }}
//             />
//           ),
//           tabBarButton: props => <TabBarButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name={Routes.SETTINGS}
//         component={SettingsScreen}
//         options={{
//           tabBarShowLabel: true,
//           tabBarLabel: ({focused, color, size}) => (
//             <Text
//               style={{
//                 color: focused ? LIGHTTHEME.HOMEPAGE_PRIMARY : 'black',
//                 bottom: moderateScale(5),
//               }}>
//               Settings
//             </Text>
//           ),
//           tabBarIcon: ({focused}) => {
//             return (
//               <Image
//                 source={Images.SettingsIcon}
//                 style={{
//                   tintColor: focused ? LIGHTTHEME.HOMEPAGE_PRIMARY : 'black',
//                   width: 25,
//                   height: 25,
//                 }}
//               />
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomNavigation;
