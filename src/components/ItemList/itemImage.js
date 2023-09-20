import {Image, TouchableOpacity, View} from 'react-native';
import {Images} from '../../contants';
import styles from './styles';

const CarouselCardItem = ({item, index, handleDeleteImage}) => {
  const onDeleteImage = () => {
    handleDeleteImage(index);
  };
  return (
    <View style={{width: 100, height: 100}} key={index}>
      <View>
        <Image source={{uri: item.path}} style={styles.imageStyle} />
        <TouchableOpacity onPress={onDeleteImage} style={styles.imageContainer}>
          <Image source={Images.Close} style={styles.crossIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CarouselCardItem;
