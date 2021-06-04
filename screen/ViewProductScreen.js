import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { AntDesign, Feather } from "@expo/vector-icons";

function ViewProductScreen() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          backgroundColor: "white",
          height: 70,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: 1,
        }}
      >
        <AntDesign
          name="left"
          size={24}
          color="black"
          style={{
            left: 15,
            position: "absolute",
          }}
        />
        <Feather name="more-horizontal" size={24} color="black" />
      </View>
      <View
        style={{
          width: 300,
          backgroundColor: "red",
          marginVertical: 50,
          top: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          // source={{ uri: item.photo }}
          source={require("../assets/watch.jpg")}
          style={{
            height: 200,
            width: "60%",
            borderRadius: 50,
            marginVertical: 10,
          }}
        />
        <View
          style={{
            // backgroundColor: "red",
            height: 40,
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <Image
            // source={{ uri: item.photo }}
            source={require("../assets/watch.jpg")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              margin: 3,
            }}
          />
          <Image
            // source={{ uri: item.photo }}
            source={require("../assets/watch.jpg")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              margin: 3,
            }}
          />
          <Image
            // source={{ uri: item.photo }}
            source={require("../assets/watch.jpg")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              margin: 3,
            }}
          />
          <Image
            // source={{ uri: item.photo }}
            source={require("../assets/watch.jpg")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              margin: 3,
            }}
          />
          <Image
            // source={{ uri: item.photo }}
            source={require("../assets/watch.jpg")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              margin: 3,
            }}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <View
            style={{
              margin: 20,
              width: 200,
              // backgroundColor: "red",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                marginVertical: 5,
              }}
            >
              Richard Mille
            </Text>
            <Text>RM 035</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            $ 200,000 USD
          </Text>
        </View>
      </View>
      {/* carte */}
      <View
        style={{
          // margin: 20,
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          // justifyContent: "space-around",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 20,
            position: "relative",
            paddingHorizontal: 20,

            // backgroundColor: "red",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Refrerence
          </Text>
          <Text
            style={{
              fontSize: 15,
              position: "absolute",
              // justifyContent: "flex-end",
              right: 0,

              // marginLeft: "30%",
            }}
          >
            15500ST.OO.1220ST.04
          </Text>
        </View>
      </View>
    </View>
  );
}
export default ViewProductScreen;
