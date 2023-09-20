import {FlatList, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomTab from '../../../navigations/CustomTab';
import {Images} from '../../../contants';
import styles from './styles';
import ItemCategory from '../../../components/ListItem/ItemCategory';
import ItemFarmHouse from '../../../components/ListItem/ItemFarmHouse';
import {Data, farmHouseData} from '../../../contants/listConstant';
import SkelatonCategory from '../../../components/Skeleton/SkelatonCategory/SkeletonCategory';
import SkelatonFarm from '../../../components/Skeleton/SkelatonFarm/SkelatonFarm';
const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  const renderCategoryItem = ({item}) => <SkelatonCategory item={item} />;
  const renderFarmHouseItem = ({item}) => <SkelatonFarm item={item} />;

  const skeletonCategoryData = Data;
  const skelatonFarmData = farmHouseData;
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        {loading ? (
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={skeletonCategoryData}
              renderItem={renderCategoryItem}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.titleCategory}>Category</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={Data}
              renderItem={({item}) => <ItemCategory item={item} />}
            />
          </View>
        )}
      </View>
      <View style={styles.categoryFarmContainer}>
        {loading ? (
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={skelatonFarmData}
              renderItem={renderFarmHouseItem}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.titleCategoryFarm}>Images</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={farmHouseData}
              renderItem={({item}) => <ItemFarmHouse item={item} />}
            />
          </View>
        )}
      </View>
      <View style={styles.bannerContainer}>
        <Image style={styles.bannerImage} source={Images.AdBanner} />
      </View>
      <CustomTab />
    </View>
  );
};

export default HomeScreen;
