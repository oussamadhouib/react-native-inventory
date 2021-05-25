import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
import { View, Text, StyleSheet, Image } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function AddPostScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add Post!</Text>
    </View>
  );
}

function anotherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> another Screen Post!</Text>
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

function HomeTabs() {
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
          height: 60,
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
                top: 10,
              }}
            >
              <Image
                source={require("./assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
              <Text>{"Home"}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="another"
        component={anotherScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
              <Text>{"Home"}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: "center", justifyContent: "center", top: 1 }}
            >
              <Image
                source={require("./assets/plus-circle.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
            </View>
          ),
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
                top: 10,
              }}
            >
              <Image
                source={require("./assets/user-profile.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
              <Text>{"Profile"}</Text>
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
                top: 10,
              }}
            >
              <Image
                source={require("./assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#E5C89A" : "#748c94",
                }}
              />
              <Text>{"Home"}</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
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
});

export default App;
