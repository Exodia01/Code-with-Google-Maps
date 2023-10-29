import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame3 = ({ style }) => {
  return (
    <View style={[styles.krishnaLayoutHulimavParent, style]}>
      <Text style={[styles.krishnaLayoutHulimav, styles.deliveriesFlexBox]}>
        Krishna layout, Hulimav
      </Text>
      <Text style={[styles.deliveries, styles.deliveriesFlexBox]}>
        10 Deliveries
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deliveriesFlexBox: {
    textAlign: "left",
    color: Color.lightLabelPrimary,
    letterSpacing: 1,
  },
  krishnaLayoutHulimav: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  deliveries: {
    fontSize: FontSize.size_base,
    lineHeight: 29,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: -1,
  },
  krishnaLayoutHulimavParent: {
    flex: 1,
  },
});

export default Frame3;
