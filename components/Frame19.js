import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame = ({ style }) => {
  return (
    <View style={[styles.iconParent, style]}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/history.png")}
      />
      <Text style={styles.history}>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 18,
  },
  history: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    marginTop: 3,
  },
  iconParent: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame;
