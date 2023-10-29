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
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Header1 = ({ style }) => {
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
            source={require("../assets/icon--back1.png")}
          />
        </Pressable>
        <View style={styles.offersWrapper}>
          <Text style={styles.offers}>Offers</Text>
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
  header: {
    backgroundColor: Color.lightColor,
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
  offers: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  offersWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameItem: {
    marginTop: 4,
  },
  ellipseParent: {
    position: "absolute",
    top: 5,
    left: 14,
    display: "none",
  },
  iconKebab: {
    overflow: "hidden",
  },
  view: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
  },
});

export default Header1;
