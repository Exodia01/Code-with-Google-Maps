import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Line = ({ style }) => {
  return <View style={[styles.lineView, style]} />;
};

const styles = StyleSheet.create({
  lineView: {
    position: "absolute",
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 376,
    height: 1,
  },
});

export default Line;
