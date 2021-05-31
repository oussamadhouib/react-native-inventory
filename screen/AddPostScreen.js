import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

function AddPostScreen() {
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
    <View style={{ flex: 1, marginTop: 50 }}>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          top: 20,
          margin: 30,
          marginLeft: 20,
        }}
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
        activeStepIconBorderColor="#E5C89A"
        completedProgressBarColor="#E5C89A"
        completedStepIconColor="#E5C89A"
        activeLabelColor="#E5C89A"
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
            <TextInput
              //   value={"username"}
              onChangeText={(e) => console.log(e)}
              placeholder={"Tittle"}
              style={styles.input}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Infos"
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
});

export default AddPostScreen;
