import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Images, LIGHTTHEME, Routes} from '../../contants';
import {useState} from 'react';
import {styles} from './styles';

const CustomDrawer = props => {
  const {navigation} = props;
  const [isFirstImageSelected, setFirstImageSelected] = useState(true);
  const [isSecondImageSelected, setSecondImageSelected] = useState(false);
  const handleFirstImagePress = () => {
    setFirstImageSelected(true);
    setSecondImageSelected(false);
  };

  const handleSecondImagePress = () => {
    setFirstImageSelected(false);
    setSecondImageSelected(true);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        screenOptions={styles.drawerStyles}
        {...props}
        contentContainerStyle={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <Image source={Images.SampleProfile} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Pradeep Suthar</Text>
        </View>
      </DrawerContentScrollView>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Routes.HOME_SCREEN);
          }}
          onPressIn={handleFirstImagePress}
          style={{
            paddingVertical: 10,
            borderRadius: 5,
            backgroundColor: isFirstImageSelected
              ? LIGHTTHEME.HOMEPAGE_PRIMARY
              : LIGHTTHEME.HOMEPAGE_SCREEN,
          }}>
          <View style={styles.homeContainer}>
            <Image
              resizeMode="contain"
              style={[
                styles.homeStyle,
                {
                  tintColor: !isFirstImageSelected
                    ? LIGHTTHEME.HOMEPAGE_TEXT
                    : LIGHTTHEME.HOMEPAGE_SECONDARY,
                },
              ]}
              source={isFirstImageSelected ? Images.HomeIcon : Images.HomeIcon}
            />
            <Text
              style={[
                styles.homeTitleStyle,
                {
                  color: !isFirstImageSelected
                    ? LIGHTTHEME.HOMEPAGE_TEXT
                    : LIGHTTHEME.HOMEPAGE_SECONDARY,
                },
              ]}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={handleSecondImagePress}
          style={[
            styles.productStyle,
            {
              backgroundColor: !isFirstImageSelected
                ? LIGHTTHEME.HOMEPAGE_PRIMARY
                : LIGHTTHEME.HOMEPAGE_SCREEN,
            },
          ]}
          onPress={() => {
            navigation.navigate(Routes.PRODUCT_SCREEN);
          }}>
          <View style={styles.productContainer}>
            <Image
              resizeMode="contain"
              style={[
                styles.productImage,
                {
                  tintColor: isFirstImageSelected
                    ? LIGHTTHEME.HOMEPAGE_TEXT
                    : LIGHTTHEME.HOMEPAGE_SECONDARY,
                },
              ]}
              source={Images.AddProduct}
            />
            <Text
              style={[
                styles.productTitle,
                {
                  color: isFirstImageSelected
                    ? LIGHTTHEME.HOMEPAGE_TEXT
                    : LIGHTTHEME.HOMEPAGE_SECONDARY,
                },
              ]}>
              Add Product
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.shareContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.btnShare}>
          <View style={styles.shareInnerStyle}>
            <Image
              resizeMode="contain"
              style={styles.shareIcon}
              source={Images.ShareIcon}
            />
            <Text style={styles.shareTitle}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.signoutContainer}>
          <View style={styles.signoutInnerStyle}>
            <Image
              resizeMode="contain"
              style={styles.signoutIcon}
              source={Images.SignOutIcon}
            />
            <Text style={styles.singoutTitle}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomDrawer;
