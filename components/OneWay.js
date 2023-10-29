import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const OneWay = ({ style }) => {
  return (
    <View style={[styles.oneWay, style]}>
      <Text style={styles.oneWay1}>One way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneWay1: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.lightColor,
    textAlign: "center",
    width: 64,
  },
  oneWay: {
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

export default OneWay;
