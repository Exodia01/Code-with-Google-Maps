import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const DeliveryArea = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deliveryArea}>
      <View style={[styles.deliveriesWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.deliveries}>2 Deliveries</Text>
      </View>
      <View style={[styles.deliveryAreaChild, styles.childLayout]} />
      <ScrollView
        style={[styles.frameParent, styles.group5Layout]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Pressable
          style={styles.frameFlexBox}
          onPress={() => navigation.navigate("DeliveryLoaction")}
        >
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={styles.text}>#1</Text>
          </View>
          <View style={styles.rekhaParent}>
            <Text style={[styles.rekha, styles.rekhaTypo]}>Rekha</Text>
            <Text style={[styles.text1, styles.text1Typo]}>9986214342</Text>
          </View>
          <View style={styles.arrowsChevronRightParent}>
            <Image
              style={styles.arrowsChevronRight}
              contentFit="cover"
              source={require("../assets/24--arrows--chevronright.png")}
            />
            <Text style={[styles.kmAway, styles.text1Typo]}>0.5 Km away</Text>
          </View>
          <View style={[styles.frameChild, styles.childLayout]} />
        </Pressable>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={styles.text}>#2</Text>
          </View>
          <View style={styles.rekhaParent}>
            <Text style={[styles.rekha, styles.rekhaTypo]}>Sudha</Text>
            <Text style={[styles.text1, styles.text1Typo]}>8896342614</Text>
          </View>
          <View style={styles.arrowsChevronRightParent}>
            <Image
              style={styles.arrowsChevronRight}
              contentFit="cover"
              source={require("../assets/24--arrows--chevronright1.png")}
            />
            <View style={styles.kmAwayWrapper}>
              <Text style={[styles.kmAway, styles.text1Typo]}>1 Km away</Text>
            </View>
          </View>
          <View style={[styles.frameChild, styles.childLayout]} />
        </View>
      </ScrollView>
      <View style={styles.deliveryAreaInner}>
        <SafeAreaView
          style={[styles.deliveriesInEbtLayoutWrapper, styles.wrapperFlexBox]}
        >
          <Text style={[styles.deliveriesInEbt, styles.rekhaTypo]}>
            Deliveries in EBT Layout
          </Text>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconBackBtn: {
    position: "relative",
  },
  iconBackBtn1: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  childLayout: {
    height: 1,
    width: 376,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  group5Layout: {
    width: 375,
    position: "absolute",
  },
  rekhaTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 1,
  },
  text1Typo: {
    height: 18,
    fontSize: FontSize.subheadlineBold_size,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    letterSpacing: 1,
  },
  frameFlexBox: {
    padding: Padding.p_5xs,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: Color.lightColor,
  },
  deliveries: {
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.size_base,
    color: Color.lightLabelPrimary,
  },
  deliveriesWrapper: {
    top: 80,
    padding: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
    justifyContent: "center",
    position: "absolute",
  },
  deliveryAreaChild: {
    bottom: 577,
  },
  wrapper: {
    zIndex: 0,
    padding: Padding.p_3xs,
  },
  rekha: {
    fontSize: FontSize.size_xl,
    lineHeight: 36,
    width: 108,
    height: 29,
    color: Color.lightLabelPrimary,
  },
  text1: {
    width: 106,
    marginTop: 5,
    lineHeight: 27,
    color: Color.lightLabelPrimary,
  },
  rekhaParent: {
    zIndex: 1,
  },
  arrowsChevronRight: {
    width: 24,
    height: 22,
  },
  kmAway: {
    lineHeight: 23,
    color: Color.colorDimgray_100,
    width: 104,
  },
  arrowsChevronRightParent: {
    zIndex: 2,
    alignItems: "flex-end",
  },
  frameChild: {
    bottom: -1,
    zIndex: 3,
  },
  kmAwayWrapper: {
    alignItems: "flex-end",
    flexDirection: "row",
  },

  frameParent: {
    top: 130,
    maxWidth: 375,
    left: 4,
    flex: 1,
  },
  deliveriesInEbt: {
    fontSize: FontSize.size_lg,
    color: Color.neutralDark,
    lineHeight: 27,
  },
  deliveryAreaInner: {
    left: 4,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  deliveryArea: {
    width: "100%",
    height: 814,
    backgroundColor: Color.lightColor,
  },
});

export default DeliveryArea;
