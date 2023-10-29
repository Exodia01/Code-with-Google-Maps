import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame2 = ({ style }) => {
  return (
    <View style={[styles.unionParent, style]}>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unionIcon: {
    width: 22,
    height: 20,
  },
  home: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    marginTop: -1,
  },
  unionParent: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame2;
