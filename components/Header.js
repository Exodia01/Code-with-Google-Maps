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
import { Color, FontFamily } from "../GlobalStyles";

const Header = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.header, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--back.png")}
          />
        </Pressable>
        <View style={styles.bookings}>
          <Text style={styles.bookings1}>Bookings</Text>
        </View>
        <View style={[styles.iconKebab, styles.iconLayout]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.lightColor,
  },
  iconLayout: {
    height: 11,
    width: 11,
  },
  frameLayout: {
    height: 2,
    width: 2,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  bookings1: {
    fontSize: 5,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  bookings: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameItem: {
    marginTop: 1.32,
  },
  ellipseParent: {
    position: "absolute",
    top: 2,
    left: 5,
  },
  iconKebab: {
    overflow: "hidden",
  },
  view: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: "center",
  },
});

export default Header;
