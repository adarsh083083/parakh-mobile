import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import InputComponent from '../../../components/InputComponent/InputComponent';
import AppColoredButton from '../../../components/AppColoredButton/AppColoredButton';
import Footer from '../../../components/Footer/Footer';
import Screen from '../../../components/Screen/Screen';
import TitleComp from '../../../components/TitleComp/TitleComp';
import {Routes} from '../../../contants';
const Login = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.containerLogin}>
          <Text style={styles.titleLogin}>Login</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <InputComponent
              label={'Email'}
              placeholder={'Please enter email or mobile'}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              label={'Password'}
              placeholder={'Please enter password'}
            />
          </View>
        </View>
        <View style={styles.forgotContainer}>
          <TitleComp title={'Forgot Password ?'} />
        </View>
        <View style={styles.buttonContainer}>
          <AppColoredButton
            onPress={() => {
              navigation.navigate(Routes.PROFILE);
            }}
            title={'Login'}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer
          onPress={() => navigation.navigate(Routes.SIGN_UP)}
          titleDont={`Don't have an account ?`}
          titleSignUp={`SignUp Here`}
        />
      </View>
    </Screen>
  );
};
export default Login;
