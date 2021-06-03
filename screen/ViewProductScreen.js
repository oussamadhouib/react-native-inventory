import React from "react";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";

function ViewProductScreen() {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: "red",
        height: "5%",
      }}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </View>
  );
}
export default ViewProductScreen;
