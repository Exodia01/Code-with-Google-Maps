import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LoadingPage = () => {
  return (
    <View style={styles.loadingPage}>
        <View style={styles.frameFlexBox}>
            <Image
              style={styles.cartIcon}
              source={require("../assets/cart1.png")}
            />
            <View style={[styles.frame2, styles.frameFlexBox]}>
              <Text style={[styles.esaadhan, styles.overlineFlexBox]}>
                eSaadhan
              </Text>
            </View>
          
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingPageFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  overlineFlexBox: {
    textAlign: "left",
    color: Color.lightColor,
  },
  frameFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  overline: {
    position: "absolute",
    height: "100%",
    top: "-14.76%",
    left: "11.6%",
    fontSize: 11,
    letterSpacing: 2,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansBold,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.lightColor,
    width: "100%",
  },
  spOverline: {
    width: 160,
    height: 27,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  cartIcon: {
    height: 102,
    width: 111,
  },
  esaadhan: {
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    height: 17,
  },
  frame2: {
    width: 100,
  },
  frame1: {
    width: 111,
    overflow: "hidden",
  },
  frame: {
    width: 119,
  },
  spOverlineParent: {
    flexDirection: "row",
  },
  loadingPage: {
    backgroundColor: Color.colorCrimson,
    flex: 1,
    height: 814,
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
  },
});

export default LoadingPage;
