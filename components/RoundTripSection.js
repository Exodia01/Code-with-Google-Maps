import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { FontSize, Border, FontFamily, Color, Padding } from "../GlobalStyles";

const RoundTripSection = ({ style }) => {
  return (
    <View style={[styles.roundTripSection, style]}>
      <View style={styles.form}>
        <View style={styles.outlinedtextOnlyNoIcon}>
          <View
            style={[styles.outlinedLabeled, styles.outlinedLabeledPosition]}
          >
            <View style={[styles.dpBorder, styles.borderPosition]} />
            <View style={[styles.dpBorder1, styles.borderPosition]} />
            <Text style={[styles.textData, styles.textDataFlexBox]}>
              Select Departure
            </Text>
            <Text style={[styles.labelCaption, styles.textDataFlexBox]}>
              From
            </Text>
            <View
              style={[styles.airplanetakeoff, styles.airplanetakeoffLayout]}
            >
              <Image
                style={[styles.airplaneTakeOff, styles.airplanetakeoffLayout]}
                contentFit="cover"
                source={require("../assets/airplane-take-off.png")}
              />
            </View>
          </View>
        </View>
        <RNPTextInput
          style={[styles.outlinedtextOnlyNoIcon1, styles.buttonPrimaryFlexBox]}
          label="To"
          placeholder="Select Arrival"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-landing"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
        <View style={styles.inputsRow}>
          <RNPTextInput
            style={styles.outlinedtextIconLayout}
            label="Departure"
            placeholder="Select Date"
            mode="outlined"
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="calendar-blank"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
          <RNPTextInput
            style={[
              styles.outlinedtextOnlyNoIcon3,
              styles.outlinedtextIconLayout,
            ]}
            label="Return"
            placeholder="Select Date"
            mode="outlined"
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="calendar-blank"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
        </View>
        <View style={styles.inputsRow}>
          <RNPTextInput
            style={styles.outlinedtextIconLayout}
            label="Passengers"
            placeholder="Select Pax"
            mode="outlined"
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="account-multiple"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
          <RNPTextInput
            style={[
              styles.outlinedtextOnlyNoIcon3,
              styles.outlinedtextIconLayout,
            ]}
            label="Class"
            placeholder="Select Class"
            mode="outlined"
            left={
              <RNPTextInput.Icon style={{ marginTop: "50%" }} name="thumb-up" />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonPrimary, styles.buttonPrimaryFlexBox]}
        activeOpacity={0.8}
        onPress={() => {}}
      >
        <Text style={[styles.viewDetails, styles.textDataLayout]}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outlinedLabeledPosition: {
    left: 0,
    top: 0,
  },
  borderPosition: {
    borderStyle: "solid",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  textDataFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  airplanetakeoffLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  buttonPrimaryFlexBox: {
    alignSelf: "flex-start",
    width: 313,
  },
  outlinedtextIconLayout: {
    width: 150,
    alignSelf: "flex-start",
    height: 56,
  },
  textDataLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  dpBorder: {
    borderRadius: Border.br_5xs,
    borderColor: "#263238",
    borderWidth: 1,
    opacity: 0.16,
  },
  dpBorder1: {
    borderRadius: Border.br_9xs,
    borderColor: "#0e4da4",
    borderWidth: 2,
    display: "none",
  },
  textData: {
    top: 10,
    left: 41,
    letterSpacing: 0.1,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    display: "flex",
    width: 260,
    height: 36,
    alignItems: "center",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  labelCaption: {
    top: -7,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.black,
    width: 301,
    height: 16,
    left: 12,
  },
  airplaneTakeOff: {
    left: 0,
    top: 0,
    height: 20,
    width: 20,
  },
  airplanetakeoff: {
    top: 15,
    left: 12,
  },
  outlinedLabeled: {
    bottom: 0,
    right: 0,
    position: "absolute",
    left: 0,
    top: 0,
  },
  outlinedtextOnlyNoIcon: {
    height: 56,
    width: 313,
  },
  outlinedtextOnlyNoIcon1: {
    marginTop: 18,
    height: 56,
  },
  outlinedtextOnlyNoIcon3: {
    marginLeft: 13,
  },
  inputsRow: {
    flexDirection: "row",
    marginTop: 18,
  },
  form: {
    width: 313,
  },
  viewDetails: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightColor,
    textAlign: "center",
    width: 120,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOrange,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
  },
  roundTripSection: {
    alignSelf: "stretch",
    backgroundColor: Color.lightColor,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default RoundTripSection;
