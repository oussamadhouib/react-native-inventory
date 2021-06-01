import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import HomeScreen from "../screen/HomeScreen";
import AddPostScreen from "../screen/AddPostScreen";
import CategoriesScreen from "../screen/CategoriesScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function searchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>search!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

let animation = new Animated.Value(0);
const toggleMenu = () => {
  const toValue = open ? 0 : 1;
  Animated.spring(animation, {
    toValue,
    friction: 5,
  }).start();
  open = !open;
};

// button rotation
const rotation = {
  transform: [
    {
      rotate: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"],
      }),
    },
  ],
};
const userStyle = {
  transform: [
    {
      scale: animation,
    },
    {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -90],
      }),
    },
  ],
};
const shopStyle = {
  transform: [
    {
      scale: animation,
    },
    {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -60],
      }),
    },
    {
      translateX: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -60],
      }),
    },
  ],
};
const categoryStyle = {
  transform: [
    {
      scale: animation,
    },
    {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -60],
      }),
    },
    {
      translateX: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [24, 60],
      }),
    },
  ],
};

const CustomTabBarButton = ({ navigation }) => (
  <View
    style={{
      top: -30,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <TouchableWithoutFeedback>
      <Animated.View style={[styles.buttom, styles.secondary, categoryStyle]}>
        <AntDesign name="addfolder" size={20} color="#E5C89A" />
      </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback>
      <Animated.View style={[styles.buttom, styles.secondary, userStyle]}>
        <AntDesign name="adduser" size={20} color="#E5C89A" />
      </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => navigation.navigate("addPost")}>
      <Animated.View style={[styles.buttom, styles.secondary, shopStyle]}>
        <Entypo name="shop" size={20} color="#E5C89A" />
      </Animated.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => toggleMenu()}>
      <Animated.View style={[styles.buttom, styles.menu, rotation]}>
        <AntDesign name="plus" size={24} color="#fff" />
      </Animated.View>
    </TouchableWithoutFeedback>
  </View>
);

export function HomeTabs({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,

        style: {
          position: "absolute",
          buttom: 25,
          // left:12,
          // right:12,

          elevation: 0,
          backgroundColor: "#ffffff",
          // borderRadius:15,
          height: 65,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Products"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/products.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
              <Text style={{ fontSize: 11 }}>{"Products"}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="another"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/categories2.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
              <Text style={{ fontSize: 11 }}>{"Categories"}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarButton: () => <CustomTabBarButton navigation={navigation} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/user-profile.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
              <Text style={{ fontSize: 11 }}>{"Users"}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={searchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/settings2.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
              <Text style={{ fontSize: 11 }}>{"Settings"}</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  input: {
    width: "80%",
    marginLeft: "20%",
    marginRight: "20%",
    height: 50,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  buttom: {
    width: 50,
    height: 50,
    borderRadius: 30,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowColor: "#E5C89A",
    shadowOffset: { height: 10 },
  },
  menu: { backgroundColor: "#E5C89A" },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
  },
});
