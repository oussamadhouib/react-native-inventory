import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import HomeScreen from "../screen/HomeScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function AddPostScreen() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            margin: 10,
            backgroundColor: "#E5C89A",
            width: 150,
            height: 150,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 12 }}>
            {"Display product photos"}
          </Text>
        </View>
        <TextInput
          value={"Name"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Model"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Nickname"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Brand"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Brand"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Brand"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Brand"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Brand"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Brand"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Brand"}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={"Brand"}
          placeholder={"Username"}
          style={styles.input}
        />
      </View>
    </ScrollView>
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
const Tab = createBottomTabNavigator();
export function HomeTabs() {
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
                source={require("../assets/home.png")}
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
                source={require("../assets/home.png")}
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
          tabBarIcon: () => (
            <View
              style={{ alignItems: "center", justifyContent: "center", top: 1 }}
            >
              <Image
                source={require("../assets/plus-circle.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: "#E5C89A",
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
                top: 10,
              }}
            >
              <Image
                source={require("../assets/home.png")}
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
});
