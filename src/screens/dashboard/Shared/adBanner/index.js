import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const AdBanner = () => {
  return (
    <View>
      <Image style={{
        marginTop: 10,
        width: width*0.9,
        height: height*0.16
      }} source={require("../../assets/images/AdBanner.png")} />
    </View>
  );
};

export default AdBanner;
