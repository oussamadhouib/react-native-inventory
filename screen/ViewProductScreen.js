import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ViewProductScreen() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar style="dark" backgroundColor="#F7F5F3" />
      <ScrollView>
        <View
          style={{
            marginTop: Constants.statusBarHeight,
            backgroundColor: "#F7F5F3",
            height: 70,
            width: "100%",
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            position: "absolute",
            justifyContent: "space-between",
            width: "100%",
            top: 0,
            zIndex: 1,
          }}
        >
          <AntDesign name="left" size={24} color="black" />
          <Feather name="more-horizontal" size={24} color="black" />
          <AntDesign name="heart" size={24} color="black" />
        </View>

        <View
          style={{
            width: windowWidth,
            marginVertical: 50,
            top: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            // paddingVertical: 10,
          }}
        >
          <View
            style={{
              width: windowWidth,
              height: 300,

              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: "#F7F5F3",
              // paddingVertical: 10,
            }}
          >
            <AntDesign name="left" size={20} color="black" />
            <Image
              // source={{ uri: item.photo }}
              source={require("../assets/watch-test.png")}
              style={{
                height: 200,
                width: "60%",
                borderRadius: 45,
              }}
            />
            <AntDesign name="right" size={20} color="black" />
          </View>
          <View
            style={{
              width: "100%",
              height: windowHeight,
              top: -30,
              // alignItems: "center",
              justifyContent: "center",
              borderRadius: 40,
              backgroundColor: "white",
              display: "flex",
              paddingHorizontal: 20,
              // paddingVertical: 10,
            }}
          >
            <Text
              style={{
                marginTop: -300,
                color: "#FF5722",
                fontWeight: "bold",
                fontSize: 24,
                marginBottom: 8,
              }}
            >
              Rolex Daytona
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 8,
              }}
            >
              $40,000 USD
            </Text>
            <Text
              style={{
                marginBottom: 8,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting
            </Text>
            <View
              style={{
                width: windowWidth,
                marginBottom: 8,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  fontWeight: "bold",
                }}
              >
                Model
              </Text>
              <Text>Daytona 1340sick</Text>
            </View>
            <View
              style={{
                width: windowWidth,
                marginBottom: 8,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  fontWeight: "bold",
                }}
              >
                Model
              </Text>
              <Text>Daytona 1340sick</Text>
            </View>
            <View
              style={{
                width: windowWidth,
                marginBottom: 8,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  fontWeight: "bold",
                }}
              >
                Model
              </Text>
              <Text>Daytona 1340sick</Text>
            </View>
            <View
              style={{
                width: windowWidth,
                marginBottom: 8,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  fontWeight: "bold",
                }}
              >
                Model
              </Text>
              <Text>Daytona 1340sick</Text>
            </View>
            <View
              style={{
                width: windowWidth,
                marginBottom: 8,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  fontWeight: "bold",
                }}
              >
                Model
              </Text>
              <Text>Daytona 1340sick</Text>
            </View>
            <View
              style={{
                width: windowWidth,

                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={20}
                color="black"
                style={{
                  marginRight: 20,
                }}
              />
              <Text>melbourne, australia</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default ViewProductScreen;
