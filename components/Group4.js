import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Group4 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.group4, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--back1.png")}
          />
        </Pressable>
        <View style={styles.parentFlexBox}>
          <View style={[styles.sinParent, styles.parentFlexBox]}>
            <Text style={styles.sinTypo}>SIN</Text>
            <Image
              style={styles.iconBack1}
              contentFit="cover"
              source={require("../assets/icon--back2.png")}
            />
            <Text style={[styles.lax, styles.sinTypo]}>LAX</Text>
          </View>
          <Text style={styles.july2022}>29 July, 2022</Text>
        </View>
        <View style={[styles.iconKebab, styles.iconLayout]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-21.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  group4: {
    backgroundColor: Color.lightColor,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  sinTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  frameLayout: {
    height: 5,
    width: 5,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconBack1: {
    width: 18,
    height: 18,
    marginLeft: 6,
    overflow: "hidden",
  },
  lax: {
    marginLeft: 6,
  },
  sinParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  july2022: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
    textAlign: "center",
    marginTop: 3,
    alignSelf: "stretch",
  },
  frameItem: {
    marginTop: 4,
  },
  ellipseParent: {
    position: "absolute",
    top: 5,
    left: 14,
  },
  iconKebab: {
    overflow: "hidden",
  },
  view: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Group4;
