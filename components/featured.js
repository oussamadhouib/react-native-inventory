import React from "react";
import { View, Image, StyleSheet } from "react-native";
export function Featured({ item, navigation }) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 60, height: 60, borderRadius: 10 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listItem: {
    margin: 5,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
});
