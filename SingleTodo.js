import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
const SingleTodo = (props) => {
  const [checked, setChecked] = useState(props.item.done);
  console.log("chec : " + checked);
  console.log("pr :" + props.item.done + props.item.title);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.colOne}>
          <Checkbox
            status={
              checked == true || props.item.done === "true"
                ? "checked"
                : "unchecked"
            }
            onPress={() => {
              console.log("chec guwa : " + checked);

              setChecked(!checked);
              console.log("chec guwa b3d: " + checked);

              //  props.item.done = !props.item.done;
              props.chec(props.item, checked);
            }}
          />
        </View>
        <View style={styles.colTwo}>
          <Text
            style={
              props.item.done === "true" || checked == true
                ? styles.finish
                : styles.notFinished
            }
          >
            {props.item.title}
          </Text>
        </View>
        <View style={styles.colThree}>
          <TouchableOpacity onPress={() => props.dele(props.item)}>
            <Entypo name="cross" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SingleTodo;
//              props.item.done === "true" ? styles.finish : styles.notFinished

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5cad1",
  },
  body: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
  },
  colOne: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  colTwo: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
  },
  colThree: {
    flex: 1,
    flexDirection: "column",
    marginRight: 20,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  noteTitle: {
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: "coral",
  },
  notFinished: {},

  finish: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
