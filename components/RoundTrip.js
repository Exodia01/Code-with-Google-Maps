import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const RoundTrip = ({ style }) => {
  return (
    <View style={[styles.roundTrip, style]}>
      <Text style={styles.roundTrip1}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTrip1: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
  },
  roundTrip: {
    borderRadius: Border.br_13xl,
    width: 153,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
});

export default RoundTrip;
