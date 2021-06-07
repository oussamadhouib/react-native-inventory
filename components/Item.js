import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Item({ item, navigation }) {
  return (
    <View style={styles.listItem}>
      <Image
        // source={{ uri: item.photo }}
        source={require("../assets/watch-test.png")}
        style={{
          width: "60%",
          height: 80,
          borderRadius: 10,
          width: 100,
          height: 100,
          marginTop: -35,
        }}
      />
      <View style={{ alignItems: "center", flex: 1, marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.model}</Text>
        <View
          style={{
            width: 150,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            margin: 9,
            opacity: 0.2,
          }}
        />
        <Text
          style={{
            marginTop: 5,
          }}
          onPress={() => navigation.navigate("viewProduct")}
        >
          $ 200,000 USD
        </Text>
      </View>
      {/* <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -20,
        }}
        onPress={() => navigation.navigate("viewProduct")}
      >
        <Text style={{ color: "green" }}>View</Text>
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  listItem: {
    marginVertical: windowHeight * 0.03,
    marginHorizontal: windowWidth * 0.01,
    padding: 10,
    backgroundColor: "#FFF",
    width: windowWidth * 0.05,
    flex: 1,
    alignSelf: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 3,
    borderRadius: 20,
  },
});
