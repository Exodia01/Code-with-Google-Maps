import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Frame4 = ({ style }) => {
  return (
    <View style={[styles.roundTripParent, style]}>
      <Text style={styles.roundTrip}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTrip: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.lightColor,
    textAlign: "center",
  },
  roundTripParent: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorCornflowerblue,
    width: 153,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
});

export default Frame4;
