import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Images, LIGHTTHEME, Routes} from '../../../contants';
import {slides} from '../../../contants/listConstant';
import {styles} from './styles';

const OnBoardScreen = ({navigation}) => {
  const Item = ({item}) => {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={LIGHTTHEME.STATUS_BAR_COLOR}
          barStyle={LIGHTTHEME.STATUS_BAR_CONTENT_COLOR}
        />
        <Image
          resizeMode="contain"
          source={item.image}
          style={styles.imageStyle}
        />
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.textStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      onDone={() => {
        navigation.navigate(Routes.HOME_SCREEN);
      }}
      renderItem={Item}
      data={slides}
      dotStyle={styles.dotStyles}
      activeDotStyle={styles.activeDotStyles}
      renderNextButton={() => {
        return (
          <View>
            <Image
              resizeMode="contain"
              style={styles.ArrowIcon}
              source={Images.ArrowIcon}
            />
          </View>
        );
      }}
      renderDoneButton={() => {
        return (
          <View style={styles.donebtn}>
            <Image style={styles.RocketImage} source={Images.RocketIcon} />
          </View>
        );
      }}
    />
  );
};

export default OnBoardScreen;
