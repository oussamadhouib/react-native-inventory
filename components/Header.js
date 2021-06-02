import React from "react";
import { View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";
function Header() {
  return (
    <View
      style={{
        height: "8%",
        marginTop: Constants.statusBarHeight,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          // backgroundColor: "red",
          marginRight: "65%",
          alignItems: "center",
          justifyContent: "center",
          top: 18,
        }}
      >
        <Image
          source={require("../assets/logo-elita.png")}
          resizeMode="contain"
          style={{
            width: 100,
            height: 40,
          }}
        />
      </View>
      <View
        style={{
          marginLeft: "60%",
          width: 100,
          top: -18,
          // backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <AntDesign
          name="search1"
          size={25}
          style={{
            marginHorizontal: 30,
          }}
        />
        <Image
          source={require("../assets/profile-image.jpg")}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            borderRadius: 25,
          }}
        />
      </View>
    </View>
  );
}
export default Header;
