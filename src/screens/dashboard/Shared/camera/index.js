import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {DIMENSIONS} from '../../../theme';
import {Camera} from 'expo-camera';
import {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
// import * as ImagePicker from "expo-image-picker";
// import * as ImageManipulator from 'expo-image-manipulator';
// import {useDispatch} from 'react-redux';
import {sendPhotoAction} from '../../store/slice/sendPhotoSlice';
import {Images} from '../../../contants';
import { LIGHTTHEME } from '../../../../contants';

const SharedCamera = () => {
  // const dispatch = useDispatch();
  const Navigation = useNavigation();

  const [camera, setCamera] = useState();

  const focused = useIsFocused();

  const [imageUrl, setImageUrl] = useState();

  // const TakePictureIcon = (
  //   <TouchableOpacity onPress={() => takePicture()}>
  //     <Image
  //       source={require("../../assets/images/CameraIcon120.png")}
  //       style={{
  //         tintColor: "white",
  //         width: 70,
  //         height: 70
  //       }}
  //     />
  //   </TouchableOpacity>
  // );

  // const FlipCamera = (
  //   <TouchableOpacity
  //     onPress={() =>
  //       setType(
  //         type === Camera.Constants.Type.back
  //           ? Camera.Constants.Type.front
  //           : Camera.Constants.Type.back
  //       )
  //     }
  //   >
  //     <Image
  //       source={require("../../assets/images/RotateLeft.png")}
  //       style={{
  //         width: 50,
  //         height: 50,
  //         marginRight: 8,
  //         tintColor: "white"
  //       }}
  //     />
  //   </TouchableOpacity>
  // );
  // const [cameraPermission, setCameraPermission] = useState(null);

  // const [type, setType] = useState(Camera.Constants.Type.back);

  // useEffect(async () => {
  //   const cameraPermission = await Camera.requestCameraPermissionsAsync();
  //   if (Platform.OS !== "web") {
  //     const { status } =
  //       // await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permissions Denied");
  //     }
  //   }
  // }, []);

  // const PickImage = async () => {
  //   // let result = await ImagePicker.launchImageLibraryAsync({
  //   //   mediaTypes: ImagePicker.MediaTypeOptions.All,
  //   //   allowsEditing: true,
  //   //   aspect: [4, 3],
  //   //   quality: 1
  //   // });
  //   console.log(result);
  //   if (!result.cancelled) {
  //     dispatch(sendPhotoAction.setImageForProduct(result.uri));
  //     Navigation.navigate("ProductPage");
  //   }
  // };

  // const takePicture = async () => {
  //   if (camera) {
  //     const data = await camera.takePictureAsync();
  //     const comp = await ImageManipulator.manipulateAsync(data.uri, [], {
  //       compress: 0.5
  //     });
  //     dispatch(sendPhotoAction.setImageForProduct(comp.uri));
  //     Navigation.navigate("ProductPage");
  //   }
  // };

  // if (cameraPermission === false) {
  //   return <Text>No Camera Access</Text>;
  // }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          position: 'absolute',
          left: DIMENSIONS.WIDTH * -0.3,

          flex: 1,
        }}>
        {/* {focused && (
          <Camera
            ref={ref => setCamera(ref)}
            style={{
              width: DIMENSIONS.WIDTH,
              height: DIMENSIONS.HEIGHT * 1.1,
              flex: 1,
              aspectRatio: 1,
            }}
            type={type}
            ratio={'2:2'}
          />
        )} */}
      </View>
      <View />
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 50,
          paddingRight: 15,

          backgroundColor: 'rgba(0,0,0,0.2)',
        }}>
        {/* <TouchableOpacity onPress={PickImage}> */}
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={Images.ImageGallaryIcon}
            style={{
              height: 40,
              resizeMode: 'contain',
              width: 40,
              marginLeft: 34,
              borderRadius: 200,
              tintColor: LIGHTTHEME.HOMEPAGE_SECONDARY,
            }}
          />
        </TouchableOpacity>
        {/* 
        {TakePictureIcon}
        {FlipCamera} */}
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          height: DIMENSIONS.HEIGHT * 0.09,
          width: DIMENSIONS.WIDTH,
          backgroundColor: 'rgba(0,0,0,0.2)',
          paddingHorizontal: 30,
          paddingVertical: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            Navigation.goBack();
          }}>
          <Image
            style={{
              tintColor:  LIGHTTHEME.HOMEPAGE_SECONDARY,
              width: 19,
              height: 40,
            }}
            source={Images.BackIcon}
          />
        </TouchableOpacity>
        <Image
          style={{
            position: 'absolute',
            height: 0.6 * DIMENSIONS.HEIGHT,
            width: 0.8 * DIMENSIONS.WIDTH,
            top: 0.17 * DIMENSIONS.HEIGHT,
            right: 0.11 * DIMENSIONS.WIDTH,
            tintColor:  LIGHTTHEME.HOMEPAGE_SECONDARY,
          }}
          source={Images.SquareBorder}
        />
      </View>
    </View>
  );
};

export default SharedCamera;
