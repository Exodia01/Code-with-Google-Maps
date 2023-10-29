import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Frame3 from "../components/Frame3";
import ArrowsChevronRight from "../components/ArrowsChevronRight";
import Line from "../components/Line";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ManageDdelivery = () => {
  const [frameFlatListData, setFrameFlatListData] = useState([
    <Frame3 />,
    <ArrowsChevronRight />,
    <Line />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.manageDdelivery}>
      <SafeAreaView style={[styles.tabs, styles.tabsPosition]}>
        <View style={[styles.deliverybutton, styles.unionParentFlexBox]}>
          <Text style={styles.historyTypo}>For Delivery</Text>
        </View>
        <View style={[styles.tabsChild, styles.tabsChildPosition]} />
      </SafeAreaView>
      <SafeAreaView
        style={[styles.localitiesToDeliverWrapper, styles.tabsPosition]}
      >
        <Text style={styles.historyTypo}>Localities To Deliver</Text>
      </SafeAreaView>
      <ScrollView
        style={[styles.frameParent, styles.tabsPosition]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <FlatList
          style={styles.frameChild}
          data={frameFlatListData}
          renderItem={({ item }) => item}
          contentContainerStyle={styles.frameFlatListContent}
        />
        <Pressable
          style={[styles.frameGroup, styles.bottomNavFlexBox]}
          onPress={() => navigation.navigate("DeliveryArea")}
        >
          <View style={styles.ebtLayoutHulimavParent}>
            <Text
              style={[styles.ebtLayoutHulimav, styles.ebtLayoutHulimavTypo]}
            >
              EBT layout, Hulimav
            </Text>
            <Text style={[styles.deliveries, styles.homeTypo]}>
              2 Deliveries
            </Text>
          </View>
          <Image
            style={styles.arrowsChevronRight}
            contentFit="cover"
            source={require("../assets/24--arrows--chevronright2.png")}
          />
          <View style={[styles.frameItem, styles.tabsChildPosition]} />
        </Pressable>
        <View style={[styles.frameGroup, styles.bottomNavFlexBox]}>
          <View style={styles.ebtLayoutHulimavParent}>
            <Text
              style={[styles.ebtLayoutHulimav, styles.ebtLayoutHulimavTypo]}
            >
              Vijaya bank layout, Arekare
            </Text>
            <Text style={[styles.deliveries, styles.homeTypo]}>
              1 Deliveries
            </Text>
          </View>
          <Image
            style={styles.arrowsChevronRight}
            contentFit="cover"
            source={require("../assets/24--arrows--chevronright2.png")}
          />
          <View style={[styles.frameItem, styles.tabsChildPosition]} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlatListContent: {
    flexDirection: "row",
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabsSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.lightColor,
  },
  homeTypo: {
    marginTop: -1,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
  },
  historyTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.poppinsMedium,
    lineHeight: 24,
  },
  tabsPosition: {
    width: 375,
    position: "absolute",
    left: 0,
  },

  tabsChildPosition: {
    bottom: 0,
    position: "absolute",
  },

  ebtLayoutHulimavTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 1,
  },
  deliverybutton: {
    borderRadius: Border.br_5xs,
    width: 115,
    zIndex: 0,
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  tabsChild: {
    left: 8,
    backgroundColor: Color.colorCrimson,
    width: 98,
    height: 2,
    zIndex: 1,
  },
  tabs: {
    top: 10,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.lightColor,
  },
  localitiesToDeliverWrapper: {
    top: 75,
    padding: Padding.p_3xs,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
  },
  frameChild: {
    alignSelf: "stretch",
    padding: Padding.p_5xs,
    flex: 1,
    backgroundColor: Color.lightColor,
  },
  ebtLayoutHulimav: {
    fontSize: FontSize.size_xl,
    lineHeight: 36,
    alignSelf: "stretch",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  deliveries: {
    lineHeight: 29,
    fontFamily: FontFamily.poppinsRegular,
  },
  ebtLayoutHulimavParent: {
    zIndex: 0,
    flex: 1,
  },
  arrowsChevronRight: {
    width: 24,
    height: 22,
    zIndex: 1,
  },
  frameItem: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    zIndex: 2,
    left: 0,
    bottom: 0,
  },
  frameGroup: {
    marginTop: 1,
    alignSelf: "stretch",
    padding: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.lightColor,
  },
  frameParent: {
    top: 150,
  },
  manageDdelivery: {
    width: "100%",
    height: 50,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightColor,
  },
  deliveriesInEbt: {
    fontSize: FontSize.size_lg,
    color: Color.neutralDark,
    lineHeight: 27,
  },
  deliveriesInEbtLayoutWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
});

export default ManageDdelivery;
