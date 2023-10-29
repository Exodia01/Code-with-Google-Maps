import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={[styles.homePage, styles.homeLayout]}>
      <SafeAreaView style={[styles.homePageWrapper, styles.homeFlexBox]}>
        <Text style={[styles.delivery, styles.homeFlexBox1]}>Home page</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    backgroundColor: Color.lightColor,
  },
  homeFlexBox1: {
    textAlign: "left",
    letterSpacing: 1,
  },
  homeFlexBox: {
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  delivery: {
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 1,
  },
  homePageWrapper: {
    top: 219,
    left: 4,
    width: 375,
    padding: Padding.p_3xs,
  },
  homePage: {
    flex: 1,
    height: 814,
    overflow: "hidden",
  },
});

export default HomePage;
