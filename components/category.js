import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
export function Category({ item }) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 60, height: 60, borderRadius: 10 }}
      />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text
          style={{
            fontWeight: "bold",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          {item.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "green" }}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "red" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
});
