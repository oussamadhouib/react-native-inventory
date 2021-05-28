import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { Item } from "../components/Item";

function HomeScreen() {
  let state = {
    data: [
      {
        name: "Rolex",
        model: "Rolex Daytona",
        ref: "1",
        photo:
          "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__5ef435f2128bf3c6a1e3f2f3_mask 1-5b5a.jpeg",
      },
      {
        name: "Richard Mille",
        model: "RM 035",
        ref: "5",
        photo:
          "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__image 1-3184.png",
      },
      {
        name: "Rolex",
        model: "Rolex Daytona",
        ref: "2",
        photo:
          "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__5ef435f2128bf3c6a1e3f2f3_mask 1-5b5a.jpeg",
      },
      {
        name: "Richard Mille",
        model: "RM 035",
        ref: "3",
        photo:
          "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__image 1-3184.png",
      },
      {
        name: "Rolex",
        model: "Rolex Daytona",
        ref: "4",
        photo:
          "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__5ef435f2128bf3c6a1e3f2f3_mask 1-5b5a.jpeg",
      },
      {
        name: "Rolex",
        model: "Rolex Daytona",
        ref: "6",
        photo:
          "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__5ef435f2128bf3c6a1e3f2f3_mask 1-5b5a.jpeg",
      },
      {
        name: "Rolex",
        model: "Rolex Daytona",
        ref: "7",
        photo:
          "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__5ef435f2128bf3c6a1e3f2f3_mask 1-5b5a.jpeg",
      },
      {
        name: "Rolex",
        model: "Rolex Daytona",
        ref: "8",
        photo:
          "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__5ef435f2128bf3c6a1e3f2f3_mask 1-5b5a.jpeg",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          marginTop: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            margin: 10,
            backgroundColor: "#E5C89A",
            width: 75,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 12 }}>{"inStock"}</Text>
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: "#E5C89A",
            width: 75,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 12 }}>{"Reserved"}</Text>
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: "#E5C89A",
            width: 75,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 12 }}>{"Sold"}</Text>
        </View>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={state.data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.ref}
      />
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 50,
  },
});
