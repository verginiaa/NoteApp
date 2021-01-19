import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//onPress={() => navigation.navigate("SingleNote")}
const Note = (props) => {
  const [color, setColor] = useState(
    props.category === "Movies"
      ? "#DFE3EE"
      : props.category === "Education"
      ? "#FBEEE6"
      : props.category === "Books"
      ? "#f5fff5"
      : props.category === "Personal"
      ? "#EDEFF4"
      : props.category === "Work"
      ? "#D9E3DA"
      : props.category === "Workout"
      ? "#F6F6EB"
      : "#F6ECF5"
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.na(props.item)} style={{}}>
        <Text
          style={{
            backgroundColor: color,
            width: 250,
            borderRadius: 20,
            fontWeight: "bold",
            borderColor: "black",
            borderWidth: 1,
            fontSize: 20,
            color: "black",
            fontWeight: "600",
            textAlign: "left",
            paddingLeft: 20,
            marginBottom: 20,
            paddingTop: 15,
            marginTop: 20,
            minHeight: 170,
            paddingRight: 20,
          }}
          numberOfLines={6}
          ellipsizeMode="tail"
        >
          {props.item.title}
          {"\n"} {"\n"}
          <Text
            style={{
              fontSize: 15,
              color: "black",
              fontWeight: "200",
              textAlign: "left",
            }}
          >
            {props.item.description}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#445161",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
