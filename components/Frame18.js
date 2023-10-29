import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame1 = ({ style }) => {
  return (
    <View style={[styles.iconParent, style]}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Text style={styles.delivery}>Delivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
  },
  delivery: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  iconParent: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame1;
