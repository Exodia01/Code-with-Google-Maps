import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const OtpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otpPage}>
      <View style={[styles.rekha9986214342Parent, styles.group9Layout]}>
        <Text style={styles.rekha9986214342}>Rekha... 9986214342</Text>
        <View style={[styles.frameChild, styles.childBorder]} />
      </View>
      <View style={[styles.otpPageInner, styles.frameItemFlexBox]}>
        <RNPButton
          style={[styles.frameItem, styles.frameItemFlexBox]}
          mode="contained"
          labelStyle={styles.frameButtonBtn}
          onPress={() => navigation.navigate("SuccessPage")}
          contentStyle={styles.frameButtonBtn1}
        >
          Complete Delivery
        </RNPButton>
      </View>
      <View style={[styles.enterOtpWrapper, styles.group9FlexBox]}>
        <Text style={[styles.enterOtp, styles.otpTypo]}>Enter OTP</Text>
      </View>
      <TextInput
        style={[styles.otpPageChild, styles.childBorder]}
        placeholder="    Enter OTP"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  statusDeliveryFlexBox: {
    textAlign: "left",
    letterSpacing: 1,
    color: Color.lightLabelPrimary,
  },
  group9Layout: {
    width: 375,
    left: 0,
    backgroundColor: Color.lightColor,
  },
  childBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  frameItemFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  group9FlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  otpTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 27,
    textAlign: "left",
    letterSpacing: 1,
  },
  statusDelivery: {
    top: 810,
    left: 26,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 322,
    height: 36,
    position: "absolute",
  },
  rekha9986214342: {
    fontSize: FontSize.subheadlineBold_size,
    width: 247,
    height: 25,
    zIndex: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 27,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    letterSpacing: 1,
  },
  srinivasaNilaya1st: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsRegular,
    zIndex: 1,
    marginTop: 4,
  },
  frameChild: {
    bottom: 0,
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    zIndex: 2,
    left: 0,
    borderStyle: "solid",
  },
  rekha9986214342Parent: {
    top: 10,
    padding: Padding.p_5xs,
    position: "absolute",
  },
  frameItem: {
    alignItems: "center",
  },
  otpPageInner: {
    bottom: 70,
    padding: Padding.p_5xs,
    width: 375,
    left: 0,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  enterOtp: {
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_lg,
  },
  enterOtpWrapper: {
    top: 72,
    left: 4,
    padding: Padding.p_5xs,
  },
  otpPageChild: {
    top: 120,
    left: 16,
    borderRadius: Border.br_5xs,
    borderColor: Color.lightLabelPrimary,
    borderWidth: 1,
    width: 332,
    height: 41,
    backgroundColor: Color.lightColor,
  },
  otpPage: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.lightColor,
  },
});

export default OtpPage;
