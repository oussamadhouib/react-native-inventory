import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ViewProductScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: "-20%",
      }}
    >
      <AntDesign
        name="arrowleft"
        size={24}
        color="black"
        style={{
          marginVertical: 230,
          marginRight: "75%",
        }}
      />
      <Image
        source={{
          uri: "https://api-elita-staging.cyberdivision-test.xyz/api/media/Large__5ef435f2128bf3c6a1e3f2f3_mask 1-5b5a.jpeg",
        }}
        resizeMode="contain"
        style={{
          width: "80%",
          height: "35%",
          top: "-20%",
          borderRadius: 40,
          marginVertical: -100,
        }}
      />

      <View
        style={{
          // borderWidth: 1,
          // borderColor: "black",
          width: "90%",
          marginVertical: "2%",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        {" "}
        <Text
          style={{
            marginLeft: "3%",
            marginHorizontal: "-20%",
          }}
        >
          Tittle
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "black",
            width: "75%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginLeft: "30%",
          }}
        >
          <Text>Model</Text>
        </View>
      </View>
      <View
        style={{
          // borderWidth: 1,
          // borderColor: "black",
          width: "90%",
          marginVertical: "2%",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        {" "}
        <Text
          style={{
            marginLeft: "3%",
            marginHorizontal: "-20%",
          }}
        >
          Tittle
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "black",
            width: "75%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginLeft: "30%",
          }}
        >
          <Text>Model</Text>
        </View>
      </View>
      <View
        style={{
          // borderWidth: 1,
          // borderColor: "black",
          width: "90%",
          marginVertical: "2%",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        {" "}
        <Text
          style={{
            marginLeft: "3%",
            marginHorizontal: "-20%",
          }}
        >
          Tittle
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "black",
            width: "75%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginLeft: "30%",
          }}
        >
          <Text>Model</Text>
        </View>
      </View>
      <View
        style={{
          // borderWidth: 1,
          // borderColor: "black",
          width: "90%",
          marginVertical: "2%",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        {" "}
        <Text
          style={{
            marginLeft: "3%",
            marginHorizontal: "-20%",
          }}
        >
          Tittle
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "black",
            width: "75%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginLeft: "30%",
          }}
        >
          <Text>Model</Text>
        </View>
      </View>
      <View
        style={{
          // borderWidth: 1,
          // borderColor: "black",
          width: "90%",
          marginVertical: "2%",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        {" "}
        <Text
          style={{
            marginLeft: "3%",
            marginHorizontal: "-20%",
          }}
        >
          Tittle
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "black",
            width: "75%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginLeft: "30%",
          }}
        >
          <Text>Model</Text>
        </View>
      </View>
    </View>
  );
}
export default ViewProductScreen;
