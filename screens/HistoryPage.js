import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HistoryPage = () => {
  return (
    <View style={[styles.historyPage, styles.historyLayout]}>
      <SafeAreaView style={[styles.historyPageWrapper, styles.historyFlexBox]}>
        <Text style={[styles.delivery, styles.historyFlexBox1]}>
          History page
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  historyLayout: {
    width: "100%",
    backgroundColor: Color.lightColor,
  },
  historyFlexBox1: {
    textAlign: "left",
    letterSpacing: 1,
  },
  historyFlexBox: {
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
  historyPageWrapper: {
    top: 216,
    left: 4,
    width: 375,
    padding: Padding.p_3xs,
  },
  historyPage: {
    flex: 1,
    height: 814,
    overflow: "hidden",
  },
});

export default HistoryPage;
