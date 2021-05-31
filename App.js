import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screen/LoginScreen";
import { HomeTabs } from "./components/HomeTabs";
import AddPostScreen from "./screen/AddPostScreen";
import ViewProductScreen from "./screen/ViewProductScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="addPost" component={AddPostScreen} />
        <Stack.Screen name="viewProduct" component={ViewProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
