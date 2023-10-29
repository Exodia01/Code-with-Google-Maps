import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const DeliveryDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deliveryDetails}>
      <View style={[styles.rekha9986214342Parent, styles.parentPosition]}>
        <Text style={[styles.rekha9986214342, styles.itemsTypo]}>
          Rekha... 9986214342
        </Text>
        <Text
          style={[styles.srinivasaNilaya1st, styles.srinivasaNilaya1stPosition]}
        >
          201, 2nd floor, Lake Verandahs, House of Hiranandani, Hulimav, 560076
        </Text>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.itemsParent, styles.frameParentFlexBox]}>
        <Text style={[styles.items, styles.itemsTypo]}>Items</Text>
        <Text
          style={[
            styles.totalRs780Container,
            styles.srinivasaNilaya1stPosition,
          ]}
        >
          <Text style={styles.total}>{`Total: `}</Text>
          <Text style={styles.rs780}> Rs 780</Text>
        </Text>
        <View style={styles.frameChild} />
      </View>
      <ScrollView
        style={[styles.frameParent, styles.group7Position]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameBorder}>
          <View style={[styles.frameWrapper, styles.frameParentFlexBox]}>
            <View style={styles.rozanaBasmatiRiceParent}>
              <Text style={[styles.rozanaBasmatiRice, styles.rs400Typo]}>
                Rozana basmati rice
              </Text>
              <Text
                style={[styles.rs400, styles.rs400Typo]}
              >{`Rs.  400  `}</Text>
            </View>
          </View>
          <Text
            style={[styles.quantity5Kg, styles.quantity5KgTypo]}
          >{`Quantity: 5 Kg  `}</Text>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.frameWrapper, styles.frameParentFlexBox]}>
            <View style={styles.rozanaBasmatiRiceParent}>
              <Text style={[styles.rozanaBasmatiRice, styles.rs400Typo]}>
                Surf excel quick wash
              </Text>
              <Text
                style={[styles.rs400, styles.rs400Typo]}
              >{`Rs. 380  `}</Text>
            </View>
          </View>
          <Text
            style={[styles.quantity5Kg, styles.quantity5KgTypo]}
          >{`Quantity: 2 Kg  `}</Text>
        </View>
      </ScrollView>
      <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
        <RNPButton
          style={styles.otpButton}
          mode="contained"
          onPress={() => navigation.navigate("OtpPage")}
          contentStyle={styles.frameButton1Btn1}
        >
          Send OTP and bill
        </RNPButton>
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
  frameButtonBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameButtonBtn1: {
    padding: 8,
    borderRadius: 8,
  },
  frameButton1Btn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameButton1Btn1: {
    padding: 8,
    borderRadius: 8,
  },
  iconBackBtn: {
    position: "relative",
  },
  iconBackBtn1: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  quantity5KgFlexBox: {
    textAlign: "left",
    letterSpacing: 1,
  },
  parentPosition: {
    padding: Padding.p_5xs,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  itemsTypo: {
    zIndex: 0,
    height: 25,
    fontSize: FontSize.subheadlineBold_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 27,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    letterSpacing: 1,
  },
  srinivasaNilaya1stPosition: {
    zIndex: 1,
    textAlign: "left",
    letterSpacing: 1,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  otpButton: {
    justifyContent: "center",
    flexDirection: "row",
  },
  group7Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  rs400Typo: {
    lineHeight: 29,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.lightLabelPrimary,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
  },
  quantity5KgTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
    color: Color.lightLabelPrimary,
  },
  frameBorder: {
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    alignSelf: "stretch",
    padding: Padding.p_5xs,
    backgroundColor: Color.lightColor,
  },
  billDetailsTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  statusDelivery: {
    top: 810,
    left: 26,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 322,
    height: 36,
    color: Color.lightLabelPrimary,
    position: "absolute",
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
  },
  rekha9986214342: {
    width: 247,
  },
  srinivasaNilaya1st: {
    marginTop: 4,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
  },
  frameChild: {
    bottom: 0,
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    zIndex: 2,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  rekha9986214342Parent: {
    top: 10,
  },
  items: {
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
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    zIndex: 1,
  },
  itemsParent: {
    top: 100,
    padding: Padding.p_5xs,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
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
    textAlign: "left",
    letterSpacing: 1,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
  },
  frameContainer: {
    marginTop: 2,
  },
  frameParent: {
    top: 154,
    maxWidth: 375,
    flex: 1,
  },
  frameParent1: {
    bottom: 70,
    padding: Padding.p_5xs,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  deliveryDetails: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightColor,
  },
});

export default DeliveryDetails;
