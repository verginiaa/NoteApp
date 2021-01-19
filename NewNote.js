import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "./GlobalStyles";
const NewNote = ({ navigation, route }) => {
  console.log("props");

  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(
    route.params.category === "Movies"
      ? "#DFE3EE"
      : route.params.category === "Education"
      ? "#FBEEE6"
      : route.params.category === "Books"
      ? "#f5fff5"
      : route.params.category === "Personal"
      ? "#EDEFF4"
      : route.params.category === "Work"
      ? "#D9E3DA"
      : route.params.category === "Workout"
      ? "#F6F6EB"
      : "#F6ECF5"
  );
  //F6F6EB
  const [colorHeader, setColorHeader] = useState(
    route.params.category === "Movies"
      ? "#23303f"
      : route.params.category === "Education"
      ? "#23303f"
      : route.params.category === "Books"
      ? "#23303f"
      : route.params.category === "Personal"
      ? "#23303f"
      : route.params.category === "Work"
      ? "#23303f"
      : route.params.category === "Workout"
      ? "#23303f"
      : "#23303f"
  );
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: colorHeader,
          flexDirection: "row",
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Text style={globalStyles.text}>Title :</Text>
        <TextInput
          style={globalStyles.textInp}
          multiline
          value={input}
          onChangeText={(val) => setInput(val)}
        />
        <View style={globalStyles.body}>
          <TouchableOpacity
            style={{ paddingRight: 40 }}
            onPress={() => {
              navigation.goBack();
              route.params.save(input, description);
            }}
          >
            <AntDesign name="check" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginRight: 10 }}
            //  onPress={() => route.params.delet(route.params.item)}
            onPress={() =>
              Alert.alert(
                "Delete " + input,
                "Are you sure you want to delete " + input + " ?",
                [
                  {
                    text: "Yes",
                    onPress: () => {
                      navigation.goBack(),
                        route.params.delet(route.params.item);
                    },
                  },
                  { text: "No", onPress: () => console.log("no") },
                ]
              )
            }
          >
            <AntDesign name="delete" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: color,
          paddingLeft: 10,
          flex: 1,
          paddingTop: 30,
        }}
      >
        <TextInput
          style={{ fontSize: 20 }}
          multiline
          value={description}
          onChangeText={(val) => setDescription(val)}
        />
      </View>
    </View>
  );
};
export default NewNote;
