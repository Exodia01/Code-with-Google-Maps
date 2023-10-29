import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "@rneui/themed";
import { Button as RNPButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const SuccessPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successPage}>
      <View style={[styles.frame, styles.framePosition1]}>
        <Text style={styles.delivered}>Delivery Successfull</Text>
      </View>
      <View style={[styles.frame1, styles.framePosition1]}>
        <View style={[styles.rekha9986214342Parent, styles.parentSpaceBlock]}>
          <Text style={[styles.rekha9986214342, styles.itemTypo]}>
            Rekha... 9986214342
          </Text>
          <Text
            style={[styles.srinivasaNilaya1st, styles.srinivasaNilaya1stTypo]}
          >
            201, 2nd floor, Lake Verandahs, House of Hiranandani, Hulimav, 560076
          </Text>
          <View style={[styles.frameChild, styles.framePosition]} />
          <Text
            style={[styles.deliveryTimeDecember, styles.srinivasaNilaya1stTypo]}
          >
            Delivery time: October 29,2023 at 10:30 PM
          </Text>
        </View>
        <View style={styles.frameItem} />
      </View>
      
      <View style={[styles.frameHomeWrapper, styles.frameWrapperFlexBox]}>
        <RNPButton
          style={[styles.frameHome, styles.frameWrapperFlexBox]}
          mode="contained"
          labelStyle={styles.frameHomeBtn}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "ManageDdelivery" })
          }
          contentStyle={styles.frameHomeBtn1}
        >
          <Text style={[styles.deliveryCompleted, styles.deliveryCompletedTypo]}>
          Delivery completed
        </Text>
        </RNPButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBackBtn: {
    position: "relative",
  },
  iconBackBtn1: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  frameHomeBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameHomeBtn1: {
    padding: 8,
    borderRadius: 8,
  },
  framePosition1: {
    width: '100%',
    left: 0,
    position: "absolute",
  },
  parentSpaceBlock: {
    padding: Padding.p_5xs,
    backgroundColor: Color.lightColor,
  },
  itemTypo: {
    zIndex: 0,
    height: 25,
    color: Color.lightLabelPrimary,
    fontSize: FontSize.subheadlineBold_size,
    fontFamily: FontFamily.poppinsBold,
    lineHeight: 27,
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 1,
  },
  srinivasaNilaya1stTypo: {
    marginTop: 30,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: 1,
    width:'100%'
  },
  framePosition: {
    zIndex: 2,
    borderColor: Color.colorGray_100,
    bottom: 0,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameWrapperFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  deliveryCompletedTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 1,
  },
  rs400Typo: {
    lineHeight: 29,
    fontSize: FontSize.size_base,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 1,
  },
  quantity5KgTypo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightLabelPrimary,
  },
  frameBorder: {
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    padding: Padding.p_5xs,
    alignSelf: "stretch",
    backgroundColor: Color.lightColor,
  },
  delivered: {
    fontSize: 25,
    lineHeight: 45,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 1,
    color: Color.lightColor,
    paddingLeft:50
  },
  frame: {
    top: 10,
    backgroundColor: "#68b44d",
    paddingVertical: 35,
  },
  rekha9986214342: {
    width: 247,
  },
  srinivasaNilaya1st: {
    width: '100%',
    height: 18,
    zIndex: 1,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightLabelPrimary,
  },
  frameChild: {
    alignSelf: "stretch",
  },
  deliveryTimeDecember: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: "#949191",
    zIndex: 3,
  },
  rekha9986214342Parent: {
    alignSelf: "stretch",
  },
  frameItem: {
    borderColor: "#ebebeb",
    marginTop: -3,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  frame1: {
    top: 145,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  item: {
    width: 58,
  },
  total: {
    color: Color.neutralDark,
  },
  rs780: {
    color: Color.colorOrangered,
  },
  totalRs780Container: {
    width: 135,
    height: 26,
    zIndex: 1,
  },
  frameInner: {
    width: 376,
  },
  itemParent: {
    top: 401,
    padding: Padding.p_5xs,
    backgroundColor: Color.lightColor,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rozanaBasmatiRice: {
    flex: 1,
  },
  rs400: {
    marginLeft: 7,
  },
  rozanaBasmatiRiceParent: {
    flexDirection: "row",
    flex: 1,
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
  quantity5Kg: {
    marginTop: 5,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    letterSpacing: 1,
  },
  frameContainer: {
    marginTop: 2,
  },
  frameParent: {
    alignSelf: "stretch",
  },
  deliveryCompleted: {
    width: 170,
    height: 23,
    marginTop: -79,
    color: Color.lightColor,
    fontSize: FontSize.size_base,
  },
  frame2: {
    top: 452,
    alignItems: "center",
    overflow: "hidden",
  },
  frameHome: {
    alignItems: "center",
  },
  frameHomeWrapper: {
    bottom: 82,
    padding: Padding.p_5xs,
    backgroundColor: Color.lightColor,
    width: 375,
    left: 0,
    position: "absolute",
  },
  successPage: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightColor,
  },
});

export default SuccessPage;
