import {View, Text} from 'react-native';
import React from 'react';
import Screen from '../../../components/Screen/Screen';
import InputComponent from '../../../components/InputComponent/InputComponent';
import AppColoredButton from '../../../components/AppColoredButton/AppColoredButton';
import Footer from '../../../components/Footer/Footer';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../contants';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.containerSignUp}>
          <Text style={styles.titleSignUp}>Sign Up</Text>
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
          <View style={styles.inputContainer}>
            <InputComponent
              secureTextEntry={true}
              label={'Password'}
              placeholder={'Please enter password'}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              secureTextEntry={true}
              label={'Confirm Password'}
              placeholder={'Please enter confirm password'}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <AppColoredButton
            onPress={() => {
              navigation.navigate(Routes.PROFILE);
            }}
            title={'Sign Up'}
          />
        </View>
        <View style={styles.footerContainer}>
          <Footer
            onPress={() => navigation.goBack()}
            titleDont={`Already have an account ?`}
            titleSignUp={`Login Here`}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SignUp;
