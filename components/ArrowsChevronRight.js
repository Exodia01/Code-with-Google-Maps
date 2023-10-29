import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const ArrowsChevronRight = ({ style }) => {
  return (
    <Image
      style={[styles.arrowsChevronRight, style]}
      contentFit="cover"
      source={require("../assets/24--arrows--chevronright2.png")}
    />
  );
};

const styles = StyleSheet.create({
  arrowsChevronRight: {
    width: 24,
    height: 22,
  },
});

export default ArrowsChevronRight;
