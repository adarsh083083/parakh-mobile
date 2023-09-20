import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Screen from '../../../components/Screen/Screen';
import InputComponent from '../../../components/InputComponent/InputComponent';
import AppColoredButton from '../../../components/AppColoredButton/AppColoredButton';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Images} from '../../../contants';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <Text style={styles.titleProfile}>Profile</Text>
        </View>

        <View style={styles.cameraContainer}>
          <View style={styles.cameraInnerContainer}>
            <TouchableOpacity style={styles.cameraIconStyle}>
              <Image source={Images.CameraIcon} style={styles.cameraIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <InputComponent label={'Name'} placeholder={'Please enter name'} />
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              label={'Email'}
              placeholder={'Please enter email'}
            />
          </View>

          <View style={styles.inputContainer}>
            <InputComponent
              label={'Mobile Number'}
              keyboardType={'numeric'}
              placeholder={'Please enter mobile number'}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <AppColoredButton onPress={() => {}} title={'Submit'} />
        </View>
      </View>
    </Screen>
  );
};

export default Profile;
