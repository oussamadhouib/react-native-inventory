import React from "react";
import { View, Text, Image } from "react-native";

function ViewProductScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__5ef435f2128bf3c6a1e3f2f3_mask 1-5b5a.jpeg",
        }}
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
          top: -150,
          borderRadius: 35,
        }}
      />
      <Text>Product!</Text>
    </View>
  );
}
export default ViewProductScreen;
