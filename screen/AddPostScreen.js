import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
// import { Picker } from "@react-native-picker/picker";

function AddPostScreen({ navigation }) {
  // const [selectedLanguage, setSelectedLanguage] = useState();

  const onNextStep = () => {
    console.log("called next step");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

  const onSubmitSteps = () => {
    console.log("called on submit step.");
  };
  const buttonTextStyle = {
    color: "#393939",
    height: 60,
    fontSize: 18,
  };

  return (
    <View style={{ flex: 1, marginTop: "13%" }}>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          top: "2%",
          margin: 30,
          marginLeft: 20,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/cross.png")}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
      <ProgressSteps
        activeStepIconBorderColor="#FF5722"
        completedProgressBarColor="#FF5722"
        completedStepIconColor="#FF5722"
        activeLabelColor="#FF5722"
      >
        <ProgressStep
          label="Product"
          onNext={() => onNextStep()}
          onPrevious={() => onPrevStep()}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <TextInput
              //   value={"username"}
              onChangeText={(e) => console.log(e)}
              placeholder={"Tittle"}
              style={styles.input}
            />
            <TextInput
              //   value={"username"}
              onChangeText={(e) => console.log(e)}
              placeholder={"Tittle"}
              style={styles.input}
            />
            <TextInput
              //   value={"username"}
              onChangeText={(e) => console.log(e)}
              placeholder={"Tittle"}
              style={styles.input}
            />
            <TextInput
              //   value={"username"}
              onChangeText={(e) => console.log(e)}
              placeholder={"Tittle"}
              style={styles.input}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Product"
          onNext={() => onNextStep()}
          onPrevious={() => onPrevStep()}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <TextInput
              //   value={"username"}
              onChangeText={(e) => console.log(e)}
              placeholder={"Tittle"}
              style={styles.input}
            />
            <TextInput
              //   value={"username"}
              onChangeText={(e) => console.log(e)}
              placeholder={"Tittle"}
              style={styles.input}
            />
            <TextInput
              //   value={"username"}
              onChangeText={(e) => console.log(e)}
              placeholder={"Tittle"}
              style={styles.input}
            />
            {/* <Picker
              selectedValue={selectedLanguage}
              style={styles.select}
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
          </View>
        </ProgressStep>
        <ProgressStep
          label="Photos"
          onNext={() => onNextStep()}
          onPrevious={() => onPrevStep()}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#EFEBEA",
              marginTop: 50,
              borderRadius: 35,
              width: "70%",
              height: 250,
              marginLeft: "15%",
            }}
          >
            <Image
              source={require("../assets/image-upload.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                top: -20,
              }}
            />
            <Text>Display Photos</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FF5722",
                width: 120,
                height: 40,
                borderRadius: 15,
                top: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Browse</Text>
            </TouchableOpacity>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Confirm"
          onPrevious={() => onPrevStep()}
          onSubmit={() => onSubmitSteps()}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: "center" }}>
            <Text>Confirm order step content</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}
const styles = StyleSheet.create({
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
  select: {
    width: "80%",
    marginLeft: "20%",
    marginRight: "20%",
    height: 50,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});

export default AddPostScreen;
