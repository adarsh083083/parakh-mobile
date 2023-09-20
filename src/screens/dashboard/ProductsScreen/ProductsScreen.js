import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputComponent from '../../../components/InputComponent/InputComponent';
import AppButton from '../../../components/AppButton/AppButton';
import AppColoredButton from '../../../components/AppColoredButton/AppColoredButton';
import {Formik} from 'formik';
import styles from './styles';
import {validationSchema} from '../../../contants/formikValidations';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem from '../../../components/ItemList/itemImage';
import {LIGHTTHEME} from '../../../contants';
import {WaveIndicator} from 'react-native-indicators';
const ProductsScreen = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState([]);
  console.log(selectedImage, 'ssssssssssssssssssss');
  const isCarousel = useRef(null);

  const [initialValues, setIntialValues] = useState({
    category: '',
    description: '',
    price: '',
    label: '',
    attachments: '',
  });
  const openDocument = async () => {
    let imageList = [];
    console.log(imageList, 'images list');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: true,
    })
      .then(item => {
        item.map(image => {
          imageList.push({
            filename: image.filename,
            path: image.path,
            data: image.data,
          });
        });
        setSelectedImage(imageList);
      })
      .catch(error => {
        console.log(error, 'image error');
        if (error.code === 'E_PICKER_CANCELLED') {
          Toast.show({
            type: 'error',
            text1: 'User cancelled image selection please select image first',
          });
          return false;
        }
      });
  };
  const handleDeleteImage = index => {
    const updatedImages = [...selectedImage];
    updatedImages.splice(index, 1);
    setSelectedImage(updatedImages);
  };

  const onSubmit = async values => {
    // setIsLoading(true);
    console.log('values', values);
    Alert.alert('Submitter');
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.indicatorStyle}>
          <WaveIndicator color={LIGHTTHEME.HOMEPAGE_PRIMARY} />
        </View>
      ) : (
        <>
          <View style={styles.topHeader}>
            <Text style={styles.titleProducts}>Add Product</Text>
            <Text style={styles.subHeader}>
              The Product Add wizard will be displayed.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.goBackStyle}
            onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" color="#000" size={25} />
          </TouchableOpacity>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Formik
              initialValues={initialValues}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={values => console.log(values)}>
              {({values, handleChange, errors, handleSubmit, handleBlur}) => (
                <View style={styles.inner}>
                  <View>
                    <InputComponent
                      label={'Category'}
                      placeholder={'Category'}
                      value={values?.category}
                      onChangeText={handleChange('category')}
                      onBlur={() => handleBlur('category')}
                    />
                    {errors?.category ? (
                      <Text style={styles.errorStyle}>{errors.category}</Text>
                    ) : null}
                    <InputComponent
                      inputStyle={{height: 100}}
                      label={'Description'}
                      placeholder={'Description'}
                      value={values?.description}
                      onChangeText={handleChange('description')}
                      onBlur={() => handleBlur('description')}
                    />
                    {errors?.description ? (
                      <Text style={styles.errorStyle}>
                        {errors.description}
                      </Text>
                    ) : null}
                    <InputComponent
                      label={'Price'}
                      placeholder={'Price'}
                      value={values?.price}
                      onChangeText={handleChange('price')}
                      onBlur={() => handleBlur('price')}
                      keyboardType={'numeric'}
                    />
                    {errors?.price ? (
                      <Text style={styles.errorStyle}>{errors.price}</Text>
                    ) : null}
                    <InputComponent
                      label={'Label'}
                      placeholder={'Label'}
                      value={values?.label}
                      onChangeText={handleChange('label')}
                      onBlur={() => handleBlur('label')}
                    />
                    {errors?.label ? (
                      <Text style={styles.errorStyle}>{errors.label}</Text>
                    ) : null}
                    <AppButton
                      title={'Select Image'}
                      label={'Attachments'}
                      value={values?.attachments}
                      onChangeText={handleChange('attachments')}
                      onBlur={() => handleBlur('attachments')}
                      onPress={() => openDocument()}
                    />
                    {errors?.selectedImage ? (
                      <Text style={styles.errorImageStyle}>
                        {errors.selectedImage}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.carouselContainer}>
                    <Carousel
                      layout="default"
                      layoutCardOffset={5}
                      ref={isCarousel}
                      data={selectedImage}
                      renderItem={({item, index}) => (
                        <CarouselCardItem
                          item={item}
                          index={index}
                          handleDeleteImage={handleDeleteImage}
                        />
                      )}
                      sliderWidth={80}
                      itemWidth={100}
                    />
                  </View>
                  <View style={styles.btnContainer}>
                    <AppColoredButton onPress={handleSubmit} title={'Submit'} />
                  </View>
                </View>
              )}
            </Formik>
          </KeyboardAwareScrollView>
        </>
      )}
    </View>
  );
};

export default ProductsScreen;
