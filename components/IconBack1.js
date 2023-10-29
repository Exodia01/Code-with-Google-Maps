import * as React from "react";
import { Button } from "@rneui/themed";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IconBack = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Button
      radius="5"
      iconPosition="left"
      type="clear"
      color="#fff"
      onPress={() => navigation.navigate("DeliveryDetails")}
      containerStyle={styles.iconBackBtn}
      buttonStyle={styles.iconBackBtn1}
    />
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
});

export default IconBack;
